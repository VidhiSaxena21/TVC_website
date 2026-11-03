import Link from "next/link";
import { ArrowUpRight, User } from "lucide-react";

export function TeamPreview() {
  const leadershipRoster = [
    {
      slot: "01",
      role: "General Secretary",
      name: "[ General Secretary TBC ]",
      affiliation: "Executive Council // TIET Patiala",
      term: "2026–2027",
    },
    {
      slot: "02",
      role: "General Secretary",
      name: "[ General Secretary TBC ]",
      affiliation: "Executive Council // TIET Patiala",
      term: "2026–2027",
    },
    {
      slot: "03",
      role: "General Secretary",
      name: "[ General Secretary TBC ]",
      affiliation: "Executive Council // TIET Patiala",
      term: "2026–2027",
    },
  ];

  return (
    <section
      id="team-preview"
      aria-labelledby="team-preview-title"
      className="relative bg-[#0b0b0a] text-[#f4f3ef] border-t border-white/[0.08] py-28 sm:py-36 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-[#a5a49f] mb-4 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5ed00]" />
              <span>02 // Executive Leadership</span>
            </div>
            <h2
              id="team-preview-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#f4f3ef]"
            >
              The leadership steering the collective.
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-sm font-mono text-[#a5a49f]">
              [ Highest Leadership Grouping // Term 2026–2027 ]
            </p>
            <Link
              href="/team"
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f5ed00] hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
            >
              <span>View Full Leadership & Verticals</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 3-Column General Secretaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {leadershipRoster.map((member) => (
            <div
              key={member.slot}
              className="group relative bg-[#141413] border border-white/[0.08] hover:border-[#f5ed00]/40 rounded-sm overflow-hidden flex flex-col transition-all duration-300"
            >
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-white/20 z-10">+</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-white/20 z-10">+</div>

              {/* Portrait Aspect Frame */}
              <div className="relative aspect-[3/4] w-full bg-gradient-to-b from-[#1b1b19] to-[#0f0f0e] border-b border-white/[0.06] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Subtle silhouette backdrop */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-[#f5ed00]/60 group-hover:border-[#f5ed00]/20 transition-all duration-300">
                  <User className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>

                <div className="mt-5">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#a5a49f] bg-black/50 border border-white/[0.08] px-3 py-1.5 rounded-xs">
                    Slot {member.slot} {"//"} {member.term}
                  </span>
                </div>
              </div>

              {/* Member Meta */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#f5ed00] font-semibold">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="font-mono text-lg font-medium text-[#f4f3ef] mb-1.5">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#a5a49f] leading-relaxed">{member.affiliation}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span>TIET PATIALA</span>
                  <span>OFFICIAL ROSTER TBC</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 bg-[#141413] border border-white/[0.08] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#f4f3ef] mb-1.5">
              Interested in shaping the next venture cohort?
            </h3>
            <p className="text-sm text-[#a5a49f]">
              Recruitment cycles for student leads, operations managers, and technical fellows open
              each academic term.
            </p>
          </div>
          <Link
            href="/team"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#f5ed00] hover:bg-[#fff957] text-black font-semibold text-xs font-mono uppercase tracking-widest px-6 py-3.5 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Meet The Full Team</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
