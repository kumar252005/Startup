"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) { useEffect(() => { console.error(error); }, [error]); return <html lang="en"><body className="grid min-h-screen place-items-center bg-zinc-100 p-6 font-sans"><div className="max-w-md rounded-lg border border-zinc-200 bg-white p-8 text-center"><p className="text-sm font-medium text-blue-600">Something went wrong</p><h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">We could not load this page.</h1><p className="mt-3 text-sm leading-6 text-zinc-600">Please try again. If the issue persists, contact the Ventrio team.</p><Button className="mt-6" onClick={reset}>Try again</Button></div></body></html>; }
