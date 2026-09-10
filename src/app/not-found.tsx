import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() { return <main className="grid min-h-screen place-items-center bg-zinc-950 text-white"><Container className="text-center"><p className="text-sm font-semibold text-blue-300">404</p><h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">This path leads nowhere.</h1><p className="mx-auto mt-5 max-w-lg text-base leading-7 text-zinc-300">The page may have moved, or the address may not be quite right.</p><div className="mt-8 flex justify-center"><ButtonLink href="/" variant="secondary"><ArrowLeft className="size-4" /> Back to Ventrio</ButtonLink></div><Link className="mt-5 inline-block text-sm text-zinc-400 hover:text-white" href="/contact">Contact Ventrio</Link></Container></main>; }
