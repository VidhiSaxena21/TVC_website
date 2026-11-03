import { Compass, Rocket, ShieldCheck } from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      step: "01",
      name: "IDEATE",
      title: "Problem Discovery & Early Prototypes",
      description:
        "Guiding students from raw technical insights into verified problem-solution fits through design jams, early-stage hackathons, and structured customer discovery.",
      icon: Compass,
    },
    {
      step: "02",
      name: "ASCEND",
      title: "Venture Sprints & Product Tracks",
      description:
        "Intensive, cohort-driven sprints focused on product engineering, traction metrics, MVP deployment, and pitch readiness under guided timelines.",
      icon: Rocket,
    },
    {
      step: "03",
      name: "LEAD",
      title: "Ecosystem Mentorship & Alumni Access",
      description:
        "Connecting builders with experienced venture operators, angel investors, and Thapar Institute’s distinguished global alumni network.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative bg-[#0b0b0a] text-[#f4f3ef] border-t border-white/[0.08] py-28 sm:py-36 lg:py-44 overflow-hidden"
    >
      {/* Background Subtle Accent Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-[#a5a49f] mb-6 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5ed00]" />
            <span>01 // About The Ecosystem</span>
          </div>
          <h2
            id="about-title"
            className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#f4f3ef] leading-[1.12]"
          >
            The student venture catalyst at Thapar Institute.
          </h2>
        </div>

        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 sm:mb-32">
          {/* Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6 text-[#a5a49f] text-base sm:text-lg leading-relaxed">
              <p className="text-xl sm:text-2xl font-light text-[#f4f3ef] leading-snug">
                Thapar Venture Club (TVC) is the official student-led entrepreneurship collective of
                TIET Patiala.
              </p>
              <p>
                Founded on the premise that student engineers and thinkers are inherently positioned
                to build category-defining ventures, TVC serves as the institutional bridge between
                ambition, execution, and scale.
              </p>
              <p>
                From first-year builders exploring early hypotheses to multi-disciplinary teams
                shipping production systems, we curate an environment of high craft, rigorous
                experimentation, and continuous peer support.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#a5a49f]">
              <span>[ Approved Narrative Draft // TVC 2026 ]</span>
              <span className="text-[#f5ed00]">TIET Patiala</span>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.step}
                  className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-[#f5ed00]/40 rounded-sm p-6 sm:p-8 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#f5ed00] font-semibold tracking-wider">
                        {pillar.step}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#f4f3ef] font-medium">
                        {pillar.name}
                      </span>
                    </div>
                    <Icon className="w-5 h-5 text-[#a5a49f] group-hover:text-[#f5ed00] transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-[#f4f3ef] mb-2.5 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#a5a49f] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Editorial Media & Photography Showcase Frames */}
        <div className="border-t border-white/[0.08] pt-16 sm:pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a5a49f] mb-2">
                Campus In Action
              </p>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#f4f3ef]">
                Spaces built for building.
              </h3>
            </div>
            <p className="text-xs font-mono text-[#a5a49f]">
              [ Official Photography Archive // TBC ]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Architectural Frame 1 */}
            <div className="md:col-span-7 relative aspect-[16/10] bg-[#141413] border border-white/[0.08] rounded-sm p-6 flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none" />
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-white/20">+</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-white/20">+</div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/20">+</div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white/20">+</div>

              <div className="flex items-center justify-between font-mono text-[11px] text-[#a5a49f]">
                <span>FRAME 01 // COHORT SPRINTS</span>
                <span>30°21&apos;N 76°22&apos;E</span>
              </div>

              <div className="my-auto text-center py-8">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-white/10 flex items-center justify-center text-[#f5ed00]">
                  <Rocket className="w-5 h-5 opacity-80" />
                </div>
                <p className="font-mono text-xs text-[#a5a49f] max-w-xs mx-auto">
                  Reserved for official TVC event photography: Sprint workshops, demo days, and
                  founder roundtables.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-[#f4f3ef] font-medium">TIET Main Campus, Patiala</span>
                <span className="font-mono text-[#a5a49f] text-[11px]">Photo Roster TBC</span>
              </div>
            </div>

            {/* Architectural Frame 2 */}
            <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto bg-[#141413] border border-white/[0.08] rounded-sm p-6 flex flex-col justify-between overflow-hidden group">
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-white/20">+</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-white/20">+</div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/20">+</div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white/20">+</div>

              <div className="flex items-center justify-between font-mono text-[11px] text-[#a5a49f]">
                <span>FRAME 02 // KEYNOTES & DIALOGUE</span>
                <span>AUDITORIUM</span>
              </div>

              <div className="my-auto text-center py-6">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full border border-white/10 flex items-center justify-center text-[#f5ed00]">
                  <Compass className="w-4 h-4 opacity-80" />
                </div>
                <p className="font-mono text-xs text-[#a5a49f] max-w-xs mx-auto">
                  Reserved for official guest speaker sessions, institutional stages, and mentor
                  panels.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-[#f4f3ef] font-medium">E-Summit Keynote Stage</span>
                <span className="font-mono text-[#a5a49f] text-[11px]">Photo Roster TBC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
