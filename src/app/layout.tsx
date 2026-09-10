import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Ventrio | Your Vision. Our Technology.", template: "%s | Ventrio" },
  description: siteConfig.description,
  applicationName: "Ventrio",
  keywords: ["technology consulting company", "software development company", "AI development", "custom software development", "product development company", "software development India"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "Ventrio", title: "Ventrio | Your Vision. Our Technology.", description: siteConfig.description },
  twitter: { card: "summary_large_image", title: "Ventrio | Your Vision. Our Technology.", description: siteConfig.description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
