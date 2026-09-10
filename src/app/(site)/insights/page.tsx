import { InsightsBrowser } from "@/components/insights-browser";
import { Container, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Insights", "Practical perspectives on product strategy, custom software, AI automation, technology architecture, and digital operations.", "/insights");
export default function InsightsPage() { return <><section className="border-b border-zinc-200 bg-zinc-50 py-18 sm:py-24"><Container><SectionHeading eyebrow="Insights" title="Clear thinking for complex technology decisions." description="Short, practical notes on products, AI, software systems, and the work of turning a business challenge into useful technology." /></Container></section><Section><Container><InsightsBrowser /></Container></Section></> }
