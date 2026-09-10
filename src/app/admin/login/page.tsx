"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui";

export default function AdminLoginPage() {
  const router = useRouter(); const [error, setError] = useState(""); const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setLoading(true); setError(""); const values = Object.fromEntries(new FormData(event.currentTarget)); try { const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) }); const data = await response.json() as { error?: string }; if (!response.ok) throw new Error(data.error || "Unable to sign in."); router.push("/admin"); router.refresh(); } catch (cause) { setError(cause instanceof Error ? cause.message : "Unable to sign in."); setLoading(false); } }
  return <main className="grid min-h-screen place-items-center bg-zinc-100 px-5"><form onSubmit={submit} className="w-full max-w-md rounded-lg border border-zinc-200 bg-white p-7 shadow-[0_24px_60px_rgba(9,9,11,0.10)]"><p className="font-bold tracking-[0.16em] text-zinc-950">VENTRIO</p><h1 className="mt-7 text-2xl font-semibold tracking-tight text-zinc-950">Admin sign in</h1><p className="mt-2 text-sm text-zinc-600">Use the administrator credentials configured for this environment.</p><label className="mt-7 block text-sm font-medium text-zinc-800">Email<input className="field mt-2" name="email" type="email" autoComplete="email" required /></label><label className="mt-4 block text-sm font-medium text-zinc-800">Password<input className="field mt-2" name="password" type="password" autoComplete="current-password" required /></label>{error && <p role="alert" className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}<Button type="submit" className="mt-6 w-full" disabled={loading}>{loading && <LoaderCircle className="size-4 animate-spin" />} Sign in</Button></form></main>;
}
