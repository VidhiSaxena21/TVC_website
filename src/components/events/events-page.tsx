"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";

const events = [
  {
    id: "tvc-x-sat",
    title: "PRIMUS’26",
    subtitle: "Where every decision connects.",
    type: "TVC × SAT · The Matrix Challenge",
    description:
      "Three arenas. Product, consulting and finance. Step into the Matrix and turn sharp thinking into decisive action.",
    href: "/events/tvc-x-sat",
    theme: "matrix",
    number: "01",
    status: "Registration open",
    date: "20 Nov, 10 PM — 21 Nov, 8 AM",
  },
  {
    id: "e-summit",
    title: "E-Summit",
    subtitle: "The flagship entrepreneurship summit",
    type: "Flagship event",
    description:
      "A meeting ground for ambitious ideas, entrepreneurial minds, industry perspectives and the next generation of builders.",
    href: "/events/e-summit",
    theme: "summit",
    number: "02",
    status: "Explore the flagship",
  },
];

export function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-[#f4f3ef] selection:bg-[#f5ed00] selection:text-black">
      <SiteHeader />
      <main id="main-content" className="flex-grow">
        <section className="relative overflow-hidden border-b border-white/[0.08] pb-16 pt-36 sm:pb-20 sm:pt-44">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_20%,rgba(245,237,0,0.045),transparent_70%)]" />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[#f5ed00]">
              <Sparkles className="h-3.5 w-3.5" /> Ideas in motion
            </p>
            <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Where ideas
              <br /><span className="text-white/40">turn into action.</span>
            </h1>
            <div className="mt-8 flex flex-col gap-5 border-t border-white/[0.1] pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-sm leading-relaxed text-[#a5a49f] sm:text-base">
                From high-stakes challenges to our flagship entrepreneurship summit,
                explore the experiences that bring the TVC community together.
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">TVC / Events archive</p>
            </div>
          </div>
        </section>

        <section aria-label="Featured events" className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-6 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-7 lg:px-12">
          {events.map((event) => (
            <Link
              key={event.id}
              href={event.href}
              className={`group relative isolate flex min-h-[440px] flex-col justify-between overflow-hidden border p-6 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5ed00] sm:min-h-[540px] sm:p-9 ${event.theme === "matrix" ? "border-[#a3ff12]/25 bg-[#050b06] hover:border-[#a3ff12]/65" : "border-white/[0.12] bg-[#10100f] hover:border-[#f5ed00]/50"}`}
            >
              {event.theme === "matrix" ? (
                <>
                  <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(163,255,18,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.08)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
                  <div aria-hidden="true" className="absolute -right-12 top-10 -z-10 font-mono text-[180px] font-bold leading-none text-[#a3ff12]/[0.045] transition-transform duration-700 group-hover:translate-x-[-12px]">01</div>
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#a3ff12]/70 to-transparent" />
                </>
              ) : (
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_15%,rgba(245,237,0,0.11),transparent_55%)]" />
              )}

              <div className="flex items-start justify-between gap-4">
                <span className={`font-mono text-[10px] uppercase tracking-[0.22em] ${event.theme === "matrix" ? "text-[#a3ff12]" : "text-[#f5ed00]"}`}>{event.type}</span>
                <span className="font-mono text-xs text-white/30">{event.number} / 02</span>
              </div>

              <div className="relative">
                <p className={`mb-4 font-mono text-[10px] uppercase tracking-[0.25em] ${event.theme === "matrix" ? "text-[#a3ff12]/70" : "text-white/40"}`}>{event.subtitle}</p>
                <h2 className={`text-5xl font-semibold tracking-[-0.06em] transition-transform duration-500 group-hover:-translate-y-1 sm:text-6xl ${event.theme === "matrix" ? "text-[#e9ffe0]" : "text-[#f4f3ef]"}`}>{event.title}</h2>
                {"date" in event && event.date && <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#a3ff12]">{event.date}</p>}
                <div className="mt-5 grid grid-rows-[1fr] transition-all duration-500 lg:mt-0 lg:grid-rows-[0fr] lg:group-hover:mt-5 lg:group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="max-w-md text-sm leading-relaxed text-white/65">{event.description}</p>
                    <p className={`mt-4 font-mono text-[9px] uppercase tracking-[0.16em] ${event.theme === "matrix" ? "text-[#a3ff12]/70" : "text-[#f5ed00]/70"}`}>{event.status}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">Explore event</span>
                <span className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${event.theme === "matrix" ? "border-[#a3ff12]/40 text-[#a3ff12] group-hover:bg-[#a3ff12] group-hover:text-black" : "border-white/20 text-white group-hover:border-[#f5ed00] group-hover:bg-[#f5ed00] group-hover:text-black"}`}>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-[#a5a49f]">
              <CalendarDays className="h-4 w-4 text-[#f5ed00]" />
              <p className="text-xs">More TVC experiences will be added here as they unfold.</p>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-[#f5ed00]">
              Back to TVC <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
