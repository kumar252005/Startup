import { ContentCard } from "@/components/content-cards";
import { ButtonLink, Container, Section } from "@/components/ui";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Technology & Product Services", "Technology consulting, product development, AI, software, cloud, data, and managed services from Ventrio.", "/services");

export default function ServicesPage() {
  return <><section className="border-b border-zinc-200 bg-zinc-950 py-18 text-white sm:py-24"><Container><p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">Ventrio services</p><h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">Technology capabilities, assembled around the work that matters.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">From a first product decision to critical system modernization, we bring the right mix of strategy, design, engineering, and operational thinking.</p></Container></section><Section><Container><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map((item) => <ContentCard key={item.slug} item={item} basePath="/services" />)}</div><div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-lg border border-zinc-200 bg-zinc-50 p-7 sm:flex-row sm:items-center"><div><h2 className="text-xl font-semibold tracking-tight text-zinc-950">Not sure which capability fits?</h2><p className="mt-2 text-sm text-zinc-600">You can start with the business problem. We will help frame the technology work.</p></div><ButtonLink href="/consultation">Book a free consultation</ButtonLink></div></Container></Section></>;
}
