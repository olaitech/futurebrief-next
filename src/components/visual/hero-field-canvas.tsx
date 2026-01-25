"use client";

import { useEffect, useRef } from "react";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HeroFieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let time = 0;

    // Performance: keep DPR at 1
    const dpr = 1;

    const resize = () => {
      const r = host.getBoundingClientRect();
      const w = Math.max(1, Math.floor(r.width * dpr));
      const h = Math.max(1, Math.floor(r.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const draw = () => {
      resize();
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Dark base gradient
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#05070c");
      g.addColorStop(0.6, "#071022");
      g.addColorStop(1, "#04050a");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Subtle glowing lines
      ctx.lineWidth = 1.2;
      const lines = 6;
      const amp = h * 0.03;

      for (let i = 0; i < lines; i++) {
        const y0 = h * (0.25 + 0.5 * (i / (lines - 1)));
        const phase = i * 0.7;

        ctx.beginPath();
        for (let x = 0; x <= w; x += 12) {
          const nx = x / w;
          const y = y0 + Math.sin(nx * 6 + time + phase) * amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(255, 160, 40, ${0.18 + i * 0.04})`;
        ctx.stroke();
      }
    };

    const reduced = prefersReducedMotion();

    // Always paint once
    draw();

    // Animate only if motion allowed
    const loop = () => {
      time += 0.006;
      draw();
      raf = window.requestAnimationFrame(loop);
    };

    if (!reduced) {
      raf = window.requestAnimationFrame(loop);
    }

    const onResize = () => draw();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={hostRef} className="absolute inset-0 z-0">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="h-full w-full"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
