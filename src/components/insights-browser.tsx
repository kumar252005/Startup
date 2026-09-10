"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { insights } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function InsightsBrowser() {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(insights.map((item) => item.category))];
  const filtered = useMemo(() => insights.filter((item) => (category === "All" || item.category === category) && `${item.title} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return <div><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><label className="relative block sm:w-80"><span className="sr-only">Search insights</span><Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="field pl-9" placeholder="Search insights" /></label><div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-3 py-1.5 text-xs font-medium ${category === item ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`}>{item}</button>)}</div></div><div className="mt-8 grid gap-x-8 divide-y divide-zinc-200">{filtered.length ? filtered.map((item) => <article className="grid gap-4 py-7 sm:grid-cols-[180px_1fr_auto] sm:items-start" key={item.slug}><div className="text-sm text-zinc-500"><p>{item.category}</p><p className="mt-1 text-xs">{formatDate(item.date)}</p></div><div><h2 className="text-xl font-semibold tracking-tight text-zinc-950"><Link className="hover:text-blue-600" href={`/insights/${item.slug}`}>{item.title}</Link></h2><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">{item.excerpt}</p></div><Link href={`/insights/${item.slug}`} className="text-sm font-semibold text-blue-600 hover:text-blue-700">Read article</Link></article>) : <div className="rounded-lg border border-dashed border-zinc-300 py-12 text-center text-sm text-zinc-600">No insights match that search.</div>}</div></div>;
}
