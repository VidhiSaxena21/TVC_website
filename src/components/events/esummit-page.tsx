"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { PlayVideoOnView } from "@/components/events/play-video-on-view";
import { ESummitTeamGallery } from "@/components/events/esummit-team-gallery";

const moments = [
  { number: "01", title: "Ideas take the stage", image: "/images/esummit/highlights/highlight-01.jpg", shape: "aspect-[5/4]" },
  { number: "02", title: "Conversations that move ideas forward", image: "/images/esummit/highlights/highlight-02.jpg", shape: "aspect-[5/4]" },
  { number: "03", title: "A community of builders", image: "/images/esummit/highlights/highlight-03.jpg", shape: "aspect-[5/4]" },
];

export function ESummitPage() {
  return (
    <div className="min-h-screen bg-[#080807] text-[#f4f3ef] selection:bg-[#f5ed00] selection:text-black">
      <SiteHeader />
      <main id="main-content">
        {/* Upload the official aftermovie to public/videos/esummit-aftermovie.mp4.
            Optional still fallback: public/events/esummit-2025-poster.jpg */}
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#080807]">
          <video
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            autoPlay muted loop playsInline preload="metadata"
            poster="/events/esummit-2025-poster.jpg"
          >
            <source src="/videos/esummit-aftermovie.mp4" type="video/mp4" />
          </video>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/35 to-[#080807]" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_35%,rgba(245,237,0,0.13),transparent_50%)]" />

          <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-6 pb-9 pt-36 sm:px-8 sm:pb-12 sm:pt-40 lg:px-12">
            <Link href="/events" className="inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-[#f5ed00]">
              <ArrowLeft className="h-3.5 w-3.5" /> All events
            </Link>

            <div className="max-w-5xl py-16">
              <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#f5ed00]">
                <span className="h-px w-8 bg-[#f5ed00]" /> Thapar Venture Club presents
              </p>
              <h1 className="text-[clamp(4.5rem,13vw,11rem)] font-semibold leading-[0.78] tracking-[-0.09em]">
                E-SUMMIT<span className="text-[#f5ed00]">'26</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-2xl">
                Five days of innovation, entrepreneurship and future technologies.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 border border-[#f5ed00]/50 bg-black/35 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white">
                  <CalendarDays className="h-4 w-4 text-[#f5ed00]" /> 18—22 February 2026
                </span>
                <span className="border border-white/20 bg-black/30 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
                  12th edition · TIET Patiala
                </span>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#experience" className="inline-flex items-center gap-3 bg-[#f5ed00] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-transform hover:-translate-y-1">
                  Explore the summit <ArrowUpRight className="h-4 w-4" />
                </a>
                  Visit E-Summit'26 <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="flex items-end justify-between border-t border-white/20 pt-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">A flagship experience by TVC · TIET Patiala</p>
              <span className="hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/50 sm:inline-flex"><VolumeX className="h-3.5 w-3.5" /> Aftermovie · Sound off</span>
            </div>
          </div>
        </section>

        <section id="experience" className="border-b border-white/10 bg-[#0b0b09]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12">
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f5ed00]">01 / The summit</p>
              <h2 className="max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl">A meeting ground for ideas and ambition.</h2>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-lg leading-relaxed text-white/65">
                E-Summit'26 marked the 12th edition of Thapar Venture Club's flagship summit: a five-day celebration of innovation, entrepreneurship and future technologies, held from 18 to 22 February 2026.
              </p>
              <p className="border-l border-[#f5ed00]/60 pl-5 text-base leading-relaxed text-white/80">
                A campus-wide platform to discover ideas, exchange perspectives and connect with the people shaping what comes next.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div><p className="text-3xl font-semibold text-[#f5ed00]">12th</p><p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/40 sm:text-[9px]">Edition</p></div>
                <div><p className="text-3xl font-semibold text-[#f5ed00]">05</p><p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/40 sm:text-[9px]">Days</p></div>
                <div><p className="text-3xl font-semibold text-[#f5ed00]">2026</p><p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/40 sm:text-[9px]">February</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f5ed00]">02 / Moments from the summit</p>
              <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">Ideas in action.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">A visual look back at the people, energy and moments of E-Summit'26.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {moments.map((moment) => (
              <figure key={moment.number} className="group">
                <div className={`relative ${moment.shape} overflow-hidden border border-white/10 bg-[#12120f]`}>
                  <img
                    src={moment.image}
                    alt={moment.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    onError={(event) => { event.currentTarget.style.display = "none"; }}
                  />
                  <div className="absolute inset-0 -z-0 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_50%_45%,rgba(245,237,0,0.08),transparent_65%)]">
                    <span className="font-mono text-4xl text-white/15">{moment.number}</span>
                    <span className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">Upload event photograph</span>
                  </div>
                  <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/75">{moment.number} / E-Summit'26</span>
                </div>
                <figcaption className="mt-3 text-sm text-white/60">{moment.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#050505] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-10 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f5ed00]">03 / The people behind it</p>
                <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">The team that made it happen.</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/45">The people, teamwork and shared effort behind E-Summit 2026.</p>
            </div>
            <ESummitTeamGallery />
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0b0b09] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f5ed00]">04 / The conversations</p>
                <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Perspectives that stay with you.</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/45">A speaker-film edit from E-Summit'26.</p>
            </div>
            {/* Upload speaker edit to public/videos/esummit-2026-speaker-collage.mp4.
                Optional poster: public/events/esummit-2026-speakers-poster.jpg */}
            <div className="relative aspect-video overflow-hidden border border-white/10 bg-black">
              <PlayVideoOnView
                src="/videos/esummit-2026-speaker-collage.mp4"
                poster="/events/esummit-2026-speakers-poster.jpg"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/65"><Play className="h-3.5 w-3.5" /> E-Summit 2026 · Speaker edit</div>
            </div>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">Video plays muted when it enters the viewport.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#f5ed00]">TVC · Ideate, Ascend, Lead</p>
              <h2 className="text-2xl font-semibold sm:text-3xl">The next chapter starts with an idea.</h2>
            </div>
              Visit E-Summit'26 website <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
