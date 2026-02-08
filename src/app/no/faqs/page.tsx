import Link from "next/link";

export const metadata = {
  title: "Ofte stilte spørsmål – FutureBrief",
  description: "Ofte stilte spørsmål om FutureBrief.",
};

const faqs = [
  {
    q: "Hva bygger du?",
    a: "Landingssider, prototyper og praktiske AI-verktøy.",
  },
  {
    q: "Tidslinje?",
    a: "Avhenger av omfang – enkle sider kan gå raskt, prototyper tar lengre tid.",
  },
  {
    q: "Teknologistack?",
    a: "Moderne og lettvekts webteknologi – ingen tunge plattformer med mindre det er nødvendig.",
  },
  {
    q: "Tilbyr du vedlikehold?",
    a: "Ja, valgfri månedlig oppfølging og support.",
  },
  {
    q: "Kan du jobbe med mitt design?",
    a: "Ja, eller jeg kan designe løsningen fra bunnen av.",
  },
];

export default function NorwegianFAQsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-28">
      {/* Topbar */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="text-sm font-semibold tracking-wide text-white/90">
          FutureBrief
        </div>

        <Link
          href="/no"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
        >
          ← Tilbake
        </Link>
      </div>

      {/* Card */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Ofte stilte spørsmål
        </h1>

        <div className="mt-8 space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="space-y-2">
              <h2 className="text-base font-semibold text-white/95">
                {item.q}
              </h2>
              <p className="text-sm leading-relaxed text-white/70">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
