"use client";

import { useState } from "react";
import type { LeadRecord } from "@/lib/db";
import type { LeadStatus } from "@/lib/validation";
import { formatDate } from "@/lib/utils";

const statuses: LeadStatus[] = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL_SENT", "NEGOTIATION", "WON", "LOST"];

export function AdminLeadTable({ leads }: { leads: LeadRecord[] }) {
  const [updating, setUpdating] = useState<string | null>(null); const [error, setError] = useState("");
  async function updateStatus(id: string, status: LeadStatus) { setUpdating(id); setError(""); try { const response = await fetch(`/api/admin/leads/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) }); if (!response.ok) throw new Error("Could not update lead status."); window.location.reload(); } catch (cause) { setError(cause instanceof Error ? cause.message : "Could not update lead status."); setUpdating(null); } }
  if (!leads.length) return <div className="rounded-lg border border-dashed border-zinc-300 bg-white px-6 py-14 text-center text-sm text-zinc-600">No leads match the current search or filter.</div>;
  return <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white"><table className="min-w-[900px] w-full text-left text-sm"><thead className="border-b border-zinc-200 bg-zinc-50 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500"><tr><th className="px-5 py-3">Lead</th><th className="px-5 py-3">Source</th><th className="px-5 py-3">Requirement</th><th className="px-5 py-3">Received</th><th className="px-5 py-3">Status</th></tr></thead><tbody className="divide-y divide-zinc-100">{leads.map((lead) => <tr key={lead.id} className="align-top"><td className="px-5 py-4"><p className="font-semibold text-zinc-950">{lead.name}</p><a className="mt-1 block text-zinc-500 hover:text-blue-600" href={`mailto:${lead.email}`}>{lead.email}</a>{lead.company && <p className="mt-1 text-xs text-zinc-500">{lead.company}</p>}</td><td className="px-5 py-4"><span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">{lead.source}</span></td><td className="max-w-sm px-5 py-4"><p className="line-clamp-3 leading-5 text-zinc-600">{lead.requirement}</p></td><td className="whitespace-nowrap px-5 py-4 text-zinc-500">{formatDate(lead.created_at.slice(0, 10))}</td><td className="px-5 py-4"><select value={lead.status} disabled={updating === lead.id} onChange={(event) => updateStatus(lead.id, event.target.value as LeadStatus)} className="rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-xs font-medium text-zinc-700 focus:border-blue-600 focus:outline-none">{statuses.map((status) => <option key={status} value={status}>{status.replace("_", " ")}</option>)}</select></td></tr>)}</tbody></table>{error && <p role="alert" className="border-t border-red-100 bg-red-50 px-5 py-3 text-sm text-red-700">{error}</p>}</div>;
}
