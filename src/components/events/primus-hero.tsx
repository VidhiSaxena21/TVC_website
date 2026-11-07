"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { MatrixRain } from "@/components/events/matrix-rain";

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const range = (value: number, start: number, end: number) =>
  clamp((value - start) / (end - start));

export function PrimusHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const distance = Math.max(1, section.offsetHeight - window.innerHeight);
        setProgress(clamp(-rect.top / distance));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // A short build-up, a deliberate title hold, then release directly into the next section.
  const codeReveal = range(progress, 0.015, 0.18);
  const titleReveal = range(progress, 0.12, 0.34);
  const detailsReveal = range(progress, 0.30, 0.46);

  return (
    <section ref={sectionRef} aria-label="PRIMUS 2026 introduction" className="relative h-[190vh] bg-black">
      <div className="sticky top-0 flex h-[100svh] min-h-[600px] items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0" style={{ opacity: codeReveal * 0.98 }}>
          <MatrixRain />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,75,20,0.38),transparent_58%),linear-gradient(to_bottom,rgba(0,0,0,0.04),rgba(0,0,0,0.55))]" style={{ opacity: codeReveal }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(105,255,125,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(105,255,125,0.075)_1px,transparent_1px)] bg-[size:54px_54px]" style={{ opacity: codeReveal * 0.58 }} />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[min(65vw,620px)] w-[min(65vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#45ff58]/10 blur-[100px]" style={{ opacity: titleReveal * 0.85 }} />

        <div className="relative z-10 flex w-full flex-col items-center px-4 text-center">
          <p
            className="mb-8 font-mono text-[9px] uppercase tracking-[0.42em] text-[#a3ff12] sm:text-[10px]"
            style={{
              opacity: titleReveal,
              transform: `translateY(${(1 - titleReveal) * 20}px)`,
            }}
          >
            TVC × SAT <span className="mx-2 text-white/25">//</span> THE MATRIX CHALLENGE
          </p>

          <h1
            className="whitespace-nowrap text-[clamp(3.1rem,13.5vw,12rem)] font-black leading-[0.8] tracking-[-0.095em] text-[#edffe8]"
            style={{
              opacity: titleReveal,
              transform: `perspective(900px) translateY(${(1 - titleReveal) * 38}px) scale(${0.58 + titleReveal * 0.42}) rotateX(${(1 - titleReveal) * -10}deg)`,
              transformOrigin: "center center",
              textShadow: "0 0 18px rgba(163,255,18,0.22), 0 0 70px rgba(63,255,87,0.2)",
              filter: `blur(${(1 - titleReveal) * 12}px)`,
            }}
          >
            PRIMUS<span className="text-[#a3ff12]">’26</span>
          </h1>

          <div className="mt-7 h-px w-24 bg-gradient-to-r from-transparent via-[#a3ff12] to-transparent" style={{ opacity: detailsReveal }} />
          <p
            className="mt-6 font-mono text-[clamp(0.62rem,1.5vw,0.95rem)] uppercase tracking-[0.19em] text-[#d1ffcb] sm:tracking-[0.28em]"
            style={{
              opacity: detailsReveal,
              transform: `translateY(${(1 - detailsReveal) * 14}px)`,
            }}
          >
            Where every decision connects.
          </p>

          <div
            className="mt-9 flex flex-wrap justify-center gap-3"
            style={{
              opacity: detailsReveal,
              transform: `translateY(${(1 - detailsReveal) * 12}px)`,
            }}
          >
            <a href="#tracks" className="group inline-flex items-center gap-3 bg-[#a3ff12] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black transition-all hover:-translate-y-1 hover:bg-[#c2ff70]">
              Enter the arena <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="https://www.saturnalia.in/events/business" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-[#a3ff12]/55 bg-black/60 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/85 transition-colors hover:border-[#a3ff12] hover:text-[#a3ff12]">
              Register now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-white/45" style={{ opacity: 1 - detailsReveal * 0.75 }}>
          <span>{progress < 0.12 ? "Scroll to enter" : "The system is yours"}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>

        <div className="absolute bottom-0 left-0 z-20 h-px w-full bg-white/10">
          <div className="h-full bg-[#a3ff12] shadow-[0_0_12px_rgba(163,255,18,0.8)]" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
    </section>
  );
}
