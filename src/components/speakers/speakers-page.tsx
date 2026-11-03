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
          className="pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-white/[0.08] relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(245,237,0,0.04),transparent_70%)]"
          />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a5a49f] hover:text-[#f5ed00] transition-colors mb-9 focus-visible:outline-none focus-visible:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Home</span>
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-[#a5a49f] mb-4 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f5ed00]" />
                  <span>Ideas Worth Sharing</span>
                </div>
                <h1
                  id="speakers-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] mb-5"
                >
                  Voices that move
                  <br className="hidden sm:block" /> ideas forward.
                </h1>
                <p className="text-base sm:text-lg text-[#a5a49f] leading-relaxed max-w-2xl">
                  A look back at the thinkers, builders, creators and changemakers
                  who have shared their perspectives with the Thapar community.
                </p>
              </div>

              <div className="flex items-center gap-4 border-t lg:border-t-0 border-white/[0.08] pt-5 lg:pt-0">
                <div className="w-11 h-11 rounded-full border border-[#f5ed00]/30 bg-[#f5ed00]/[0.06] flex items-center justify-center">
                  <Mic2 className="w-5 h-5 text-[#f5ed00]" />
                </div>
                <div>
                  <p className="font-mono text-2xl text-[#f4f3ef]">{String(previousSpeakers.length).padStart(2, "0")}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a5a49f]">Featured speakers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Previous speakers"
          className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16 sm:py-24"
        >
          <div className="flex items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#a5a49f] mb-2">The people behind the perspectives</p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">Previous speakers</h2>
            </div>
            <span className="hidden sm:block font-mono text-xs text-[#77766f]">THAPAR VENTURE CLUB / ARCHIVE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {previousSpeakers.map((speaker, index) => (
              <article
                key={speaker.id}
                className="group relative min-w-0 bg-[#10100f] border border-white/[0.09] hover:border-[#f5ed00]/40 transition-colors duration-300 overflow-hidden"
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-[#171715] border-b border-white/[0.07] flex items-center justify-center">
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(245,237,0,0.08),transparent_58%)]" />
                  <span className="relative font-semibold tracking-[-0.08em] text-[5.5rem] sm:text-8xl text-white/[0.09] group-hover:text-[#f5ed00]/20 transition-colors duration-300 select-none">
                    {speaker.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase()}
                  </span>
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-white/35">
                    {String(index + 1).padStart(2, "0")} / {String(previousSpeakers.length).padStart(2, "0")}
                  </span>
                  <span className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Speaker archive
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f5ed00] mb-2">
                    {speaker.field}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#f4f3ef] group-hover:text-white">
                      {speaker.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-white/25 group-hover:text-[#f5ed00] transition-colors" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
