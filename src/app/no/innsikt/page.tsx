import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Innsikt",
  description:
    "Praktiske tekster om prototyper, validering og AI-klare webopplevelser.",
  alternates: {
    canonical: "https://www.futurebrief.net/no/innsikt",
    languages: {
      "en-US": "https://www.futurebrief.net/insights",
      "nb-NO": "https://www.futurebrief.net/no/innsikt",
      "x-default": "https://www.futurebrief.net/insights",
    },
  },
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,136,0.10)_0%,rgba(0,0,0,0)_55%)]" />

      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-28">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Innsikt
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/65">
          Praktiske tekster om prototyper, validering og bygging av AI-klare webopplevelser.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/no/innsikt/ai-landingsside-som-konverterer"
            className="group rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
          >
            <div className="text-xs tracking-widest text-white/45">GUIDE</div>
            <h2 className="mt-3 text-xl font-semibold text-white">
              AI-landingsside som konverterer
            </h2>
            <p className="mt-2 text-sm text-white/65">
              En struktur du kan shippe raskt: klarhet, bevis og én tydelig konverteringssti.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/70 group-hover:text-white">
              Les →
            </div>
          </Link>
          <Link
            href="/no/innsikt/slutt-a-bygge-sider-begynn-a-bygge-systemer"
            className="group rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
          >
            <div className="text-xs tracking-widest text-white/45">GUIDE</div>
            <h2 className="mt-3 text-xl font-semibold text-white">
              Slutt å bygge sider. Begynn å bygge systemer
            </h2>
            <p className="mt-2 text-sm text-white/65">
              Hvorfor bedrifter bør tenke i systemer, ikke enkeltsider, for å få synlighet, flyt og konvertering.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/70 group-hover:text-white">
              Les →
            </div>
          </Link>
          <Link
            href="/no/innsikt/hva-gjor-at-en-ai-landingsside-konverterer"
            className="group rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
          >
            <div className="text-xs tracking-widest text-white/45">GUIDE</div>
            <h2 className="mt-3 text-xl font-semibold text-white">
              Hva gjør at en AI-landingsside konverterer
            </h2>
            <p className="mt-2 text-sm text-white/65">
              Klarhet, struktur, bevis og én tydelig konverteringssti for AI-produkter.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/70 group-hover:text-white">
              Les →
            </div>
          </Link>
          <Link
            href="/no/innsikt/hvorfor-de-fleste-ai-startups-bygger-feil-nettside"
            className="group rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
          >
            <div className="text-xs tracking-widest text-white/45">GUIDE</div>
            <h2 className="mt-3 text-xl font-semibold text-white">
              Hvorfor de fleste AI-startups bygger feil nettside
            </h2>
            <p className="mt-2 text-sm text-white/65">
              Vanlige strukturelle og strategiske feil AI-startups gjør på nettsiden sin.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/70 group-hover:text-white">
              Les →
            </div>
          </Link>
          <Link
            href="/no/innsikt/fra-prototype-til-produkt-nettstedsstrategi-for-ai-gründere"
            className="group rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
          >
            <div className="text-xs tracking-widest text-white/45">GUIDE</div>
            <h2 className="mt-3 text-xl font-semibold text-white">
              Fra prototype til produkt: Nettstedsstrategi for AI-gründere
            </h2>
            <p className="mt-2 text-sm text-white/65">
              En praktisk strategi for AI-gründere som går fra prototype til produkt og trenger en nettside som støtter vekst.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/70 group-hover:text-white">
              Les →
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
