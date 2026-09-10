import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ContentItem } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ContentCard({ item, basePath, className }: { item: ContentItem; basePath: string; className?: string }) {
  const Icon = item.icon;
  return <Link href={`${basePath}/${item.slug}`} className={cn("group flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_18px_40px_rgba(9,9,11,0.08)]", className)}><span className="grid size-10 place-items-center rounded-md bg-blue-50 text-blue-700"><Icon className="size-5" aria-hidden="true" /></span><h3 className="mt-7 text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-600">{item.short}</p><span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-zinc-900 transition-colors group-hover:text-blue-600">Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></Link>;
}

export function ProductJourney() {
  const steps = ["Idea", "Design", "Technology", "Product", "Scale"];
  return <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-lg border border-white/15 bg-white/[0.06] p-5 sm:p-8"><div className="absolute inset-0 grid-bg opacity-30" /><div className="relative grid gap-3 sm:grid-cols-5">{steps.map((step, index) => <div key={step} className="relative rounded-md border border-white/15 bg-zinc-950/70 p-4 text-left shadow-xl"><span className="text-xs font-medium text-blue-300">0{index + 1}</span><p className="mt-8 text-sm font-semibold text-white">{step}</p>{index < steps.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-zinc-950 text-xs text-blue-300 sm:flex">+</span>}</div>)}</div><div className="relative mt-5 h-1 rounded-full bg-white/10"><div className="h-full w-4/5 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.9)]" /></div></div>;
}

export function ArchitectureDiagram({ items }: { items: string[] }) {
  return <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 p-5 text-white sm:p-8"><div className="grid-bg absolute opacity-20" /><div className="relative grid gap-3 sm:grid-cols-3">{items.map((item, index) => <div key={item} className={cn("rounded-md border border-white/12 bg-white/[0.06] p-4", index === 1 && "border-blue-400/40 bg-blue-500/15")}><p className="text-xs text-zinc-400">Layer 0{index + 1}</p><p className="mt-5 text-sm font-medium leading-5">{item}</p></div>)}</div></div>;
}
