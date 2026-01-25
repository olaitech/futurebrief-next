import * as React from "react";

const CARDS = [
  {
    title: "Practical AI applications",
    desc: "Real-world AI use cases – applied, testable, and built to be used.",
  },
  {
    title: "Web design that ships",
    desc: "Clean landing pages and web apps with fast UX, clarity, and maintainability.",
  },
  {
    title: "AI product concepts",
    desc: "Early-stage ideas, prototypes, and platforms – scoped like real products.",
  },
  {
    title: "Current direction",
    desc: "Building a small portfolio of concepts and prototypes – marketplaces, operations tooling, and future utilities.",
  },
];

export function AmbitionsSection() {
  return (
    <section id="ambitions" className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Ambitions
        </h2>

        <div className="mt-6 max-w-3xl border-l border-white/15 pl-6 text-white/70">
          I focus on practical AI applications, thoughtful web design, and
          early-stage AI product concepts, building websites, web applications,
          and custom tools designed for real-world use. The goal is to turn ideas
          into clear, usable systems – not demos or hype.
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
              <div className="text-lg font-semibold text-white">{c.title}</div>
              <div className="mt-2 text-white/70">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}