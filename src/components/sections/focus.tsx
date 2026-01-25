import * as React from "react";

const ITEMS = [
  {
    title: "Systems over tools",
    desc: "Automations, repeatable workflows, and practical delivery pipelines.",
  },
  {
    title: "Fast iteration",
    desc: "Ship small, validate early, then sharpen design and UX.",
  },
  {
    title: "Credible output",
    desc: "Clear structure, documentation, and maintainable codebases.",
  },
];

export function FocusSection() {
  return (
    <section id="focus" className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Focus
        </h2>

        <p className="mt-6 max-w-3xl text-white/70">
          This is where the work gets concrete: systems that reduce chaos,
          improve clarity, and move ideas into production.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition
                         hover:border-white/20 hover:bg-white/7"
            >
              <div className="text-lg font-semibold text-white">{i.title}</div>
              <div className="mt-2 text-white/70">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
