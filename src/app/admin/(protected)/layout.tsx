import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin-shell";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";
export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) { const session = await getAdminSession(); if (!session) redirect("/admin/login"); return <AdminShell email={session.email}>{children}</AdminShell>; }
