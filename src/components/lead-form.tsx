"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

type Source = "IDEA" | "CONSULTATION" | "CONTACT";

const industries = ["Startup", "Education", "Healthcare", "Finance", "Retail", "Manufacturing", "Real Estate", "Hospitality", "Logistics", "Professional Services", "Other"];

export function LeadForm({ source, title, description, compact = false }: { source: Source; title?: string; description?: string; compact?: boolean }) {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting"); setError("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, source }) });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "We could not send your request.");
      setState("success"); event.currentTarget.reset();
    } catch (cause) { setError(cause instanceof Error ? cause.message : "We could not send your request."); setState("error"); }
  }

  if (state === "success") return <div className="flex min-h-[350px] flex-col items-center justify-center rounded-lg border border-blue-100 bg-blue-50/60 px-6 text-center"><CheckCircle2 className="size-10 text-blue-600" aria-hidden="true" /><h3 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-950">Thank you. We have your request.</h3><p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">A Ventrio team member will review the details and get back to you soon.</p><Button variant="secondary" className="mt-6" onClick={() => setState("idle")}>Send another request</Button></div>;

  return <form onSubmit={handleSubmit} className={cn("rounded-lg border border-zinc-200 bg-white p-5 shadow-[0_20px_50px_rgba(9,9,11,0.06)] sm:p-7", compact && "shadow-none")} noValidate>
    {title && <div className="mb-6"><h2 className="text-xl font-semibold tracking-tight text-zinc-950">{title}</h2>{description && <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>}</div>}
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label="Name" name="name" required /><Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" /><Field label="Company" name="company" />
      <SelectField label="Industry" name="industry" options={industries} />
      {source === "IDEA" && <SelectField label="Budget range" name="budget" options={["Under $10k", "$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+", "Not sure yet"]} />}
      {source === "IDEA" && <SelectField label="Timeline" name="timeline" options={["As soon as possible", "1 - 3 months", "3 - 6 months", "6+ months", "Still exploring"]} />}
      {source === "CONSULTATION" && <Field label="Preferred meeting time" name="preferredMeetingTime" placeholder="e.g. Weekday afternoons IST" />}
    </div>
    <div className="mt-4"><TextArea label={source === "CONTACT" ? "How can we help?" : source === "CONSULTATION" ? "Requirement" : "What are you trying to build?"} name="requirement" required placeholder={source === "IDEA" ? "Describe the product, service, or system you have in mind." : "Share the context, goals, and anything that would help us prepare."} /></div>
    {source === "IDEA" && <div className="mt-4 grid gap-4 sm:grid-cols-2"><TextArea label="What problem are you solving?" name="problem" placeholder="What is difficult today, and for whom?" /><Field label="Expected users" name="expectedUsers" placeholder="e.g. 500 students, 30 staff" /></div>}
    {state === "error" && <p role="alert" className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
    <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={state === "submitting"}>{state === "submitting" && <LoaderCircle className="size-4 animate-spin" />} {source === "IDEA" ? "Discuss My Idea" : source === "CONSULTATION" ? "Request My Consultation" : "Send Message"}</Button>
    <p className="mt-4 text-xs leading-5 text-zinc-500">By submitting, you agree that Ventrio may contact you about this request. Your information is handled according to our <a className="underline underline-offset-2 hover:text-zinc-800" href="/privacy">privacy policy</a>.</p>
  </form>;
}

function Field({ label, name, type = "text", required = false, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return <label className="block text-sm font-medium text-zinc-800">{label}{required && <span className="ml-1 text-blue-600">*</span>}<input name={name} type={type} required={required} placeholder={placeholder} className="field mt-2" /></label>;
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return <label className="block text-sm font-medium text-zinc-800">{label}<select name={name} defaultValue="" className="field mt-2"><option value="" disabled>Select an option</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>;
}

function TextArea({ label, name, required = false, placeholder }: { label: string; name: string; required?: boolean; placeholder?: string }) {
  return <label className="block text-sm font-medium text-zinc-800">{label}{required && <span className="ml-1 text-blue-600">*</span>}<textarea name={name} required={required} placeholder={placeholder} rows={4} className="field mt-2 resize-y" /></label>;
}
