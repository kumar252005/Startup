import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { listLeads } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, Number(searchParams.get("page") || 1));
  const source = searchParams.get("source") || undefined;
  const status = searchParams.get("status") || undefined;
  const search = searchParams.get("search")?.slice(0, 120) || undefined;
  try { return NextResponse.json(await listLeads({ page, source, status, search })); }
  catch (error) { console.error("Unable to list leads", error); return NextResponse.json({ error: "Unable to load leads." }, { status: 503 }); }
}
