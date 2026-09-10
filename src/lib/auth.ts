import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "ventrio_admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 8;

type AdminSession = { email: string; exp: number };

function sessionSecret() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error("SESSION_SECRET must be at least 32 characters.");
  return secret;
}

function signature(value: string) {
  return createHmac("sha256", sessionSecret()).update(value).digest("base64url");
}

export function createSessionToken(email: string) {
  const payload = Buffer.from(JSON.stringify({ email, exp: Date.now() + MAX_AGE_SECONDS * 1000 })).toString("base64url");
  return `${payload}.${signature(payload)}`;
}

export function verifySessionToken(token?: string): AdminSession | null {
  if (!token) return null;
  const [payload, provided] = token.split(".");
  if (!payload || !provided) return null;
  let expected: string;
  try { expected = signature(payload); } catch { return null; }
  const providedBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expected);
  if (providedBuffer.length !== expectedBuffer.length || !timingSafeEqual(providedBuffer, expectedBuffer)) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as AdminSession;
    return session.email && Number.isFinite(session.exp) && session.exp > Date.now() ? session : null;
  } catch { return null; }
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(COOKIE_NAME)?.value);
}

export const adminCookie = {
  name: COOKIE_NAME,
  options: { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax" as const, path: "/", maxAge: MAX_AGE_SECONDS },
};

export function isConfiguredAdmin(email: string) {
  return process.env.ADMIN_EMAIL?.trim().toLowerCase() === email.trim().toLowerCase() && Boolean(process.env.ADMIN_PASSWORD_HASH);
}
