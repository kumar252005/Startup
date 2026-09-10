import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { updateLeadStatus } from "@/lib/db";
import { leadStatuses } from "@/lib/validation";

export const runtime = "nodejs";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { status } = await request.json();
    if (!leadStatuses.includes(status)) return NextResponse.json({ error: "Invalid status." }, { status: 422 });
    const { id } = await params;
    const lead = await updateLeadStatus(id, status, session.email);
    return lead ? NextResponse.json({ lead }) : NextResponse.json({ error: "Lead not found." }, { status: 404 });
  } catch (error) {
    console.error("Unable to update lead", error);
    return NextResponse.json({ error: "Unable to update lead." }, { status: 500 });
  }
}
