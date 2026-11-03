"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function HeroReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const lockupRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!mounted || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop choreography (>= 768px): Centered rocket slides left, revealing wordmark horizontally
      mm.add("(min-width: 768px)", () => {
        if (
          !containerRef.current ||
          !lockupRef.current ||
          !revealRef.current ||
          !wordmarkRef.current ||
          !taglineRef.current
        ) {
          return;
        }

        // Calculate dynamic horizontal offset so the rocket is initially DEAD CENTER in viewport
        const calculateShift = () => {
          if (!revealRef.current) return 0;
          const revealWidth = revealRef.current.offsetWidth;
          const gap = window.innerWidth >= 1024 ? 40 : 32;
          return (revealWidth + gap) / 2;
        };

        const initialShift = calculateShift();

        // Initial setup for desktop
        gsap.set(lockupRef.current, {
          x: initialShift,
          y: 0,
        });

        gsap.set(wordmarkRef.current, {
          clipPath: "inset(0% 100% 0% 0%)",
          opacity: 0,
          x: -20,
        });

        gsap.set(taglineRef.current, {
          opacity: 0,
          y: 16,
        });

        if (indicatorRef.current) {
          gsap.set(indicatorRef.current, { opacity: 1, y: 0 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=120%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: () => {
              const updatedShift = calculateShift();
              gsap.set(lockupRef.current, { x: updatedShift });
            },
          },
        });

        // Stage 0: Fade out scroll indicator
        if (indicatorRef.current) {
          tl.to(
            indicatorRef.current,
            {
              opacity: 0,
              y: 14,
              duration: 0.15,
              ease: "power1.out",
            },
            0
          );
        }

        // Stage 1: Rocket moves smoothly from center towards left
        tl.to(
          lockupRef.current,
          {
            x: 0,
            duration: 0.65,
            ease: "power2.inOut",
          },
          0.05
        );

        // Stage 2: Wordmark reveals horizontally from rocket's right with clipping mask
        tl.to(
          wordmarkRef.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          0.18
        );

        // Stage 3: Tagline reveals beneath wordmark
        tl.to(
          taglineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          0.48
        );

        // Stage 4: Settling pause before unpinning
        tl.to({}, { duration: 0.25 });
      });

      // Mobile choreography (< 768px): Vertical stacked reveal
      mm.add("(max-width: 767px)", () => {
        if (
          !containerRef.current ||
          !rocketRef.current ||
          !wordmarkRef.current ||
          !taglineRef.current
        ) {
          return;
        }

        gsap.set(rocketRef.current, { y: 0 });
        gsap.set(wordmarkRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          opacity: 0,
          y: 12,
        });
        gsap.set(taglineRef.current, {
          opacity: 0,
          y: 12,
        });

        if (indicatorRef.current) {
          gsap.set(indicatorRef.current, { opacity: 1, y: 0 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=85%",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        if (indicatorRef.current) {
          tl.to(
            indicatorRef.current,
            {
              opacity: 0,
              y: 10,
              duration: 0.15,
              ease: "power1.out",
            },
            0
          );
        }

        // Rocket shifts up slightly to compose the vertical lockup
        tl.to(
          rocketRef.current,
          {
            y: -18,
            duration: 0.5,
            ease: "power2.inOut",
          },
          0.05
        );

        // Wordmark unmasks from top-down beneath rocket
        tl.to(
          wordmarkRef.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          0.18
        );

        // Tagline reveals beneath wordmark
        tl.to(
          taglineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          0.42
        );

        // Hold settled state
        tl.to({}, { duration: 0.2 });
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [mounted, prefersReducedMotion]);

  const handleAssetLoaded = () => {
    if (typeof window !== "undefined") {
      ScrollTrigger.refresh();
    }
  };

  return (
    <section
      ref={containerRef}
      aria-label="Thapar Venture Club Signature Brand Reveal"
      className="relative w-full h-screen bg-[#000000] overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Subtle radial ambient vignette behind emblem */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(245,237,0,0.04),transparent_70%)]"
      />

      {/* Main Brand Stage */}
      <div
        ref={stageRef}
        className="relative z-10 w-full max-w-7xl px-4 sm:px-8 lg:px-12 flex items-center justify-center"
      >
        {/*
          Lockup Container:
          Desktop: Flex row (Rocket on left, Wordmark + Tagline on right)
          Mobile: Flex col (Rocket on top, Wordmark + Tagline below)
        */}
        <div
          ref={lockupRef}
          className={`flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-6 md:gap-8 lg:gap-10 transition-none ${
            prefersReducedMotion ? "!transform-none" : ""
          }`}
        >
          {/* Rocket Emblem */}
          <div
            ref={rocketRef}
            className="relative flex-shrink-0 w-32 h-32 xs:w-36 xs:h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60"
          >
            <Image
              src="/brand/tvc-rocket-emblem.png"
              alt="Thapar Venture Club Rocket"
              fill
              priority
              sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1200px) 224px, 240px"
              className="object-contain filter drop-shadow-[0_0_24px_rgba(245,237,0,0.12)]"
              onLoad={handleAssetLoaded}
            />
          </div>

          {/* Reveal Wrapper: Wordmark + Tagline */}
          <div
            ref={revealRef}
            className={`flex flex-col items-center md:items-start text-center md:text-left ${
              prefersReducedMotion ? "!opacity-100 !clip-path-none" : ""
            }`}
          >
            {/* Wordmark Container */}
            <div
              ref={wordmarkRef}
              className="relative w-[260px] xs:w-[300px] sm:w-[380px] md:w-[420px] lg:w-[500px] xl:w-[540px] aspect-[930/100] will-change-transform"
            >
              <Image
                src="/brand/tvc-wordmark.png"
                alt="Thapar Venture Club"
                fill
                priority
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 460px, 540px"
                className="object-contain"
                onLoad={handleAssetLoaded}
              />
            </div>

            {/* Tagline Container */}
            <div
              ref={taglineRef}
              className="mt-3 sm:mt-4 md:mt-4 lg:mt-5 flex items-center justify-center md:justify-start gap-2.5 sm:gap-3 will-change-transform"
            >
              <div className="h-[2px] w-4 sm:w-6 bg-[#f5ed00] rounded-full hidden md:block" />
              <p className="font-mono text-[11px] xs:text-xs sm:text-sm lg:text-base font-semibold tracking-[0.24em] xs:tracking-[0.28em] sm:tracking-[0.32em] text-[#f4f3ef] uppercase">
                Ideate <span className="text-[#f5ed00] mx-0.5 sm:mx-1.5">•</span> Ascend{" "}
                <span className="text-[#f5ed00] mx-0.5 sm:mx-1.5">•</span> Lead
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={indicatorRef}
        aria-hidden="true"
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-300"
      >
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#a5a49f]">
          Scroll to explore
        </span>
        <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/20 flex items-start justify-center p-1 sm:p-1.5">
          <div className="w-1 h-2 rounded-full bg-[#f5ed00] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
