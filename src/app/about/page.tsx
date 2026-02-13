export const metadata = {
  title: "About",
  description: "FutureBrief is a build-first portfolio focusing on practical AI concepts, prototypes, and scalable digital systems for real-world workflows.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-28">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          About
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          FutureBrief is a build-first portfolio: concepts, prototypes, and practical
          AI tooling ideas focused on real workflows — not hype.
        </p>
      </section>
    </main>
  );
}
