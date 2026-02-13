import ShaderBackground from "@/components/ui/shader-background";
import Link from "next/link";

export function HeroNo() {
  return (
    <section className="relative h-[calc(100vh-73px)] w-full overflow-hidden">
      {/* Background (WebGL shader) */}
      <ShaderBackground
        className="absolute inset-0 z-0"
        respectReducedMotion={false}
      />

      {/* Readability overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6">
        <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
          Konsepter, plattformer og signaler
          <br />
          for det neste tiåret med AI.
        </h1>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-white/90"
          >
            Utforsk prosjekter
          </a>

          <a
            href="#ambitions"
            className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Se ambisjoner
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Link
            href="/no/systemer"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10 block"
          >
            <div className="text-sm font-semibold text-white">
              Klar tenkning
            </div>
            <div className="mt-1 text-sm text-white/70">
              Korte notater, uten hype. Kun nyttig struktur.
            </div>
          </Link>

          <Link
            href="/projects"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10 block"
          >
            <div className="text-sm font-semibold text-white">
              Bygg først
            </div>
            <div className="mt-1 text-sm text-white/70">
              Prototyper, landingssider og proof-of-work.
            </div>
          </Link>

          <Link
            href="/insights"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10 block"
          >
            <div className="text-sm font-semibold text-white">
              Fremtidig nytte
            </div>
            <div className="mt-1 text-sm text-white/70">
              Markedsplasser, energi og systemer i den virkelige verden.
            </div>
          </Link>
        </div>

        <div className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 drop-shadow-[0_0_14px_rgba(124,58,237,0.35)]">
          Kewin Olaisen · Systembygger og samarbeidspartner
        </div>

        <p className="mt-3 text-sm text-white/70 max-w-xl">
          Jeg designer og bygger strategiske,{" "}
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.25)]">
            AI-klare
          </span>{" "}
          systemer – og bidrar i ambisiøse team som bygger skalerbare produkter.
        </p>

      </div>

    </section>
  );
}
