import { ContentCard } from "@/components/content-cards";
import { Container, Section, SectionHeading } from "@/components/ui";
import { solutions } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Digital Product Solutions", "SaaS, ERP, CRM, AI automation, University OS, and business automation solutions from Ventrio.", "/solutions");
export default function SolutionsPage() { return <><section className="border-b border-zinc-200 bg-zinc-950 py-18 text-white sm:py-24"><Container><SectionHeading eyebrow="Solutions" title="Digital systems for the work that defines your organization." description="Thoughtful product patterns that can be tailored around your teams, customers, operations, and ambitions." /></Container></section><Section><Container><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{solutions.map((item) => <ContentCard key={item.slug} item={item} basePath="/solutions" />)}</div></Container></Section></> }
