import Link from "next/link";

export const metadata = {
  title: "FAQs | AI Product & Web Strategy Questions",
  description: "Frequently asked questions about FutureBrief.",
  alternates: {
    canonical: "https://www.futurebrief.net/faqs",
    languages: {
      "en-US": "https://www.futurebrief.net/faqs",
      "nb-NO": "https://www.futurebrief.net/no/faqs",
      "x-default": "https://www.futurebrief.net/faqs",
    },
  },
};

const faqs = [
  {
    q: "What do you build?",
    a: "Landing pages, prototypes, and practical AI tools.",
  },
  {
    q: "Timeline?",
    a: "Depends on scope - simple pages can be quick, prototypes take longer.",
  },
  {
    q: "Stack?",
    a: "Modern, lightweight web tech - no heavy platforms unless required.",
  },
  {
    q: "Do you do maintenance?",
    a: "Yes, optional monthly support.",
  },
  {
    q: "Can you work with my design?",
    a: "Yes, or I can design from scratch.",
  },
];

export default function FAQsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-28">
      {/* Topbar */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="text-sm font-semibold tracking-wide text-white/90">
          FutureBrief
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
        >
          ← Back
        </Link>
      </div>

      {/* Card */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          FAQs
        </h1>

        <div className="mt-8 space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="space-y-2">
              <h2 className="text-base font-semibold text-white/95">
                {item.q}
              </h2>
              <p className="text-sm leading-relaxed text-white/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
