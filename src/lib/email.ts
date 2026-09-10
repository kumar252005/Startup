import { Resend } from "resend";
import type { LeadRecord } from "@/lib/db";

export async function notifyTeamOfLead(lead: LeadRecord) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !to || !from) return { delivered: false, skipped: true };
  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to,
    subject: `New ${lead.source.toLowerCase()} submission from ${lead.name}`,
    text: `Name: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone || "Not provided"}\nCompany: ${lead.company || "Not provided"}\nIndustry: ${lead.industry || "Not provided"}\n\nRequirement:\n${lead.requirement}\n\nProblem:\n${lead.problem || "Not provided"}\n\nBudget: ${lead.budget || "Not provided"}\nTimeline: ${lead.timeline || "Not provided"}`,
  });
  return { delivered: true, skipped: false };
}
