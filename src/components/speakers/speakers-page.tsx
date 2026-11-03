import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mic2 } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { previousSpeakers } from "@/data/speakers";

export function SpeakersPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#f4f3ef] flex flex-col selection:bg-[#f5ed00] selection:text-black">
      <SiteHeader />

      <main id="main-content" className="flex-grow">
        <section
          aria-labelledby="speakers-heading"
          className="relative overflow-hidden border-b border-white/[0.08] pt-32 pb-16 sm:pt-40 sm:pb-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_25%,rgba(245,237,0,0.055),transparent_70%)]"
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a5a49f] transition-colors hover:text-[#f5ed00] focus-visible:outline-none focus-visible:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Return to Home</span>
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#a5a49f]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f5ed00]" />
                  <span>The people who inspired us</span>
                </div>
                <h1
                  id="speakers-heading"
                  className="mb-6 text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
                >
                  Perspectives that inspire.
                  <br />
                  <span className="text-[#77766f]">Experiences that shape.</span>
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-[#a5a49f] sm:text-lg">
                  From entrepreneurship and business to public service, technology,
                  entertainment and personal growth, explore the voices that have
                  shared their journeys with the TVC community.
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/[0.1] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f5ed00]/30 bg-[#f5ed00]/[0.06]">
                  <Mic2 className="h-5 w-5 text-[#f5ed00]" />
                </div>
                <div>
                  <p className="font-mono text-3xl tabular-nums text-[#f4f3ef]">
                    {String(previousSpeakers.length).padStart(2, "0")}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a5a49f]">
                    Featured speakers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="archive-heading"
          className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
        >
          <div className="mb-9 flex items-end justify-between gap-4 sm:mb-12">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#a5a49f]">
                Ideas worth sharing
              </p>
              <h2 id="archive-heading" className="text-2xl font-medium tracking-tight sm:text-3xl">
                The speaker archive
              </h2>
            </div>
            <span className="hidden font-mono text-[10px] tracking-[0.18em] text-white/35 sm:block">
              THAPAR VENTURE CLUB / 01—12
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {previousSpeakers.map((speaker, index) => {
              const initials = speaker.name
                .split(/\s+/)
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (
                <article
                  key={speaker.id}
                  className="group relative min-w-0 overflow-hidden border border-white/[0.09] bg-[#10100f] transition-colors duration-300 hover:border-[#f5ed00]/40"
                >
                  <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#171715]">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(245,237,0,0.09),transparent_58%)] transition-opacity duration-500 group-hover:opacity-70"
                    />
                    {speaker.image ? (
                      // Portraits can be added to public/speakers and referenced in src/data/speakers.ts.
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                        loading="lazy"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="relative select-none text-7xl font-semibold tracking-[-0.08em] text-white/[0.12] transition-colors duration-300 group-hover:text-[#f5ed00]/25 sm:text-8xl"
                      >
                        {initials}
                      </span>
                    )}
                    <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.2em] text-white/40">
                      {String(index + 1).padStart(2, "0")} / {String(previousSpeakers.length).padStart(2, "0")}
                    </span>
                    <span className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                      TVC · Speaker archive
                    </span>
                  </div>

                  <div className="flex min-h-[124px] items-end justify-between gap-4 p-5 sm:p-6">
                    <div className="min-w-0">
                      <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#f5ed00]">
                        {speaker.field}
                      </p>
                      <h3 className="text-xl font-medium tracking-tight text-[#f4f3ef] transition-colors group-hover:text-white sm:text-2xl">
                        {speaker.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="mb-1 h-4 w-4 flex-shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f5ed00]" />
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
            Portraits can be added as official images become available.
          </p>
        </section>

        <section className="border-t border-white/[0.08] bg-[#0b0b0a]">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-12">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f5ed00]">
                Ideate · Ascend · Lead
              </p>
              <h2 className="mb-4 text-3xl font-medium tracking-tight sm:text-4xl">
                Every conversation starts something.
              </h2>
              <p className="text-sm leading-relaxed text-[#a5a49f] sm:text-base">
                At Thapar Venture Club, we believe the right perspective can change
                the way you think, build and lead.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex w-fit items-center gap-2 border border-white/15 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f4f3ef] transition-colors hover:border-[#f5ed00]/50 hover:text-[#f5ed00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5ed00]"
            >
              Explore TVC <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
