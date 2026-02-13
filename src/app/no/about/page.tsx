export const metadata = {
  title: "Om",
  description:
    "FutureBrief er et bygg-først-prosjekt med fokus på praktiske AI-løsninger, webdesign og tidlige produktkonsepter. Utforsk ideer for virkelige arbeidsflyter.",
};

export default function AboutNoPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-28">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Om FutureBrief
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-white/70">
          FutureBrief er et bygg-først-prosjekt med fokus på praktiske
          AI-løsninger, webdesign og tidlige produktkonsepter.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Målet er å utforske ideer som faktisk kan brukes i virkelige
          arbeidsflyter – ikke hype eller uferdige visjoner.
        </p>
      </section>
    </main>
  );
}
