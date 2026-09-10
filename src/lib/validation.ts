import { z } from "zod";

export const leadSources = ["IDEA", "CONSULTATION", "CONTACT"] as const;
export const leadStatuses = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL_SENT", "NEGOTIATION", "WON", "LOST"] as const;

const optionalText = z.string().trim().max(2000).optional().or(z.literal(""));

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  phone: optionalText,
  company: optionalText,
  industry: optionalText,
  requirement: z.string().trim().min(10, "Please share a little more about your requirement.").max(5000),
  problem: optionalText,
  expectedUsers: optionalText,
  budget: optionalText,
  timeline: optionalText,
  preferredMeetingTime: optionalText,
  source: z.enum(leadSources),
});

export const adminLoginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(1, "Enter your password."),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type LeadStatus = (typeof leadStatuses)[number];
