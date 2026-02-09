import Link from "next/link";

type ArticleCTAProps = {
  lang?: "en" | "no";
  title?: string;
  body?: string;
};

export function ArticleCTA({
  lang = "en",
  title,
  body,
}: ArticleCTAProps) {
  const t = {
    en: {
      title: title ?? "Want a prototype scope in 24 hours?",
      body:
        body ??
        "Send a short description of your idea, and I’ll suggest a practical build plan, stack, and a realistic MVP scope.",
      primary: "Contact",
      secondary: "View Projects",
      primaryHref: "/#contact",
      secondaryHref: "/projects",
    },
    no: {
      title: title ?? "Vil du ha en prototype-scope innen 24 timer?",
      body:
        body ??
        "Send en kort beskrivelse av ideen din, så foreslår jeg en praktisk plan, stack og realistisk MVP-scope.",
      primary: "Kontakt",
      secondary: "Se prosjekter",
      primaryHref: "/no#contact",
      secondaryHref: "/no/projects",
    },
  }[lang];

  return (
    <section className="mt-10">
      <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl">
        {/* subtle under-glow */}
        <div className="pointer-events-none absolute -inset-24 opacity-60 blur-3xl">
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-400/10" />
          <div className="absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-400/10" />
        </div>

        <div className="relative">
          <h3 className="text-lg font-semibold text-white">{t.title}</h3>
          <p className="mt-2 max-w-2xl text-sm text-white/65">{t.body}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={t.primaryHref}
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/10 px-5 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/15 hover:text-white"
            >
              {t.primary} →
            </Link>

            <Link
              href={t.secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-black/20 px-5 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
