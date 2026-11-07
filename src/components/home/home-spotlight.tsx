import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, CalendarDays, ChartNoAxesCombined, Layers3, Sparkles } from "lucide-react";

const highlights = [
  { value: "12TH", label: "E-Summit edition", note: "A flagship entrepreneurship summit" },
  { value: "03", label: "PRIMUS tracks", note: "Product · Consulting · Finance" },
  { value: "17", label: "Executive Board members", note: "One team building the ecosystem" },
];

const events = [
  {
    id: "01",
    eyebrow: "TVC × SATURNALIA’26",
    title: "PRIMUS’26",
    tagline: "Where every decision connects.",
    description: "An overnight business and case competition across Product, Consulting and Finance.",
    date: "20 NOV 2026 · 10 PM",
    href: "/events/tvc-x-sat",
    theme: "matrix",
    icon: [Layers3, BriefcaseBusiness, ChartNoAxesCombined],
    action: "Enter the Matrix",
  },
  {
    id: "02",
    eyebrow: "THAPAR VENTURE CLUB · 12TH EDITION",
    title: "E-SUMMIT’26",
    tagline: "Ideas. People. Possibilities.",
    description: "Five days of entrepreneurship, innovation, industry perspectives and campus experiences.",
    date: "18—22 FEBRUARY 2026",
    href: "/events/e-summit",
    theme: "summit",
    icon: [Sparkles, BriefcaseBusiness, CalendarDays],
    action: "Explore the summit",
  },
];

export function HomeSpotlight() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#050505] text-[#f4f3ef]">
      <div aria-hidden="true" className="overflow-hidden border-b border-white/[0.08] py-3">
        <div className="flex w-max animate-[tvc-marquee_32s_linear_infinite] motion-reduce:animate-none">
          {Array.from({ length: 2 }).map((_, index) => (
            <p key={index} className="flex shrink-0 items-center gap-8 pr-8 font-mono text-[9px] uppercase tracking-[0.24em] text-white/40 sm:text-[10px]">
              <span>IDEATE</span><span className="text-[#f5ed00]">✳</span><span>ASCEND</span><span className="text-[#f5ed00]">✳</span><span>LEAD</span><span className="text-[#f5ed00]">✳</span><span>BUILD</span><span className="text-[#f5ed00]">✳</span><span>CONNECT</span><span className="text-[#f5ed00]">✳</span><span>IDEATE</span>
            </p>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-[#f5ed00]"><span className="h-px w-7 bg-[#f5ed00]" /> TVC / In motion</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-7xl">Ideas don’t stay<br /><span className="text-white/35">ideas for long.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/50 lg:justify-self-end sm:text-base">We create spaces for students to explore entrepreneurship, challenge assumptions and turn ambition into action.</p>
        </div>

        <div className="grid grid-cols-1 border-y border-white/10 sm:grid-cols-3">
          {highlights.map((item, index) => (
            <div key={item.label} className={`group py-6 sm:px-6 sm:py-8 ${index ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}>
              <p className="font-mono text-4xl font-medium tracking-[-0.06em] text-[#f5ed00] transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl">{item.value}</p>
              <p className="mt-3 text-sm font-medium text-white">{item.label}</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 mt-20 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">The TVC calendar</p>
            <h3 className="text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">Flagship experiences</h3>
          </div>
          <Link href="/events" className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/50 transition-colors hover:text-[#f5ed00]">All events <ArrowUpRight className="h-3.5 w-3.5" /></Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {events.map((event) => {
            const matrix = event.theme === "matrix";
            return (
              <Link key={event.id} href={event.href} className={`group relative isolate flex min-h-[390px] flex-col justify-between overflow-hidden border p-6 transition-all duration-500 hover:-translate-y-1 sm:min-h-[440px] sm:p-9 ${matrix ? "border-[#a3ff12]/25 bg-[#050b06] hover:border-[#a3ff12]/65" : "border-white/15 bg-[#11110f] hover:border-[#f5ed00]/60"}`}>
                {matrix ? (
                  <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(163,255,18,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.08)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
                ) : (
                  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_10%,rgba(245,237,0,0.12),transparent_55%)]" />
                )}
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[9px] uppercase tracking-[0.2em] ${matrix ? "text-[#a3ff12]" : "text-[#f5ed00]"}`}>{event.eyebrow}</span>
                  <span className="font-mono text-[10px] text-white/30">{event.id} / 02</span>
                </div>
                <div className="relative">
                  <p className={`mb-3 font-mono text-[9px] uppercase tracking-[0.18em] ${matrix ? "text-[#a3ff12]/70" : "text-white/40"}`}>{event.tagline}</p>
                  <h4 className={`text-5xl font-semibold tracking-[-0.075em] transition-transform duration-500 group-hover:translate-x-1 sm:text-6xl ${matrix ? "text-[#e9ffe0]" : "text-white"}`}>{event.title}</h4>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">{event.description}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    {event.icon.map((Icon, index) => <span key={index} className={`flex h-9 w-9 items-center justify-center border ${matrix ? "border-[#a3ff12]/20 text-[#a3ff12]" : "border-white/10 text-[#f5ed00]"}`}><Icon className="h-4 w-4" /></span>)}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                  <span className={`font-mono text-[9px] uppercase tracking-[0.16em] ${matrix ? "text-[#a3ff12]/75" : "text-white/45"}`}>{event.date}</span>
                  <span className={`inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] ${matrix ? "text-[#a3ff12]" : "text-[#f5ed00]"}`}>{event.action}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
