"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, CalendarDays, Sparkles, Binary, Layers3, BriefcaseBusiness, ChartNoAxesCombined } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";

const events = [
  {
    id: "tvc-x-sat",
    title: "PRIMUS",
    edition: "’26",
    subtitle: "Where every decision connects.",
    type: "TVC × SATURNALIA’26",
    description:
      "An overnight, inter-college business and case competition. Build products, make strategic calls and navigate the world of finance across three specialised tracks.",
    href: "/events/tvc-x-sat",
    theme: "matrix",
    number: "01",
    date: "20 NOV 2026 · 10 PM — 21 NOV · 8 AM",
    location: "CSED · TIET PATIALA",
    details: [
      { label: "PRODUCT", icon: Layers3 },
      { label: "CONSULTING", icon: BriefcaseBusiness },
      { label: "FINANCE", icon: ChartNoAxesCombined },
    ],
    action: "Enter the Matrix",
  },
  {
    id: "e-summit",
    title: "E-SUMMIT",
    edition: "’26",
    subtitle: "The flagship entrepreneurship summit.",
    type: "THAPAR VENTURE CLUB · 12TH EDITION",
    description:
      "Five days of innovation, entrepreneurship and future technologies. A meeting ground for ambitious ideas, industry perspectives and the next generation of builders.",
    href: "/events/e-summit",
    theme: "summit",
    number: "02",
    date: "18 — 22 FEBRUARY 2026",
    location: "TIET · PATIALA",
    details: [
      { label: "IDEAS", icon: Sparkles },
      { label: "PEOPLE", icon: BriefcaseBusiness },
      { label: "POSSIBILITIES", icon: ArrowUpRight },
    ],
    action: "Explore the summit",
  },
];

export function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-[#f4f3ef] selection:bg-[#f5ed00] selection:text-black">
      <SiteHeader />
      <main id="main-content" className="flex-grow">
        <section className="relative isolate overflow-hidden border-b border-white/[0.08]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_55%_at_50%_0%,rgba(245,237,0,0.07),transparent_72%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44 lg:px-12 lg:pb-24">
            <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#f5ed00]">
              <span className="h-px w-8 bg-[#f5ed00]" /> TVC / The experiences
            </p>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <h1 className="max-w-4xl text-[clamp(3.8rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.085em]">
                Ideas become
                <br /><span className="text-white/35">experiences.</span>
              </h1>
              <div className="max-w-lg lg:justify-self-end">
                <p className="text-base leading-relaxed text-white/55 sm:text-lg">
                  From high-stakes business challenges to our flagship entrepreneurship summit, discover the events that bring ambitious minds together.
                </p>
                <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">
                  <span className="font-mono text-3xl text-white">02</span>
                  <span className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-white/35">Flagship experiences<br />One community · Endless possibilities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Featured events" className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mb-9 flex items-end justify-between border-b border-white/10 pb-5">
            <div>
              <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">The TVC calendar</p>
              <h2 className="text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">Explore our events</h2>
            </div>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/30 sm:block">Select an experience ↗</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {events.map((event) => {
              const isMatrix = event.theme === "matrix";
              const accent = isMatrix ? "#a3ff12" : "#f5ed00";
              return (
                <Link
                  key={event.id}
                  href={event.href}
                  className={`group relative isolate flex min-h-[610px] flex-col overflow-hidden border p-6 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 sm:p-9 lg:min-h-[660px] ${isMatrix ? "border-[#a3ff12]/25 bg-[#050b06] hover:border-[#a3ff12]/65 focus-visible:ring-[#a3ff12]" : "border-white/[0.13] bg-[#10100e] hover:border-[#f5ed00]/55 focus-visible:ring-[#f5ed00]"}`}
                >
                  {isMatrix ? (
                    <>
                      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(163,255,18,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.075)_1px,transparent_1px)] [background-size:38px_38px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
                      <div aria-hidden="true" className="absolute -right-5 top-20 -z-10 font-mono text-[clamp(12rem,22vw,19rem)] font-black leading-none tracking-[-0.12em] text-[#a3ff12]/[0.055] transition-transform duration-700 group-hover:translate-x-[-12px]">01</div>
                      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#a3ff12]/70 to-transparent" />
                    </>
                  ) : (
                    <>
                      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_12%,rgba(245,237,0,0.12),transparent_52%)]" />
                      <div aria-hidden="true" className="absolute -right-5 top-20 -z-10 font-mono text-[clamp(12rem,22vw,19rem)] font-black leading-none tracking-[-0.12em] text-[#f5ed00]/[0.045] transition-transform duration-700 group-hover:translate-x-[-12px]">02</div>
                    </>
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <span className={`font-mono text-[9px] uppercase tracking-[0.2em] ${isMatrix ? "text-[#a3ff12]" : "text-[#f5ed00]"}`}>{event.type}</span>
                    <span className="font-mono text-[10px] text-white/35">{event.number} / 02</span>
                  </div>

                  <div className="relative mt-auto">
                    <p className={`mb-5 font-mono text-[10px] uppercase tracking-[0.2em] ${isMatrix ? "text-[#a3ff12]/70" : "text-white/40"}`}>{event.subtitle}</p>
                    <h3 className={`text-[clamp(3.4rem,7vw,6rem)] font-semibold leading-[0.86] tracking-[-0.085em] transition-transform duration-500 group-hover:-translate-y-1 ${isMatrix ? "text-[#e9ffe0]" : "text-[#f4f3ef]"}`}>
                      {event.title}<span style={{ color: accent }}>{event.edition}</span>
                    </h3>
                    <p className="mt-7 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">{event.description}</p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {event.details.map((detail) => {
                        const DetailIcon = detail.icon;
                        return (
                          <span key={detail.label} className={`inline-flex items-center gap-2 border px-3 py-2 font-mono text-[8px] uppercase tracking-[0.13em] ${isMatrix ? "border-[#a3ff12]/20 bg-[#a3ff12]/[0.04] text-[#d9ffd1]/65" : "border-white/10 bg-white/[0.02] text-white/50"}`}>
                            <DetailIcon className="h-3 w-3" /> {detail.label}
                          </span>
                        );
                      })}
                    </div>

                    <div className="mt-9 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
                      <div>
                        <p className={`flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] ${isMatrix ? "text-[#a3ff12]" : "text-[#f5ed00]"}`}>
                          <CalendarDays className="h-3.5 w-3.5" /> {event.date}
                        </p>
                        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">{event.location}</p>
                      </div>
                      <span className={`inline-flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.16em] ${isMatrix ? "text-[#a3ff12]" : "text-[#f5ed00]"}`}>
                        {event.action}
                        <span className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${isMatrix ? "border-[#a3ff12]/40 group-hover:bg-[#a3ff12] group-hover:text-black" : "border-white/20 group-hover:border-[#f5ed00] group-hover:bg-[#f5ed00] group-hover:text-black"}`}>
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-12">
          <div className="flex flex-col gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-white/40">
              <Sparkles className="h-4 w-4 text-[#f5ed00]" />
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
