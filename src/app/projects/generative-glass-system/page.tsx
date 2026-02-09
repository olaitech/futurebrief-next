"use client";

import ExperimentLayout from "@/components/layout/ExperimentLayout";
import { CSSProperties, useEffect, useRef } from "react";

interface CustomCSSProperties extends CSSProperties {
  "--a-x"?: string;
  "--a-y"?: string;
  "--b-x"?: string;
  "--b-y"?: string;
  "--c-x"?: string;
  "--c-y"?: string;
}

function GenerativeGlassDemo() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const t0Ref = useRef<number>(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    t0Ref.current = performance.now();

    const tick = () => {
      const t = (performance.now() - t0Ref.current) / 1000;

      // Orb A
      const ax = 50 + Math.sin(t * 0.55) * 28;
      const ay = 35 + Math.cos(t * 0.65) * 18;

      // Orb B
      const bx = 55 + Math.sin(t * 0.35 + 1.2) * 34;
      const by = 60 + Math.cos(t * 0.45 + 0.6) * 22;

      // Orb C
      const cx = 40 + Math.sin(t * 0.75 + 2.1) * 22;
      const cy = 55 + Math.cos(t * 0.55 + 1.4) * 26;

      el.style.setProperty("--a-x", `${ax}%`);
      el.style.setProperty("--a-y", `${ay}%`);
      el.style.setProperty("--b-x", `${bx}%`);
      el.style.setProperty("--b-y", `${by}%`);
      el.style.setProperty("--c-x", `${cx}%`);
      el.style.setProperty("--c-y", `${cy}%`);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/60"
      style={
        {
          // Default positions before JS kicks in
          "--a-x": "55%",
          "--a-y": "30%",
          "--b-x": "60%",
          "--b-y": "60%",
          "--c-x": "35%",
          "--c-y": "55%",
        } as CustomCSSProperties
      }
    >
      {/* Height wrapper */}
      <div className="relative h-[520px] w-full">
        {/* Generative lighting layer */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(600px circle at var(--a-x) var(--a-y), rgba(0,242,255,0.22), transparent 55%),
              radial-gradient(520px circle at var(--b-x) var(--b-y), rgba(120,0,255,0.18), transparent 58%),
              radial-gradient(420px circle at var(--c-x) var(--c-y), rgba(255,255,255,0.08), transparent 60%)
            `,
            filter: "blur(6px)",
          }}
        />

        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:48px_48px]" />

        {/* Scanlines */}
        <div className="pointer-events-none absolute inset-0 opacity-15 [background:linear-gradient(to_bottom,rgba(255,255,255,0.06)_50%,rgba(0,0,0,0.22)_50%)] [background-size:100%_4px]" />

        {/* Grain */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10">
          {/* Top bar */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-white/55">
                Generative system
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                Glass components · Lighting layers · Blur stacks
              </div>
              <div className="mt-2 max-w-2xl text-sm text-white/60">
                A reusable glass UI pattern with dynamic light sources driven by
                CSS variables. Designed for controlled “R&D showcase” visuals
                without polluting core pages.
              </div>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              Live lighting · CSS vars
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            <GlassCard
              title="Card Shell"
              desc="Border + blur + shadow recipe. Tuned for readability on dark backdrops."
              pills={["Border", "Blur", "Contrast"]}
            />
            <GlassCard
              title="Layer Stack"
              desc="Background lights, grid, scanlines and grain composed in a stable order."
              pills={["Layers", "Order", "Overlay"]}
            />
            <GlassCard
              title="System Tokens"
              desc="A small token set controls intensity and spacing—easy to reuse across pages."
              pills={["Tokens", "Scale", "Reuse"]}
            />
          </div>

          {/* Bottom hint */}
          <div className="text-center text-xs text-white/45">
            Tip: keep experiments isolated to /projects to protect performance and
            conversion paths.
          </div>
        </div>
      </div>
    </div>
  );
}

function GlassCard({
  title,
  desc,
  pills,
}: {
  title: string;
  desc: string;
  pills: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
      {/* Inner glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px] opacity-0 transition group-hover:opacity-100" />

      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-white/60">{desc}</div>

      <div className="mt-4 flex flex-wrap gap-2">
        {pills.map((p) => (
          <span
            key={p}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function GenerativeGlassSystemPage() {
  return (
    <ExperimentLayout
      title="Generative Glass System"
      description="Component-driven glass UI architecture with repeatable lighting + blur stacks. Built as an isolated R&D demo under /projects."
    >
      <GenerativeGlassDemo />
    </ExperimentLayout>
  );
}
