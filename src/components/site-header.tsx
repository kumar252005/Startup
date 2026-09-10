"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { serviceNav } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink, Container } from "@/components/ui";

const topLevel = [
  { label: "Solutions", href: "/solutions", items: [["ERP", "/solutions/erp"], ["CRM", "/solutions/crm"], ["SaaS", "/solutions/saas"], ["AI Automation", "/solutions/ai-automation"], ["University OS", "/solutions/university-os"], ["Business Automation", "/solutions/business-automation"]] },
  { label: "Industries", href: "/industries", items: [["Education", "/industries/education"], ["Healthcare", "/industries/healthcare"], ["Finance", "/industries/finance"], ["Retail", "/industries/retail"], ["Manufacturing", "/industries/manufacturing"], ["Logistics", "/industries/logistics"], ["Real Estate", "/industries/real-estate"], ["Hospitality", "/industries/hospitality"], ["Startups", "/industries/startups"]] },
] as const;

function Wordmark() {
  return <Link href="/" className="group inline-flex items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600" aria-label="Ventrio home">
    <span className="relative grid size-7 place-items-center overflow-hidden rounded-[5px] bg-zinc-950 text-xs font-bold text-white transition-transform group-hover:scale-105" aria-hidden="true"><span className="relative z-10">V</span><span className="absolute -right-2 top-1 h-6 w-1 rotate-45 bg-blue-500" /></span>
    <span className="text-base font-bold tracking-[0.18em] text-zinc-950">VENTRIO</span>
  </Link>;
}

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<"services" | "solutions" | "industries" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const toggleMobileSection = (section: string) => setMobileSection((current) => current === section ? null : section);
  const closeMobile = () => { setMobileOpen(false); setMobileSection(null); };
  const menuClasses = "absolute left-1/2 top-full z-50 mt-4 w-[min(92vw,1040px)] -translate-x-1/2 rounded-lg border border-zinc-200 bg-white p-6 shadow-[0_24px_64px_rgba(9,9,11,0.14)]";

  return <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
    <Container className="flex h-18 items-center justify-between gap-5">
      <Wordmark />
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
        <div className="group relative" onMouseEnter={() => setOpenMenu("services")} onMouseLeave={() => setOpenMenu(null)}>
          <div className="flex items-center gap-0.5"><Link href="/services" className="nav-link">Services</Link><button aria-label="Open services menu" aria-expanded={openMenu === "services"} onClick={() => setOpenMenu(openMenu === "services" ? null : "services")} className="rounded p-1 text-zinc-500 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"><ChevronDown className="size-3.5" /></button></div>
          {openMenu === "services" && <div className={menuClasses}><div className="grid grid-cols-4 gap-x-6 gap-y-8">{serviceNav.map((group) => <div key={group.title}><p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{group.title}</p><div className="space-y-1">{group.items.map(([label, href]) => <Link key={label} href={href} className="block rounded px-2 py-1.5 text-sm text-zinc-700 transition-colors hover:bg-blue-50 hover:text-blue-700">{label}</Link>)}</div></div>)}</div></div>}
        </div>
        {topLevel.map((menu) => <div className="group relative" key={menu.label} onMouseEnter={() => setOpenMenu(menu.label.toLowerCase() as "solutions" | "industries")} onMouseLeave={() => setOpenMenu(null)}>
          <div className="flex items-center gap-0.5"><Link href={menu.href} className="nav-link">{menu.label}</Link><button aria-label={`Open ${menu.label.toLowerCase()} menu`} aria-expanded={openMenu === menu.label.toLowerCase()} onClick={() => setOpenMenu(openMenu === menu.label.toLowerCase() ? null : menu.label.toLowerCase() as "solutions" | "industries")} className="rounded p-1 text-zinc-500 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"><ChevronDown className="size-3.5" /></button></div>
          {openMenu === menu.label.toLowerCase() && <div className={cn(menuClasses, "w-[min(92vw,660px)]")}><div className="grid grid-cols-2 gap-1">{menu.items.map(([label, href]) => <Link key={label} href={href} className="rounded px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-blue-50 hover:text-blue-700">{label}</Link>)}</div></div>}
        </div>)}
        <Link href="/work" className="nav-link">Work</Link>
        <Link href="/insights" className="nav-link">Insights</Link>
        <Link href="/about" className="nav-link">About</Link>
      </nav>
      <div className="hidden lg:block"><ButtonLink href="/contact" className="min-h-10 px-4">Start a Project</ButtonLink></div>
      <button onClick={() => setMobileOpen((current) => !current)} className="grid size-10 place-items-center rounded-md border border-zinc-200 text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 lg:hidden" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen}>{mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
    </Container>
    {mobileOpen && <div className="border-t border-zinc-200 bg-white lg:hidden"><Container className="py-4"><nav className="space-y-1" aria-label="Mobile navigation">
      <MobileGroup label="Services" href="/services" isOpen={mobileSection === "Services"} onToggle={() => toggleMobileSection("Services")} onNavigate={closeMobile} groups={serviceNav.map((group) => ({ title: group.title, items: group.items }))} />
      {topLevel.map((menu) => <MobileGroup key={menu.label} label={menu.label} href={menu.href} isOpen={mobileSection === menu.label} onToggle={() => toggleMobileSection(menu.label)} onNavigate={closeMobile} groups={[{ title: `${menu.label} overview`, items: menu.items }]} />)}
      <MobileLink href="/work" onNavigate={closeMobile}>Work</MobileLink><MobileLink href="/insights" onNavigate={closeMobile}>Insights</MobileLink><MobileLink href="/about" onNavigate={closeMobile}>About</MobileLink><MobileLink href="/process" onNavigate={closeMobile}>How we work</MobileLink><MobileLink href="/contact" onNavigate={closeMobile}>Contact</MobileLink>
      <ButtonLink href="/contact" onClick={closeMobile} className="mt-4 w-full">Start a Project</ButtonLink>
    </nav></Container></div>}
  </header>;
}

function MobileLink({ href, children, onNavigate }: { href: string; children: React.ReactNode; onNavigate: () => void }) {
  return <Link href={href} onClick={onNavigate} className="block rounded-md px-3 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-50">{children}</Link>;
}

function MobileGroup({ label, href, isOpen, onToggle, onNavigate, groups }: { label: string; href: string; isOpen: boolean; onToggle: () => void; onNavigate: () => void; groups: { title: string; items: readonly (readonly [string, string])[] }[] }) {
  return <div className="border-b border-zinc-100 py-1"><div className="flex items-center justify-between"><Link href={href} onClick={onNavigate} className="rounded-md px-3 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-50">{label}</Link><button onClick={onToggle} aria-label={`Toggle ${label} menu`} aria-expanded={isOpen} className="mr-1 grid size-10 place-items-center rounded-md text-zinc-600 hover:bg-zinc-50"><ChevronDown className={cn("size-4 transition-transform", isOpen && "rotate-180")} /></button></div>{isOpen && <div className="space-y-4 px-3 pb-4 pt-2">{groups.map((group) => <div key={group.title}><p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{group.title}</p>{group.items.map(([itemLabel, itemHref]) => <Link onClick={onNavigate} className="block py-1.5 text-sm text-zinc-700" href={itemHref} key={itemLabel}>{itemLabel}</Link>)}</div>)}</div>}</div>;
}
