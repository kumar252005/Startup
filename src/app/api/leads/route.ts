import { NextResponse } from "next/server";
import { createLead, databaseConfigured } from "@/lib/db";
import { notifyTeamOfLead } from "@/lib/email";
import { checkLeadRateLimit } from "@/lib/rate-limit";
import { leadSchema } from "@/lib/validation";

export const runtime = "nodejs";

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  if (!databaseConfigured()) return NextResponse.json({ error: "Lead storage is not configured yet. Please email the Ventrio team directly." }, { status: 503 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const rate = await checkLeadRateLimit(ip);
  if (!rate.allowed) return NextResponse.json({ error: "Please wait a moment before submitting another request." }, { status: 429 });
  try {
    const payload = await request.json();
    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message || "Please check the form and try again." }, { status: 422 });
    const lead = await createLead(parsed.data);
    void notifyTeamOfLead(lead).catch((error) => console.error("Lead notification failed", error));
    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json({ error: "We could not send your request right now. Please try again shortly." }, { status: 500 });
  }
}
