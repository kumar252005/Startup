import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { adminCookie, createSessionToken, isConfiguredAdmin } from "@/lib/auth";
import { adminLoginSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const parsed = adminLoginSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message || "Check your credentials." }, { status: 422 });
    const { email, password } = parsed.data;
    const passwordHash = process.env.ADMIN_PASSWORD_HASH;
    if (!isConfiguredAdmin(email) || !passwordHash || !(await bcrypt.compare(password, passwordHash))) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    const response = NextResponse.json({ ok: true });
    response.cookies.set(adminCookie.name, createSessionToken(email), adminCookie.options);
    return response;
  } catch (error) {
    console.error("Admin login failed", error);
    return NextResponse.json({ error: "Admin authentication is not configured." }, { status: 503 });
  }
}
