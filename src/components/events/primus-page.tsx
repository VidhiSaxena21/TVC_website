import { ArrowUpRight, Binary, BriefcaseBusiness, ChartNoAxesCombined, Cpu, Layers3 } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { PrimusHero } from "@/components/events/primus-hero";

const tracks = [
  {
    number: "01",
    code: "BUILD",
    title: "Product",
    descriptor: "Think like a builder.",
    description: "Find the problem worth solving. Shape the product, define the experience and turn an ambitious idea into something people can use.",
    icon: Layers3,
    accent: "from-[#b7ff6a]/20",
    tags: ["Product thinking", "Innovation", "User experience"],
  },
  {
    number: "02",
    code: "SOLVE",
    title: "Consulting & Business",
    descriptor: "Think in systems.",
    description: "Untangle complex business challenges, connect the dots and build a strategy that can move an organisation forward.",
    icon: BriefcaseBusiness,
    accent: "from-[#55f7a5]/20",
    tags: ["Business strategy", "Problem solving", "Execution"],
  },
  {
    number: "03",
    code: "ANALYSE",
    title: "Finance",
    descriptor: "Think in numbers.",
    description: "Read between the numbers. Evaluate opportunities, understand risk and make decisions where every assumption matters.",
    icon: ChartNoAxesCombined,
    accent: "from-[#a4ffcf]/20",
    tags: ["Financial analysis", "Valuation", "Decision making"],
  },
];

export function PrimusPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#020503] text-[#efffed] selection:bg-[#a3ff12] selection:text-black">
      <SiteHeader />
      <main id="main-content" className="flex-grow">
        <PrimusHero />

        <section id="signal" className="relative border-b border-[#a3ff12]/10 bg-[#050a06]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16 lg:py-28">
            <div>
              <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#a3ff12]"><Binary className="h-4 w-4" /> 01 / The premise</p>
              <h2 className="max-w-lg text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-5xl">The world is complex.<br /><span className="text-white/35">Your thinking shouldn't be ordinary.</span></h2>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <p className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                PRIMUS’26 is a challenge-led experience by Thapar Venture Club in collaboration with SAT. Step into a world built around strategy, creativity and sharp decision-making. Decode the problem, challenge your assumptions and make your move.
              </p>
              <div className="grid grid-cols-2 gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
                <div><p className="font-mono text-2xl text-[#a3ff12]">03</p><p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">Distinct tracks</p></div>
                <div><p className="font-mono text-2xl text-[#a3ff12]">01</p><p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">Shared arena</p></div>
                <div className="col-span-2 sm:col-span-1"><p className="font-mono text-2xl text-[#a3ff12]">∞</p><p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">Ways to think</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="tracks" className="relative bg-[#030604] py-20 sm:py-28">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(163,255,18,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.13)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-8 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#a3ff12]"><Cpu className="h-4 w-4" /> 02 / Choose your reality</p>
                <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Three tracks.<br /><span className="text-white/35">Three ways to win.</span></h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/45">Pick the arena that matches how you think. Then prove what you can do with it.</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {tracks.map((track) => {
                const Icon = track.icon;
                return (
                  <article key={track.number} className="group relative flex min-h-[420px] flex-col overflow-hidden border border-[#a3ff12]/15 bg-[#071009]/85 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#a3ff12]/55 hover:bg-[#0a160c] sm:p-8">
                    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${track.accent} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                    <div className="relative flex items-start justify-between">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#a3ff12]/65">TRACK / {track.number}</span>
                      <span className="flex h-11 w-11 items-center justify-center border border-[#a3ff12]/25 text-[#a3ff12] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#a3ff12] group-hover:text-black"><Icon className="h-5 w-5" /></span>
                    </div>
                    <div className="relative mt-auto pt-16">
                      <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.24em] text-[#a3ff12]/65">{track.code}</p>
                      <h3 className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl">{track.title}</h3>
                      <p className="mt-3 text-sm text-white/65">{track.descriptor}</p>
                      <p className="mt-5 min-h-[100px] text-sm leading-relaxed text-white/45">{track.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                        {track.tags.map((tag) => <span key={tag} className="border border-white/10 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/40">{tag}</span>)}
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute -bottom-12 -right-4 font-mono text-[140px] font-bold leading-none text-[#a3ff12]/[0.035] transition-transform duration-700 group-hover:-translate-y-3">{track.number}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#a3ff12]/15 bg-[#071009]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-20">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[#a3ff12]">03 / Your move</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.055em] sm:text-5xl">The system is waiting.<br /><span className="text-white/35">Are you ready to challenge it?</span></h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/50">Bring your perspective. Find your team. Step into PRIMUS’26.</p>
            </div>
            <div id="registration" className="scroll-mt-32">
              <a href="https://www.saturnalia.in/events/business" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-[#a3ff12] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black transition-all hover:-translate-y-1 hover:bg-[#c2ff70]">
                Register for PRIMUS’26 <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
