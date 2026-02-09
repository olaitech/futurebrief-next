"use client";

import ExperimentLayout from "@/components/layout/ExperimentLayout";
import { useEffect, useRef } from "react";

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = canvas.parentElement;
    if (!container) return;

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 14;

    let drops: number[] = [];
    let columns = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));

      const dpr = Math.max(1, window.devicePixelRatio || 1);

      // Set internal resolution (important!)
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      // Map drawing coords to CSS pixels
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.max(1, Math.floor(w / fontSize));
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * (h / fontSize))
      );

      // Clear frame after resize so it doesn't look "stuck"
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);
    };

    const pick = () => chars[Math.floor(Math.random() * chars.length)];

    // Initial resize after layout is ready
    requestAnimationFrame(() => resize());

    // Keep in sync on resize
    const onWindowResize = () => resize();
    window.addEventListener("resize", onWindowResize);

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));

      // Fade previous frame (trail)
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, w, h);

      // Cyan matrix
      ctx.fillStyle = "rgba(0, 242, 255, 0.9)";
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(pick(), x, y);

        if (y > h && Math.random() > 0.975) drops[i] = 0;
        else drops[i] += 1;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60">
      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:linear-gradient(to_bottom,rgba(255,255,255,0.06)_50%,rgba(0,0,0,0.2)_50%)] [background-size:100%_4px]" />

      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Label */}
      <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
        Live loop · Canvas render
      </div>
    </div>
  );
}

export default function MatrixCardPage() {
  return (
    <ExperimentLayout
      title="Matrix Card – Procedural Terminal Interface"
      description="Experimental terminal-style interface using Canvas API, animated rendering loops, and layered visual effects."
    >
      <MatrixRain />
    </ExperimentLayout>
  );
}
