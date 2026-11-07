"use client";

import { useEffect, useRef, useState } from "react";

const frames = [
  { src: "/images/team/tvc-team-01.png", alt: "TVC team gathered at E-Summit 2026" },
  { src: "/images/team/tvc-team-02.png", alt: "TVC members sharing a candid moment" },
  { src: "/images/team/tvc-team-03.png", alt: "The TVC team together in an auditorium" },
  { src: "/images/team/tvc-team-04.png", alt: "TVC members at a team gathering" },
  { src: "/images/team/tvc-team-05.jpeg", alt: "TVC team at an outdoor event" },
  { src: "/images/team/tvc-team-06.png", alt: "A smaller TVC team group photograph" },
  { src: "/images/team/tvc-team-07.png", alt: "TVC members at an event" },
];

export function TeamPhotoSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frameRequest = 0;
    const update = () => {
      cancelAnimationFrame(frameRequest);
      frameRequest = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrollableDistance = section.offsetHeight - window.innerHeight;
        const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, scrollableDistance)));
        const nextFrame = Math.min(frames.length - 1, Math.floor(progress * frames.length));
        setActiveFrame(nextFrame);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frameRequest);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="A glimpse of the TVC team"
      className="relative h-[420vh] bg-black sm:h-[460vh]"
    >
      <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden bg-[#050505]">
        {frames.map((frame, index) => {
          const distance = Math.abs(activeFrame - index);
          const opacity = distance === 0 ? 0.62 : distance === 1 ? 0.08 : 0;
          return (
            <img
              key={frame.src}
              src={frame.src}
              alt={frame.alt}
              loading="eager"
              decoding="async"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ease-out"
              style={{ opacity }}
            />
          );
        })}

        <div aria-hidden="true" className="absolute inset-0 bg-black/[0.28]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/85" />
        <div className="absolute inset-0 flex flex-col justify-between px-6 pb-9 pt-36 sm:px-10 sm:pb-12 sm:pt-40 lg:px-16">
          <div className="max-w-4xl">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-[#f5ed00]/80">
              Thapar Venture Club · The people behind it
            </p>
            <h1 className="max-w-3xl text-5xl font-medium leading-[0.94] tracking-[-0.065em] text-[#f4f3ef] sm:text-7xl lg:text-[96px]">
              More than a club.
              <br />
              <span className="text-white/55">A community.</span>
            </h1>
          </div>

          <div className="flex items-end justify-between gap-6">
            <p className="max-w-sm text-sm leading-relaxed text-white/65 sm:text-base">
              The people, moments and shared ambition that make TVC what it is.
            </p>
            <div className="shrink-0 text-right">
              <p className="font-mono text-xs tabular-nums text-white/75">
                {String(activeFrame + 1).padStart(2, "0")} <span className="text-white/30">/</span> {String(frames.length).padStart(2, "0")}
              </p>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">Scroll to explore</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-px w-full bg-white/15">
          <div
            className="h-full bg-[#f5ed00] transition-[width] duration-200"
            style={{ width: `${((activeFrame + 1) / frames.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
