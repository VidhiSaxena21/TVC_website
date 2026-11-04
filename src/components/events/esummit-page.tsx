import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Play, VolumeX } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { PlayVideoOnView } from "@/components/events/play-video-on-view";

export function ESummitPage() {
  return (
    <div className="min-h-screen bg-black text-[#f4f3ef] selection:bg-[#f5ed00] selection:text-black">
      <SiteHeader />
      <main id="main-content">
        {/* 2025 aftermovie: full-bleed, muted and autoplaying behind the opening story. */}
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#080807]">
          <video
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/events/esummit-2025-poster.jpg"
          >
            <source src="/videos/esummit-2025-aftermovie.mp4" type="video/mp4" />
          </video>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/45 to-black" />
          <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-6 pb-12 pt-36 sm:px-8 sm:pb-16 sm:pt-44 lg:px-12">
            <Link href="/events" className="inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-[#f5ed00]">
              <ArrowLeft className="h-3.5 w-3.5" /> All events
            </Link>

            <div className="max-w-4xl py-20">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-[#f5ed00]">Thapar Venture Club presents</p>
              <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.075em] sm:text-7xl lg:text-[108px]">E-Summit<span className="text-[#f5ed00]">.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
                Ideas, ambition and the people building what comes next.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#the-experience" className="inline-flex items-center gap-3 bg-[#f5ed00] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-transform hover:-translate-y-1">
                  Explore the experience <ArrowUpRight className="h-4 w-4" />
                </a>
                <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">
                  <VolumeX className="h-3.5 w-3.5" /> Sound off · 2025 aftermovie
                </span>
              </div>
            </div>
            <div className="flex items-end justify-between border-t border-white/20 pt-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">A flagship experience by TVC · TIET Patiala</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">Scroll to explore ↓</p>
            </div>
          </div>
        </section>

        {/* Event story: editorial content follows the moving image. */}
        <section id="the-experience" className="relative overflow-hidden border-b border-white/10 bg-[#080807]">
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_80%_35%,rgba(245,237,0,0.07),transparent_65%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f5ed00]">01 / The experience</p>
              <h2 className="max-w-lg text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl">A room full of ideas. A campus full of possibility.</h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-white/65">
              <p>E-Summit is Thapar Venture Club's flagship entrepreneurship experience, bringing together students, founders, professionals and curious minds to exchange ideas and explore what it takes to build.</p>
              <p>Across speaker sessions, interactive conversations, workshops, competitions and networking opportunities, the summit creates a space for the campus entrepreneurial ecosystem to learn, connect and move forward.</p>
              <p className="border-l border-[#f5ed00]/60 pl-5 text-white/85">More than an event, E-Summit is a meeting point for people who want to turn ambition into action.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mb-10 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f5ed00]">02 / Inside E-Summit</p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Built around bold thinking.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">A platform for conversations, learning and meaningful connections across the entrepreneurial ecosystem.</p>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {[
              ["01", "Speaker sessions", "Learn from founders, leaders and professionals who bring real-world perspectives."],
              ["02", "Workshops & learning", "Build practical skills across business, product, finance and entrepreneurship."],
              ["03", "Competitions", "Put ideas to the test through challenges that reward creativity and execution."],
              ["04", "Community & connections", "Meet collaborators, discover opportunities and grow your network."],
            ].map(([number, title, description]) => (
              <article key={number} className="bg-[#080807] p-6 sm:p-8">
                <p className="mb-8 font-mono text-xs text-[#f5ed00]">{number}</p>
                <h3 className="mb-3 text-xl font-medium">{title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-white/50">{description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 2026 speaker collage: source is loaded and playback starts only when scrolled into view. */}
        <section className="border-y border-white/10 bg-[#080807] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f5ed00]">03 / Voices of E-Summit 2026</p>
                <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">The people. The perspectives.</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/45">A closer look at the speakers and conversations that shaped this year's summit.</p>
            </div>
            <div className="relative aspect-video overflow-hidden border border-white/10 bg-black">
              <PlayVideoOnView
                src="/videos/esummit-2026-speaker-collage.mp4"
                poster="/events/esummit-2026-speakers-poster.jpg"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/65">E-Summit 2026 · Speaker edit</div>
            </div>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">Video plays muted when it enters the viewport.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#f5ed00]">Keep building</p>
              <h2 className="text-2xl font-semibold sm:text-3xl">The next chapter starts with an idea.</h2>
            </div>
            <Link href="/events" className="inline-flex w-fit items-center gap-2 border border-white/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/75 transition-colors hover:border-[#f5ed00] hover:text-[#f5ed00]">
              Explore all events <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
