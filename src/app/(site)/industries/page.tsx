import { ContentCard } from "@/components/content-cards";
import { Container, Section, SectionHeading } from "@/components/ui";
import { industries } from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Industry Technology Solutions", "Technology consulting and product development for education, healthcare, finance, retail, manufacturing, logistics, and ambitious startups.", "/industries");
export default function IndustriesPage() { return <><section className="border-b border-zinc-200 bg-zinc-50 py-18 sm:py-24"><Container><SectionHeading eyebrow="Industries" title="Technology shaped by the world it will operate in." description="Every sector has its own pressure points, people, rules, and workflows. We begin with that reality before choosing the technology." /></Container></section><Section><Container><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map((item) => <ContentCard key={item.slug} item={item} basePath="/industries" />)}</div></Container></Section></> }
