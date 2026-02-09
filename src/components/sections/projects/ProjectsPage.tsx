// src/components/sections/projects/ProjectsPage.tsx
import Link from "next/link";
import { ProjectsHero } from "./ProjectsHero";
import { ProjectShowcase } from "./ProjectShowcase";
import KineticDotsLoader from "@/components/ui/kinetic-dots-loader";

type ProjectsPageProps = {
  lang?: "en" | "no";
};

export function ProjectsPage({ lang = "en" }: ProjectsPageProps) {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <h1 className="sr-only">{lang === "no" ? "Prosjekter" : "Projects"}</h1>

      {/* Hero/header beholdes som før */}
      <ProjectsHero lang={lang} />

      {/* Alt UNDER hero får bakgrunn */}
      <section className="relative">
        {/* Background image (sharp) */}
        <div className="pointer-events-none absolute inset-0 bg-[url('/bg/projects-laptop.jpg')] bg-cover bg-center bg-no-repeat" />

        {/* Dark overlay for contrast (no blur) */}
        <div className="pointer-events-none absolute inset-0 bg-black/55" />

        {/* Optional vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_70%,rgba(0,0,0,0.9)_100%)]" />

        {/* Content above background */}
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 py-4 text-white/70">
            {lang === "no"
              ? "Showcase: utvalgte kundeprosjekter"
              : "Showcase: selected client projects"}
          </div>

          <ProjectShowcase lang={lang} />

          {/* R&D Showcase */}
          <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white">
                {lang === "no" ? "R&D Showcase" : "R&D Showcase"}
              </h2>
              <p className="mt-2 text-sm text-white/60 max-w-2xl">
                {lang === "no"
                  ? "Eksperimentelle UI-konsepter (AI-assistert). Laget for å teste ideer og visuelle systemer – uten å påvirke forsiden."
                  : "Experimental interface explorations (AI-assisted). Built to test ideas and visual systems without affecting the main site."}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/projects/matrix-card"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="text-xs uppercase tracking-widest text-white/50">
                    {lang === "no" ? "Eksperiment" : "Experiment"}
                  </div>
                  <span className="text-sm text-white/50 group-hover:text-white transition">
                    {lang === "no" ? "Åpne →" : "Open →"}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white">
                  Matrix Card
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {lang === "no"
                    ? "Loopende terminal-animasjon med Canvas render + lagdelte effekter."
                    : "Procedural terminal animation using a live Canvas render loop + layered effects."}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    Canvas
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    Loop
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    Scanlines
                  </span>
                </div>
              </Link>

              <Link
                href="/projects/bioluminescent-interface"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="text-xs uppercase tracking-widest text-white/50">
                    {lang === "no" ? "Eksperiment" : "Experiment"}
                  </div>
                  <span className="text-sm text-white/50 group-hover:text-white transition">
                    {lang === "no" ? "Åpne →" : "Open →"}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white">
                  Bioluminescent Interface
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {lang === "no"
                    ? "AI-inspirert glassmorfisme med glow-lag og “fluid” feel."
                    : "AI-inspired glassmorphism with glow layers and a fluid interface feel."}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    Glass
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    Glow
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    Layers
                  </span>
                </div>
              </Link>

              <Link
                href="/projects/generative-glass-system"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="text-xs uppercase tracking-widest text-white/50">
                    {lang === "no" ? "Eksperiment" : "Experiment"}
                  </div>
                  <span className="text-sm text-white/50 group-hover:text-white transition">
                    {lang === "no" ? "Åpne →" : "Open →"}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white">
                  Generative Glass System
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {lang === "no"
                    ? "Komponentdrevet glass UI-system med repeterbare blur- og lys-lag."
                    : "Component-driven glass UI system with repeatable blur + lighting stacks."}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    Components
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    System
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                    UI
                  </span>
                </div>
              </Link>
            </div>
          </section>

          {/* Coming soon / next blocks */}
          <section className="mx-auto max-w-6xl px-6 pb-24 text-center">
  <div className="text-sm text-white/50 animate-soft-pulse">
    {lang === "no" ? "Neste: prosjekt-blokker" : "Next: project blocks"}
  </div>
  <KineticDotsLoader />
</section>

        </div>
      </section>
    </main>
  );
}
