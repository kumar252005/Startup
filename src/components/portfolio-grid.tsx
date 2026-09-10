"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/content";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

const filters = ["All", "Web", "Mobile", "AI", "ERP", "SaaS", "Education", "Business"];

export function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const items = useMemo(() => active === "All" ? caseStudies : caseStudies.filter((study) => study.category.includes(active)), [active]);
  return <div><div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter work">{filters.map((filter) => <button role="tab" aria-selected={active === filter} key={filter} onClick={() => setActive(filter)} className={cn("rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600", active === filter ? "border-zinc-950 bg-zinc-950 text-white" : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400")}>{filter}</button>)}</div><div className="mt-8 grid gap-5 md:grid-cols-2">{items.length ? items.map((study, index) => <Link href={`/work/${study.slug}`} key={study.slug} className="group overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_20px_45px_rgba(9,9,11,0.10)]"><ProjectMockup title={study.title} modules={study.modules.slice(0, 4)} accent={study.accent} index={index} /><div className="p-6"><div className="flex items-center justify-between gap-4"><Badge tone="neutral">{study.type}</Badge><ArrowUpRight className="size-4 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" /></div><h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">{study.title}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">{study.description}</p><div className="mt-5 flex flex-wrap gap-2">{study.technologies.slice(0, 3).map((technology) => <span key={technology} className="text-xs text-zinc-500">{technology}</span>)}</div></div></Link>) : <div className="col-span-full rounded-lg border border-dashed border-zinc-300 p-12 text-center"><p className="font-medium text-zinc-950">No projects in this filter yet.</p><button className="mt-3 text-sm text-blue-600 hover:underline" onClick={() => setActive("All")}>Show all work</button></div>}</div></div>;
}

export function ProjectMockup({ title, modules, accent, index = 0 }: { title: string; modules: string[]; accent: string; index?: number }) {
  const accents: Record<string, string> = { blue: "bg-blue-500", orange: "bg-orange-500", violet: "bg-violet-500", green: "bg-emerald-500" };
  return <div className="relative h-56 overflow-hidden bg-zinc-950 p-5 text-white sm:h-64"><div className={cn("absolute right-[-12%] top-[-34%] size-64 rounded-full opacity-60 blur-3xl", accents[accent])} /><div className="relative flex h-full overflow-hidden rounded-md border border-white/15 bg-white/[0.06]"><aside className="hidden w-24 border-r border-white/10 p-3 sm:block"><div className="h-2 w-10 rounded-full bg-white/70" /><div className="mt-6 space-y-3">{[1, 2, 3, 4].map((line) => <div className="h-1.5 rounded-full bg-white/20" key={line} />)}</div></aside><div className="flex-1 p-4"><div className="flex items-center justify-between"><p className="text-xs font-semibold text-white/80">{title}</p><span className="size-2 rounded-full bg-emerald-400" /></div><div className="mt-5 grid grid-cols-2 gap-2">{modules.map((module, itemIndex) => <div key={module} className={cn("rounded border border-white/10 bg-white/[0.07] p-2.5", itemIndex === index % 4 && "border-white/30 bg-white/[0.13]")}><div className={cn("h-1.5 w-8 rounded-full", accents[accent])} /><p className="mt-3 text-[10px] text-white/70">{module}</p></div>)}</div><div className="mt-3 h-2 rounded-full bg-white/10"><div className={cn("h-full rounded-full", accents[accent])} style={{ width: `${52 + index * 9}%` }} /></div></div></div></div>;
}
