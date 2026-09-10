"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [["Overview", "/admin"], ["All leads", "/admin/leads"], ["Consultations", "/admin/consultations"], ["Contact submissions", "/admin/contact-submissions"]] as const;

export function AdminShell({ children, email }: { children: React.ReactNode; email: string }) {
  const pathname = usePathname(); const router = useRouter();
  async function logout() { await fetch("/api/admin/logout", { method: "POST" }); router.push("/admin/login"); router.refresh(); }
  return <div className="min-h-screen bg-zinc-100"><header className="border-b border-zinc-200 bg-white"><div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8"><Link href="/admin" className="font-bold tracking-[0.16em] text-zinc-950">VENTRIO <span className="ml-2 text-xs font-medium tracking-normal text-zinc-500">ADMIN</span></Link><div className="flex items-center gap-4"><span className="hidden text-sm text-zinc-500 sm:block">{email}</span><button onClick={logout} className="inline-flex size-9 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950" aria-label="Sign out"><LogOut className="size-4" /></button></div></div></header><div className="mx-auto grid max-w-[1440px] lg:grid-cols-[210px_1fr]"><aside className="border-b border-zinc-200 bg-white p-4 lg:min-h-[calc(100vh-64px)] lg:border-b-0 lg:border-r"><nav className="flex gap-1 overflow-x-auto lg:block lg:space-y-1">{links.map(([label, href]) => <Link href={href} key={href} className={cn("whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors lg:block", pathname === href ? "bg-zinc-950 text-white" : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950")}>{label}</Link>)}</nav></aside><main className="min-w-0 p-5 sm:p-8">{children}</main></div></div>;
}
