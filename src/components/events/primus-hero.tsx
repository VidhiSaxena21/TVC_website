"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { MatrixRain } from "@/components/events/matrix-rain";

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
        const value = Math.min(1, Math.max(0, -rect.top / distance));
        setProgress(value);
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

  const reveal = Math.min(1, Math.max(0, progress / 0.32));
  const titleOpacity = Math.min(1, Math.max(0, (reveal - 0.08) / 0.72));
  const detailsOpacity = Math.min(1, Math.max(0, (reveal - 0.68) / 0.32));

  return (
    <section ref={sectionRef} aria-label="PRIMUS 2026 introduction" className="relative h-[190vh] bg-black">
      <div className="sticky top-0 flex h-[100svh] min-h-[600px] items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 transition-opacity duration-200" style={{ opacity: 0.9 * reveal }}>
          <MatrixRain />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,35,10,0.28),transparent_58%),linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.58))]" style={{ opacity: reveal }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(105,255,125,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(105,255,125,0.055)_1px,transparent_1px)] bg-[size:64px_64px]" style={{ opacity: reveal * 0.45 }} />

        <div className="relative z-10 flex w-full flex-col items-center px-5 text-center">
          <p className="mb-7 font-mono text-[9px] uppercase tracking-[0.35em] text-[#a3ff12]" style={{ opacity: titleOpacity, transform: `translateY(${(1 - titleOpacity) * 16}px)` }}>
            TVC × SAT · THE MATRIX CHALLENGE
          </p>
          <h1
            className="whitespace-nowrap text-[clamp(3.3rem,13.5vw,12rem)] font-black leading-[0.82] tracking-[-0.09em] text-[#edffe8]"
            style={{
              opacity: titleOpacity,
              transform: `scale(${0.72 + titleOpacity * 0.28}) translateY(${(1 - titleOpacity) * 26}px)`,
              textShadow: "0 0 42px rgba(163,255,18,0.22)",
              filter: `blur(${(1 - titleOpacity) * 9}px)`,
            }}
          >
            PRIMUS<span className="text-[#a3ff12]">’26</span>
          </h1>
          <p className="mt-7 font-mono text-[clamp(0.65rem,1.5vw,1rem)] uppercase tracking-[0.2em] text-[#baffad]" style={{ opacity: detailsOpacity, transform: `translateY(${(1 - detailsOpacity) * 12}px)` }}>
            Where every decision connects.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 transition-opacity duration-300" style={{ opacity: detailsOpacity }}>
            <a href="#tracks" className="group inline-flex items-center gap-3 bg-[#a3ff12] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black transition-all hover:-translate-y-1 hover:bg-[#c2ff70]">
              Enter the arena <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="https://www.saturnalia.in/events/business" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-[#a3ff12]/45 bg-black/50 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-[#a3ff12] hover:text-[#a3ff12]">
              Register now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-white/40" style={{ opacity: 1 - detailsOpacity * 0.7 }}>
          <span>{progress < 0.32 ? "Scroll to enter" : "The system is yours"}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
        <div className="absolute bottom-0 left-0 z-20 h-px w-full bg-white/10">
          <div className="h-full bg-[#a3ff12] transition-[width] duration-100" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
    </section>
  );
}
