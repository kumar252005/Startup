import type { Metadata } from "next";

export const siteConfig = {
  name: "Ventrio",
  tagline: "Your Vision. Our Technology.",
  description: "Ventrio is a technology consulting and product development company. We help organizations turn ideas and business problems into dependable software, AI, cloud, and digital products.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@ventrio.example",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, siteName: siteConfig.name, type: "website" },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

export const serviceNav = [
  {
    title: "Product & Engineering",
    items: [
      ["Product Design", "/services/product-development"],
      ["Web Development", "/services/web-development"],
      ["Mobile Development", "/services/mobile-development"],
      ["Software Development", "/services/software-development"],
      ["QA & Testing", "/services/qa"],
      ["Product Management", "/services/product-development"],
    ],
  },
  {
    title: "AI & Emerging Technology",
    items: [
      ["AI Solutions", "/services/ai"],
      ["Generative AI", "/services/ai"],
      ["Machine Learning", "/services/ai"],
      ["RAG", "/services/ai"],
      ["Automation", "/solutions/ai-automation"],
    ],
  },
  {
    title: "Cloud & Transformation",
    items: [
      ["Cloud", "/services/cloud"],
      ["DevOps", "/services/devops"],
      ["Legacy Modernization", "/services/legacy-modernization"],
      ["Cybersecurity", "/services/cybersecurity"],
      ["Data Analytics", "/services/data-analytics"],
    ],
  },
  {
    title: "Consulting",
    items: [
      ["Technology Consulting", "/services/technology-consulting"],
      ["Software Consulting", "/services/technology-consulting"],
      ["Digital Transformation", "/services/technology-consulting"],
      ["Architecture Consulting", "/services/technology-consulting"],
    ],
  },
] as const;
