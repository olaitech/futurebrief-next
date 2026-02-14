import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | AI Web Strategy",
  description:
    "Practical notes, guides, and lessons learned from building AI-enabled products, scalable prototypes, and high-converting web experiences.",
  alternates: {
    canonical: "https://www.futurebrief.net/insights",
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
          Insights
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/65">
          Practical notes on prototypes, validation, and building clean AI-ready web experiences.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/insights/ai-landing-page-that-converts"
            className="group rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
          >
            <div className="text-xs tracking-widest text-white/45">GUIDE</div>
            <h2 className="mt-3 text-xl font-semibold text-white">
              AI landing pages that convert
            </h2>
            <p className="mt-2 text-sm text-white/65">
              A practical structure you can ship fast: clarity, proof, and a single conversion path.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/70 group-hover:text-white">
              Read →
            </div>
          </Link>
          <Link
            href="/insights/stop-building-pages-start-building-systems"
            className="group rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
          >
            <div className="text-xs tracking-widest text-white/45">GUIDE</div>
            <h2 className="mt-3 text-xl font-semibold text-white">
              Stop Building Pages. Start Building Systems.
            </h2>
            <p className="mt-2 text-sm text-white/65">
              Most business owners think they need a website. What they actually need is a system.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/70 group-hover:text-white">
              Read →
            </div>
          </Link>
          <Link
            href="/insights/what-makes-an-ai-landing-page-convert"
            className="group rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
          >
            <div className="text-xs tracking-widest text-white/45">GUIDE</div>
            <h2 className="mt-3 text-xl font-semibold text-white">
              What Makes an AI Landing Page Convert
            </h2>
            <p className="mt-2 text-sm text-white/65">
              Clarity, structure, proof and one clear conversion path for AI products.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/70 group-hover:text-white">
              Read →
            </div>
          </Link>
          <Link
            href="/insights/why-most-ai-startups-build-the-wrong-website"
            className="group rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
          >
            <div className="text-xs tracking-widest text-white/45">GUIDE</div>
            <h2 className="mt-3 text-xl font-semibold text-white">
              Why Most AI Startups Build the Wrong Website
            </h2>
            <p className="mt-2 text-sm text-white/65">
              Common structural and messaging mistakes AI startups make — and how to fix them.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/70 group-hover:text-white">
              Read →
            </div>
          </Link>
          <Link
            href="/insights/from-prototype-to-product-website-strategy-for-ai-founders"
            className="group rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
          >
            <div className="text-xs tracking-widest text-white/45">GUIDE</div>
            <h2 className="mt-3 text-xl font-semibold text-white">
              From Prototype to Product: Website Strategy for AI Founders
            </h2>
            <p className="mt-2 text-sm text-white/65">
              A practical framework for AI founders moving from prototype to product and needing a website that supports growth.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/70 group-hover:text-white">
              Read →
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
