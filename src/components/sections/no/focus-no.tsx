import * as React from "react";

const ITEMS = [
  {
    title: "Systemer fremfor verktøy",
    desc: "Automatiseringer, repeterbare arbeidsflyter og praktiske leveransepipelines.",
  },
  {
    title: "Rask iterasjon",
    desc: "Lanser små steg, valider tidlig og forbedre deretter design og brukeropplevelse.",
  },
  {
    title: "Troverdig leveranse",
    desc: "Tydelig struktur, dokumentasjon og kodebaser som er enkle å vedlikeholde.",
  },
];

export function FocusSectionNo() {
  return (
    <section id="focus" className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Fokus
        </h2>

        <p className="mt-6 max-w-3xl text-white/70">
          Det er her arbeidet blir konkret: systemer som reduserer kaos,
          skaper klarhet og tar ideer hele veien til produksjon.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition
                         hover:border-white/20 hover:bg-white/7"
            >
              <div className="text-lg font-semibold text-white">
                {i.title}
              </div>
              <div className="mt-2 text-white/70">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
