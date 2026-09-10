import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail-page";
import { getBySlug, industries } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() { return industries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const item = getBySlug(industries, (await params).slug); return item ? pageMetadata(`${item.title} Technology Solutions`, item.description, `/industries/${item.slug}`) : {}; }
export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) { const item = getBySlug(industries, (await params).slug); if (!item) notFound(); return <DetailPage item={item} kind="industry" />; }
