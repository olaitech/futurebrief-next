import Link from "next/link";
import { ArticleCTA } from "./ArticleCTA";

type ArticleLayoutProps = {
  lang?: "en" | "no";
  title: string;
  description?: string;
  date?: string;
  readingTime?: string;
  children: React.ReactNode;
};

export function ArticleLayout({
  lang = "en",
  title,
  description,
  date,
  readingTime,
  children,
}: ArticleLayoutProps) {
  const backHref = lang === "no" ? "/no/innsikt" : "/insights";
  const backLabel = lang === "no" ? "Tilbake til Insights" : "Back to Insights";

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,136,0.10)_0%,rgba(0,0,0,0)_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,120,255,0.08)_0%,rgba(0,0,0,0)_60%)]" />

      <article className="relative mx-auto max-w-3xl px-6 pb-24 pt-28">
        <div className="mb-8">
          <Link
            href={backHref}
            className="inline-flex items-center text-sm font-semibold text-white/70 transition hover:text-white"
          >
            ← {backLabel}
          </Link>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>

          {description ? (
            <p className="mt-3 text-sm text-white/65">{description}</p>
          ) : null}

          {(date || readingTime) && (
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/45">
              {date ? <span>{date}</span> : null}
              {readingTime ? <span>• {readingTime}</span> : null}
            </div>
          )}
        </div>

        <div className="prose prose-invert max-w-none prose-p:text-white/75 prose-li:text-white/75 prose-strong:text-white prose-headings:text-white">
          {children}
        </div>

        <ArticleCTA lang={lang} />
      </article>
    </main>
  );
}
