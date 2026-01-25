import * as React from "react";

const CARDS = [
  {
    title: "Praktiske AI-applikasjoner",
    desc: "AI-løsninger for virkelige behov – anvendbare, testbare og bygget for faktisk bruk.",
  },
  {
    title: "Webdesign som lanseres",
    desc: "Rene landingssider og webapplikasjoner med rask brukeropplevelse, tydelighet og god vedlikeholdbarhet.",
  },
  {
    title: "AI-produktkonsepter",
    desc: "Tidlige ideer, prototyper og plattformer – avgrenset og strukturert som ekte produkter.",
  },
  {
    title: "Nåværende retning",
    desc: "Bygger en mindre portefølje av konsepter og prototyper – markedsplasser, operasjonelle verktøy og fremtidige nytteplattformer.",
  },
];

export function AmbitionsSectionNo() {
  return (
    <section id="ambitions" className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Ambisjoner
        </h2>

        <div className="mt-6 max-w-3xl border-l border-white/15 pl-6 text-white/70">
          Jeg fokuserer på praktiske AI-applikasjoner, gjennomtenkt webdesign og
          tidlige AI-produktkonsepter. Jeg bygger nettsider, webapplikasjoner og
          skreddersydde verktøy utviklet for bruk i den virkelige verden. Målet er
          å gjøre ideer om til klare, anvendelige systemer – ikke demoer eller
          hype.
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl
              transition-colors duration-200
              hover:bg-white/12 hover:border-white/20
              hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            >
              <div className="text-lg font-semibold text-white">
                {c.title}
              </div>
              <div className="mt-2 text-white/70">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
