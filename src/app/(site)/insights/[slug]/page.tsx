import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, Section } from "@/components/ui";
import { getBySlug, insights } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const item = getBySlug(insights, (await params).slug); return item ? pageMetadata(item.title, item.excerpt, `/insights/${item.slug}`) : {}; }
export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) { const item = getBySlug(insights, (await params).slug); if (!item) notFound(); return <article><section className="border-b border-zinc-200 bg-zinc-50 py-14 sm:py-20"><Container className="max-w-4xl"><Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-blue-600"><ArrowLeft className="size-4" /> All insights</Link><p className="mt-10 text-sm font-medium text-blue-600">{item.category} <span className="text-zinc-400">&#8226;</span> {item.readTime}</p><h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">{item.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{item.excerpt}</p><p className="mt-7 text-sm text-zinc-500">Published {formatDate(item.date)}</p></Container></section><Section><Container className="max-w-3xl"><div className="space-y-10">{item.sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{section.heading}</h2><p className="mt-4 text-base leading-8 text-zinc-700">{section.body}</p></section>)}</div></Container></Section></article>; }
