import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={cn("py-18 sm:py-24 lg:py-32", className)}>{children}</section>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-xs font-semibold uppercase tracking-[0.16em] text-blue-600", className)}>{children}</p>;
}

export function ButtonLink({ href, children, variant = "primary", className }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "dark" | "text"; className?: string }) {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600",
    secondary: "border border-zinc-300 bg-white text-zinc-950 hover:border-zinc-950 hover:bg-zinc-50 focus-visible:outline-zinc-950",
    dark: "bg-zinc-950 text-white hover:bg-zinc-800 focus-visible:outline-zinc-950",
    text: "text-zinc-950 hover:text-blue-600 focus-visible:outline-blue-600",
  };
  return <Link href={href} className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", styles[variant], variant === "text" && "px-0", className)}>{children}{variant === "text" && <ArrowRight className="size-4" aria-hidden="true" />}</Link>;
}

export function Button({ children, className, variant = "primary", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "dark" }) {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600",
    secondary: "border border-zinc-300 bg-white text-zinc-950 hover:border-zinc-950 hover:bg-zinc-50 focus-visible:outline-zinc-950",
    dark: "bg-zinc-950 text-white hover:bg-zinc-800 focus-visible:outline-zinc-950",
  };
  return <button className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", styles[variant], className)} {...props}>{children}</button>;
}

export function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow?: string; title: string; description?: string; centered?: boolean }) {
  return <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">{title}</h2>
    {description && <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">{description}</p>}
  </div>;
}

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return <ul className={cn("space-y-3", className)}>{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-700"><span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700"><Check className="size-3" aria-hidden="true" /></span>{item}</li>)}</ul>;
}

export function Badge({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "neutral" | "dark" }) {
  const styles = { blue: "bg-blue-50 text-blue-700 ring-blue-100", neutral: "bg-zinc-100 text-zinc-700 ring-zinc-200", dark: "bg-white/10 text-white ring-white/15" };
  return <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset", styles[tone])}>{children}</span>;
}
