import Link from "next/link";
import { ArrowUpRight, Mail, Share2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ButtonLink, Container } from "@/components/ui";

const footerGroups = [
  { title: "Services", links: [["Consulting", "/services/technology-consulting"], ["Product Development", "/services/product-development"], ["AI Solutions", "/services/ai"], ["Cloud & DevOps", "/services/cloud"]] },
  { title: "Solutions", links: [["SaaS Platforms", "/solutions/saas"], ["ERP Systems", "/solutions/erp"], ["AI Automation", "/solutions/ai-automation"], ["University OS", "/solutions/university-os"]] },
  { title: "Company", links: [["Work", "/work"], ["About", "/about"], ["Process", "/process"], ["Insights", "/insights"], ["Careers", "/careers"], ["Contact", "/contact"]] },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  return <footer className="bg-zinc-950 text-white"><Container><div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.35fr_2fr] lg:gap-20"><div><p className="text-lg font-bold tracking-[0.17em]">VENTRIO</p><p className="mt-4 max-w-xs text-2xl font-medium tracking-tight text-white">Your Vision. Our Technology.</p><p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">Technology consulting and product development for organizations ready to turn a business challenge into a real digital product.</p><ButtonLink href="/contact" variant="primary" className="mt-7">Start a Project <ArrowUpRight className="size-4" /></ButtonLink></div><div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{footerGroups.map((group) => <div key={group.title}><p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{group.title}</p><ul className="mt-4 space-y-3">{group.links.map(([label, href]) => <li key={label}><Link className="text-sm text-zinc-300 transition-colors hover:text-white" href={href}>{label}</Link></li>)}</ul></div>)}</div></div><div className="flex flex-col gap-5 py-7 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between"><p>Copyright {year} Ventrio. All rights reserved.</p><div className="flex flex-wrap items-center gap-x-5 gap-y-3"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link>{siteConfig.email !== "hello@ventrio.example" && <a href={`mailto:${siteConfig.email}`} aria-label="Email Ventrio" className="hover:text-white"><Mail className="size-4" /></a>}<span title="Add Ventrio social URLs through configuration when available" className="text-zinc-600"><Share2 className="size-4" aria-label="Social URLs not yet configured" /></span></div></div></Container></footer>;
}
