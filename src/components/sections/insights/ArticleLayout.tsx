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

        <div className="max-w-none text-white/75 text-[17px] leading-[1.75] [&>p]:mb-6 [&>h2]:text-white [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-12 [&>h2]:mb-5 [&>h2]:tracking-tight [&>h3]:text-white [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:tracking-tight [&>ul]:my-6 [&>ul]:space-y-2 [&>ul>li]:text-white/75 [&>ul>li]:leading-relaxed [&>ul>li]:text-[17px] [&>ol]:my-6 [&>ol]:space-y-2 [&>ol>li]:text-white/75 [&>ol>li]:leading-relaxed [&>ol>li]:text-[17px] [&>strong]:text-white [&>strong]:font-semibold [&>blockquote]:border-l-2 [&>blockquote]:border-white/20 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-white/60 [&>blockquote]:my-8 [&>code]:text-cyan-300 [&>code]:bg-white/5 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono [&>pre]:bg-white/5 [&>pre]:border [&>pre]:border-white/10 [&>pre]:rounded-xl [&>pre]:p-4 [&>pre]:overflow-x-auto [&>pre]:my-6 [&>pre>code]:bg-transparent [&>pre>code]:p-0 [&>a]:text-cyan-400 [&>a]:underline [&>a]:decoration-cyan-400/30 [&>a]:underline-offset-2 hover:[&>a]:decoration-cyan-400">
          {children}
        </div>

        <ArticleCTA lang={lang} />
      </article>
    </main>
  );
}
