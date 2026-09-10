import type { MetadataRoute } from "next";
import { caseStudies, industries, insights, services, solutions } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/industries", "/solutions", "/work", "/about", "/process", "/insights", "/contact", "/consultation", "/careers", "/privacy", "/terms"];
  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...services.map((item) => ({ url: absoluteUrl(`/services/${item.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...industries.map((item) => ({ url: absoluteUrl(`/industries/${item.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...solutions.map((item) => ({ url: absoluteUrl(`/solutions/${item.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...caseStudies.map((item) => ({ url: absoluteUrl(`/work/${item.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
    ...insights.map((item) => ({ url: absoluteUrl(`/insights/${item.slug}`), lastModified: item.date, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
