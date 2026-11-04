import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Terminal } from "lucide-react";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { ESummitPage } from "@/components/events/esummit-page";

type EventSlug = "tvc-x-sat" | "e-summit";

const eventContent = {
  "tvc-x-sat": {
    title: "TVC × SAT",
    eyebrow: "A TVC collaboration",
    subtitle: "ENTER THE MATRIX.",
    description:
      "A high-stakes arena for sharp minds. Decode the signals, challenge the obvious and turn complex problems into bold, actionable solutions.",
    accent: "matrix",
  },
  "e-summit": {
    title: "E-Summit",
    eyebrow: "Thapar Venture Club's flagship",
    subtitle: "Ideas deserve a bigger stage.",
    description:
      "A flagship gathering of ambitious minds, entrepreneurial ideas and conversations with people building what comes next.",
    accent: "summit",
  },
} as const;

// Add the final registration URL here when the form is ready.
const TVC_X_SAT_REGISTRATION_URL = "";

export function EventDetailPage({ event }: { event: EventSlug }) {
  if (event === "e-summit") return <ESummitPage />;

  const content = eventContent[event];
  const isMatrix = content.accent === "matrix";

  return (
    <div className={`flex min-h-screen flex-col bg-black text-[#f4f3ef] selection:bg-[#f5ed00] selection:text-black ${isMatrix ? "matrix-event" : ""}`}>
      <SiteHeader />
      <main id="main-content" className="flex-grow">
        <section className={`relative isolate overflow-hidden border-b border-white/10 pt-36 sm:pt-44 ${isMatrix ? "bg-[#030904]" : "bg-[#080807]"}`}>
          {isMatrix ? (
            <>
              <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(163,255,18,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.09)_1px,transparent_1px)] [background-size:42px_42px]" />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(91,255,0,0.12),transparent_60%)]" />
              <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-36 -z-10 hidden font-mono text-[clamp(100px,20vw,280px)] font-bold leading-none text-[#a3ff12]/[0.06] lg:block">01</div>
            </>
          ) : (
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_15%,rgba(245,237,0,0.1),transparent_60%)]" />
          )}
          <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 sm:pb-28 lg:px-12">
            <Link href="/events" className="mb-12 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-[#f5ed00]">
              <ArrowLeft className="h-3.5 w-3.5" /> All events
            </Link>
            <p className={`mb-5 font-mono text-[10px] uppercase tracking-[0.25em] ${isMatrix ? "text-[#a3ff12]" : "text-[#f5ed00]"}`}>{content.eyebrow}</p>
            <h1 className={`max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-8xl ${isMatrix ? "text-[#eaffdf]" : "text-[#f4f3ef]"}`}>{content.title}</h1>
            <p className={`mt-7 font-mono text-sm uppercase tracking-[0.2em] sm:text-base ${isMatrix ? "text-[#a3ff12]" : "text-white/50"}`}>{content.subtitle}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">{content.description}</p>

            {isMatrix && (
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {TVC_X_SAT_REGISTRATION_URL ? (
                  <a href={TVC_X_SAT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#a3ff12] px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-1">
                    Register for TVC × SAT <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <a href="#registration" className="inline-flex items-center gap-3 bg-[#a3ff12] px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-1">
                    Registration <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                <span className="inline-flex items-center gap-2 border border-[#a3ff12]/25 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#a3ff12]/70">
                  <Terminal className="h-3.5 w-3.5" /> System online
                </span>
              </div>
            )}
          </div>
        </section>

        {isMatrix ? (
          <>
            <section className="border-b border-[#a3ff12]/15 bg-[#050a05]">
              <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12 lg:py-24">
                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#a3ff12]">01 / The experience</p>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Think beyond the obvious.</h2>
                </div>
                <div className="space-y-5 text-sm leading-relaxed text-white/60 sm:text-base">
                  <p>Enter a world where every problem is a signal and every decision changes the outcome. TVC × SAT brings together participants ready to think critically, collaborate and build solutions under pressure.</p>
                  <p>Expect a challenge-led experience shaped around strategy, creativity and execution. Detailed tracks, timelines and participation information will be shared through the official registration announcement.</p>
                </div>
              </div>
            </section>

            <section id="registration" className="border-y border-[#a3ff12]/20 bg-[#071007]">
              <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#a3ff12]">03 / Join the challenge</p>
                  <h2 className="text-2xl font-semibold sm:text-3xl">Ready to enter the Matrix?</h2>
                  <p className="mt-2 text-sm text-white/50">Registration details will be announced shortly.</p>
                </div>
                {TVC_X_SAT_REGISTRATION_URL ? (
                  <a href={TVC_X_SAT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#a3ff12] px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-black">
                    Register now <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-3 border border-[#a3ff12]/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-[#a3ff12]/80">
                    <CalendarDays className="h-4 w-4" /> Registration opening soon
                  </span>
                )}
              </div>
            </section>
          </>
        ) : (
          <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f5ed00]">The flagship experience</p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ideas, people, possibilities.</h2>
              </div>
              <div className="space-y-5 text-sm leading-relaxed text-white/60 sm:text-base">
                <p>E-Summit is the flagship entrepreneurship experience of Thapar Venture Club, bringing together students, founders, professionals and ambitious ideas.</p>
                <p>Speaker sessions, interactive conversations, workshops, competitions and opportunities to connect create a space for the campus entrepreneurial ecosystem to learn and grow.</p>
              </div>
            </div>
            <div className="mt-16 border-t border-white/10 pt-6">
              <Link href="/events" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-[#f5ed00]">
                Explore all events <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
