import { neon } from "@neondatabase/serverless";
import type { LeadInput, LeadStatus } from "@/lib/validation";

let sqlClient: ReturnType<typeof neon> | undefined;

function getSql() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("DATABASE_URL is not configured.");
  sqlClient ??= neon(connectionString);
  return sqlClient;
}

export function databaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export type LeadRecord = LeadInput & {
  id: string;
  status: LeadStatus;
  created_at: string;
  updated_at: string;
};

export async function createLead(input: LeadInput) {
  const sql = getSql();
  const result = await sql`
    INSERT INTO leads (name, email, phone, company, industry, requirement, problem, expected_users, budget, timeline, preferred_meeting_time, source, status)
    VALUES (${input.name}, ${input.email}, ${input.phone || null}, ${input.company || null}, ${input.industry || null}, ${input.requirement}, ${input.problem || null}, ${input.expectedUsers || null}, ${input.budget || null}, ${input.timeline || null}, ${input.preferredMeetingTime || null}, ${input.source}, 'NEW')
    RETURNING id, name, email, phone, company, industry, requirement, problem, expected_users as "expectedUsers", budget, timeline, preferred_meeting_time as "preferredMeetingTime", source, status, created_at, updated_at
  `;
  const [lead] = result as unknown as LeadRecord[];
  return lead as LeadRecord;
}

export async function listLeads({ source, status, search, sort = "created_at", page = 1, pageSize = 20 }: { source?: string; status?: string; search?: string; sort?: string; page?: number; pageSize?: number }) {
  const sql = getSql();
  const offset = Math.max(0, page - 1) * pageSize;
  const rows = await sql`
    SELECT id, name, email, phone, company, industry, requirement, problem, expected_users as "expectedUsers", budget, timeline, preferred_meeting_time as "preferredMeetingTime", source, status, created_at, updated_at
    FROM leads
    WHERE (${source || null}::text IS NULL OR source = ${source || null})
      AND (${status || null}::text IS NULL OR status = ${status || null})
      AND (${search || null}::text IS NULL OR name ILIKE ${`%${search || ""}%`} OR email ILIKE ${`%${search || ""}%`} OR company ILIKE ${`%${search || ""}%`})
    ORDER BY
      CASE WHEN ${sort} = 'name' THEN name END ASC,
      CASE WHEN ${sort} = 'status' THEN status END ASC,
      CASE WHEN ${sort} = 'source' THEN source END ASC,
      created_at DESC
    LIMIT ${pageSize} OFFSET ${offset}
  `;
  const countResult = await sql`
    SELECT count(*)::int as count FROM leads
    WHERE (${source || null}::text IS NULL OR source = ${source || null})
      AND (${status || null}::text IS NULL OR status = ${status || null})
      AND (${search || null}::text IS NULL OR name ILIKE ${`%${search || ""}%`} OR email ILIKE ${`%${search || ""}%`} OR company ILIKE ${`%${search || ""}%`})
  `;
  const [{ count }] = countResult as unknown as { count: number }[];
  return { rows: rows as LeadRecord[], total: Number(count), page, pageSize };
}

export async function updateLeadStatus(id: string, status: LeadStatus, actorEmail: string) {
  const sql = getSql();
  const result = await sql`UPDATE leads SET status = ${status}, updated_at = now() WHERE id = ${id}::uuid RETURNING id, name, email, source, status, created_at`;
  const [lead] = result as unknown as { id: string; name: string; email: string; source: string; status: LeadStatus; created_at: string }[];
  if (!lead) return null;
  await sql`INSERT INTO audit_logs (actor_email, action, entity_type, entity_id, metadata) VALUES (${actorEmail}, 'LEAD_STATUS_UPDATED', 'lead', ${id}::uuid, ${JSON.stringify({ status })}::jsonb)`;
  return lead;
}

export async function getLeadMetrics() {
  const sql = getSql();
  const result = await sql`
    SELECT
      count(*)::int AS total,
      count(*) FILTER (WHERE status = 'NEW')::int AS new_leads,
      count(*) FILTER (WHERE source = 'CONSULTATION')::int AS consultations,
      count(*) FILTER (WHERE status = 'WON')::int AS won
    FROM leads
  `;
  const [metrics] = result as unknown as { total: number; new_leads: number; consultations: number; won: number }[];
  const total = Number(metrics?.total || 0);
  const won = Number(metrics?.won || 0);
  return { total, newLeads: Number(metrics?.new_leads || 0), consultations: Number(metrics?.consultations || 0), won, conversionRate: total ? Math.round((won / total) * 100) : 0 };
}
