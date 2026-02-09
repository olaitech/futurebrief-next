// src/app/projects/bioluminescent-interface/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bioluminescent Interface · R&D Showcase | FutureBrief",
  description:
    "AI-inspired glassmorphism with glow layers and a fluid interface feel. An R&D showcase experiment built to explore visual systems without affecting the main site.",
  openGraph: {
    title: "Bioluminescent Interface · R&D Showcase",
    description:
      "AI-inspired glassmorphism with glow layers and a fluid interface feel.",
    type: "article",
    url: "https://www.futurebrief.net/projects/bioluminescent-interface",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bioluminescent Interface · R&D Showcase",
    description:
      "AI-inspired glassmorphism with glow layers and a fluid interface feel.",
  },
};

const tags = ["Glass", "Glow", "Layers", "UI", "Experiment"];

const bullets = [
  {
    title: "Goal",
    text: "Explore a bioluminescent, glass-driven UI language with soft depth, readable contrast, and subtle motion cues.",
  },
  {
    title: "Focus areas",
    text: "Layered glow stacks, edge highlights, controlled blur, and a dark-first palette with neon accents.",
  },
  {
    title: "Constraints",
    text: "No heavy dependencies; keep it drop-in friendly for Next.js + Tailwind and safe for production builds.",
  },
];

const buildNotes = [
  "Use multiple translucent layers instead of one strong blur—better depth control.",
  "Prefer subtle inner highlights (border/overlay) over big outer shadows to avoid muddy UI.",
  "Keep text contrast high; glow is decoration, not the primary affordance.",
  "Treat glow as an “aura” behind cards, not as a shadow attached to the card itself.",
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_35%,rgba(56,189,248,0.12),rgba(0,0,0,0)_55%),radial-gradient(900px_600px_at_20%_60%,rgba(168,85,247,0.10),rgba(0,0,0,0)_60%),radial-gradient(900px_600px_at_80%_65%,rgba(34,197,94,0.08),rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(700px 480px at 50% 28%, rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage:
              "radial-gradient(700px 480px at 50% 28%, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-10">
        {/* Top bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
              R&amp;D Showcase
            </span>
            <span className="text-xs text-white/50">
              FutureBrief · Experiments
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              ← Back to projects
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              Home
            </Link>
          </div>
        </div>

        {/* Hero */}
        <header className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Bioluminescent Interface
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              AI-inspired glassmorphism with glow layers and a fluid interface
              feel. Built to test visual systems without touching the main site.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
              >
                Browse more experiments
              </Link>

              <a
                href="#components"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white/12 to-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:from-white/15 hover:to-white/8"
              >
                What’s inside ↓
              </a>
            </div>
          </div>

          {/* Preview card */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(closest-side_at_30%_30%,rgba(56,189,248,0.18),rgba(0,0,0,0)),radial-gradient(closest-side_at_70%_70%,rgba(168,85,247,0.16),rgba(0,0,0,0)),radial-gradient(closest-side_at_55%_15%,rgba(34,197,94,0.10),rgba(0,0,0,0))] blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-white/85">
                  Live-style preview
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-white/25" />
                  <span className="h-2 w-2 rounded-full bg-white/18" />
                  <span className="h-2 w-2 rounded-full bg-white/12" />
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.10] to-white/[0.04] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold tracking-tight">
                      Glass Stack Card
                    </div>
                    <div className="mt-1 text-sm text-white/65">
                      Layered highlights + controlled blur + glow aura.
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Prototype
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <div className="text-xs uppercase tracking-wider text-white/50">
                      Glow
                    </div>
                    <div className="mt-1 text-sm text-white/75">
                      Cyan/purple aura behind surfaces
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <div className="text-xs uppercase tracking-wider text-white/50">
                      Depth
                    </div>
                    <div className="mt-1 text-sm text-white/75">
                      Inner highlights instead of heavy shadows
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="h-px w-full bg-white/10" />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Overlay", "Edge light", "Noise (optional)"].map((x) => (
                      <span
                        key={x}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-white/50">
                This page is a showcase description (not the full interactive
                demo) — designed to document intent, components, and learnings.
              </p>
            </div>
          </div>
        </header>

        {/* Sections */}
        <section className="mt-14 grid gap-6 lg:grid-cols-3">
          {bullets.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
            >
              <div className="text-xs uppercase tracking-wider text-white/50">
                {b.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {b.text}
              </p>
            </div>
          ))}
        </section>

        <section
          id="components"
          className="mt-14 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:p-8"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                What’s inside
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/65">
                A typical “bioluminescent UI” stack is mostly composition: subtle
                overlays, borders, and aura layers tuned for readability.
              </p>
            </div>
            <span className="text-xs text-white/45">
              Future-friendly, component-first
            </span>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="text-sm font-medium text-white/85">
                Glass surface primitives
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                <li>• Base surface: translucent background + blur</li>
                <li>• Edge light: thin border + inner highlight overlay</li>
                <li>• Depth: stacked layers rather than stronger blur</li>
                <li>• Contrast guardrails: text stays readable on all states</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="text-sm font-medium text-white/85">
                Glow + atmosphere
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                <li>• Aura: soft radial gradients behind cards</li>
                <li>• Color discipline: small palette, big restraint</li>
                <li>• Motion optional: hover lift, faint shimmer, no chaos</li>
                <li>• Noise optional: very subtle grain for anti-banding</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-5">
            <div className="text-sm font-medium text-white/85">Build notes</div>
            <ul className="mt-3 grid gap-2 text-sm text-white/65 md:grid-cols-2">
              {buildNotes.map((n) => (
                <li key={n} className="leading-relaxed">
                  • {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-white/60">
              Want this to become a fully interactive demo page later? Add your
              real components here and keep this doc section as the project
              narrative.
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/projects/generative-glass-system"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                Next: Glass system →
              </Link>
              <Link
                href="/projects/matrix-card"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                Matrix card →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="text-xs text-white/45">
            © {new Date().getFullYear()} FutureBrief · R&amp;D Showcase
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="text-xs text-white/60 transition hover:text-white/80"
            >
              Contact
            </Link>
            <span className="text-white/20">•</span>
            <Link
              href="/projects"
              className="text-xs text-white/60 transition hover:text-white/80"
            >
              Projects
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
