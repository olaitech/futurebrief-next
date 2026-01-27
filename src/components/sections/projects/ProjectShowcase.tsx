"use client";

import { useEffect, useState } from "react";
import { projects as projectData, Project as ProjectData } from "./projects.data";

type Project = ProjectData & { status?: "Live" | "WIP" | "Concept" };

type ProjectShowcaseProps = {
  lang?: "en" | "no";
};

export function ProjectShowcase({ lang = "en" }: ProjectShowcaseProps) {
  const projects: Project[] = projectData;

  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  // ESC for å lukke
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveId(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lås scroll når modal er åpen
  useEffect(() => {
    if (!activeId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeId]);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-28">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveId(p.id)}
            className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-6 text-left backdrop-blur-md transition hover:border-white/20 hover:bg-white/7"
          >
            {/* glow under glass */}
            <div className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 rounded-full bg-violet-500/20" />
              <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-blue-500/15" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium tracking-widest text-white/60">
                  {p.status ?? "Project"}
                </p>
                <span className="text-xs text-white/35 group-hover:text-white/55">
                  {lang === "no" ? "Åpne" : "Open"} →
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {p.title[lang]}
              </h3>

              <p className="mt-2 text-sm text-white/65">{p.desc[lang]}</p>

              {p.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </button>
        ))}
      </div>

      {/* FULLSCREEN EXPAND */}
      {active ? (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          onMouseDown={() => setActiveId(null)}
        >
          <div className="absolute inset-0">
            {/* Underlay glow */}
            <div className="pointer-events-none absolute -inset-40 opacity-80 blur-3xl">
              <div className="absolute left-1/4 top-1/4 h-[520px] w-[520px] rounded-full bg-violet-500/18" />
              <div className="absolute right-1/4 top-1/3 h-[520px] w-[520px] rounded-full bg-blue-500/14" />
            </div>

            {/* Modal container */}
            <div
              className="absolute left-1/2 top-1/2 w-[min(1100px,92vw)] -translate-x-1/2 -translate-y-1/2"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/14 bg-white/6 backdrop-blur-xl shadow-[0_40px_140px_rgba(0,0,0,0.75)]">
                {/* Header */}
                <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="text-xs tracking-widest text-white/55">
                      {active.status ?? (lang === "no" ? "PROSJEKT" : "PROJECT")}
                    </p>
                    <h4 className="mt-1 text-lg font-semibold text-white">
                      {active.title[lang]}
                    </h4>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveId(null)}
                    className="rounded-full border border-white/12 bg-black/30 px-3 py-2 text-sm text-white/75 hover:border-white/20 hover:text-white"
                  >
                    {lang === "no" ? "Lukk" : "Close"}
                  </button>
                </div>

                {/* Body */}
                <div className="p-4 sm:p-6">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    {/* Hvis url finnes: iframe. Hvis ikke: image */}
                    {active.url ? (
                      <iframe
                        src={active.url}
                        className="h-[70vh] w-full"
                        loading="lazy"
                      />
                    ) : active.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={active.image}
                        alt=""
                        className="h-[70vh] w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-[60vh] items-center justify-center text-white/60">
                        {lang === "no"
                          ? "Ingen preview satt ennå."
                          : "No preview set yet."}
                      </div>
                    )}
                  </div>

                  <p className="mt-4 text-sm text-white/65">
                    {active.desc[lang]}
                  </p>

                  <p className="mt-2 text-xs text-white/40">
                    {lang === "no"
                      ? "Tips: Hvis en ekstern side ikke vises i preview, kan det være fordi den blokkerer iframe (X-Frame-Options). Da bruker vi screenshot eller en lokal demo-route."
                      : "Tip: If an external site doesn’t render, it may block iframes (X-Frame-Options). We’ll use a screenshot or a local demo route instead."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
