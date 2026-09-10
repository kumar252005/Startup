import { PortfolioGrid } from "@/components/portfolio-grid";
import { Container, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Concept Products & Demo Projects", "Explore Ventrio concept products and demo projects across education, ERP, AI support, and restaurant operations.", "/work");
export default function WorkPage() { return <><section className="border-b border-zinc-200 bg-zinc-50 py-18 sm:py-24"><Container><SectionHeading eyebrow="Selected work" title="Technology concepts made tangible." description="These are Ventrio concept products and demo projects. They show how we think through systems, not claims about client engagements or customer outcomes." /></Container></section><Section><Container><PortfolioGrid /></Container></Section></> }
