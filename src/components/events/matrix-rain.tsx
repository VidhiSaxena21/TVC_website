"use client";

import { useEffect, useRef } from "react";

const glyphs = "アイウエオカキクケコサシスセソタチツテトナニヌネノ012345789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    let animation = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      columns = Math.ceil(width / 19);
      drops = Array.from({ length: columns }, () => Math.random() * -80);
    };

    const draw = () => {
      context.fillStyle = "rgba(0, 5, 2, 0.075)";
      context.fillRect(0, 0, width, height);
      context.font = "12px monospace";
      for (let i = 0; i < drops.length; i++) {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * 19;
        const y = drops[i] * 19;
        context.fillStyle = Math.random() > 0.975 ? "rgba(220,255,220,0.9)" : "rgba(105,255,125,0.52)";
        context.fillText(char, x, y);
        if (y > height && Math.random() > 0.975) drops[i] = Math.random() * -35;
        drops[i] += reducedMotion ? 0 : 0.55;
      }
      if (!reducedMotion) animation = window.requestAnimationFrame(draw);
    };

    resize();
    context.fillStyle = "#000";
    context.fillRect(0, 0, width, height);
    if (!reducedMotion) animation = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-60" />;
}
