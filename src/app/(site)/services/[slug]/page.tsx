import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail-page";
import { getBySlug, services } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const item = getBySlug(services, (await params).slug); return item ? pageMetadata(item.title, item.description, `/services/${item.slug}`) : {}; }
export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) { const item = getBySlug(services, (await params).slug); if (!item) notFound(); return <DetailPage item={item} kind="service" />; }
