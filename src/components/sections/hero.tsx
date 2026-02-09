import ShaderBackground from "@/components/ui/shader-background";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-73px)] w-full overflow-hidden">
      {/* Background (WebGL shader) */}
      <ShaderBackground className="absolute inset-0 z-0" respectReducedMotion={false} />

      {/* Readability overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6">
        <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
          Concepts, platforms, and signals
          <br />
          for the next decade of AI.
        </h1>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-white/90"
          >
            Explore projects
          </a>

          <a
            href="#ambitions"
            className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            See ambitions
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="text-sm font-semibold text-white">Clear thinking</div>
            <div className="mt-1 text-sm text-white/70">
              Short briefs, no hype. Just useful structure.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="text-sm font-semibold text-white">Build-first</div>
            <div className="mt-1 text-sm text-white/70">
              Prototypes, landing pages, and proof-of-work.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="text-sm font-semibold text-white">Future utility</div>
            <div className="mt-1 text-sm text-white/70">
              Marketplaces, energy, and real-world systems.
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 drop-shadow-[0_0_14px_rgba(124,58,237,0.35)]">
  Kewin Olaisen · Builder & Collaborator
</div>

          <p className="mt-3 text-sm text-white/70 max-w-xl">
  I design and build strategic,{" "}
  <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.25)]">
    AI-ready
  </span>{" "}
  systems - contributing to ambitious teams building scalable products.
</p>

        </div>
    
    </section>
  );
}
