import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { executiveBoardGroups } from "@/data/team";
import { MemberCard } from "@/components/team/member-card";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function TeamPage() {
  const members = executiveBoardGroups.flatMap((group) => group.members);

  return (
    <div className="min-h-screen bg-[#000000] text-[#f4f3ef] flex flex-col selection:bg-[#f5ed00] selection:text-black">
      <SiteHeader />

      <main id="main-content" className="flex-grow">
        <section
          aria-labelledby="team-hero-heading"
          className="pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-white/[0.08] relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(245,237,0,0.03),transparent_70%)]"
          />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a5a49f] hover:text-[#f5ed00] transition-colors focus-visible:outline-none focus-visible:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Home</span>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-[#a5a49f] mb-4 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f5ed00]" />
                  <span>THE PEOPLE BEHIND TVC</span>
                </div>

                <h1
                  id="team-hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#f4f3ef] leading-[1.1] mb-5"
                >
                  Meet the Executive Board.
                </h1>

                <p className="text-base sm:text-lg text-[#a5a49f] leading-relaxed max-w-2xl">
                  The people driving ideas, building connections and strengthening the
                  entrepreneurial ecosystem at Thapar Institute.
                </p>
              </div>

              <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-2 border-t md:border-t-0 border-white/[0.08] pt-4 md:pt-0">
                <span className="font-mono text-xs uppercase tracking-widest text-[#a5a49f]">
                  Executive Term
                </span>
                <span className="font-mono text-sm sm:text-base font-semibold text-[#f5ed00] bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-sm">
                  2026 — 2027
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="executive-board-heading"
          className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16 sm:py-24"
        >
          <div className="flex items-end justify-between gap-4 mb-10 sm:mb-14">
            <h2
              id="executive-board-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#f4f3ef]"
            >
              Executive Board
            </h2>
            <span className="font-mono text-xs text-[#a5a49f]">2026 — 2027</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          <div className="mt-20 p-8 sm:p-12 bg-[#141413] border border-white/[0.08] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#f4f3ef] mb-2">
                Interested in being part of TVC?
              </h3>
              <p className="text-sm text-[#a5a49f] max-w-xl">
                Reach out to us to learn more about the club, upcoming opportunities and ways to get involved.
              </p>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=edc%40thapar.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#f5ed00] hover:bg-[#fff957] text-black font-semibold text-xs font-mono uppercase tracking-widest px-6 py-3.5 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
