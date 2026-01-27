import Image from "next/image";

type ProjectsHeroProps = {
  lang?: "en" | "no";
};

export function ProjectsHero({ lang = "en" }: ProjectsHeroProps) {
  const title = lang === "no" ? "Prosjekter" : "Projects";
  const subtitle =
    lang === "no"
      ? "Konsepter i bevegelse. Systemer under bygging."
      : "Concepts in motion. Systems being built.";

  const label = lang === "no" ? "FREMFISNING" : "SHOWCASE";

  return (
    <section className="relative pt-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          {/* FIXED HEIGHT WRAPPER */}
          <div className="relative h-[360px] w-full outline outline-1 outline-white/10 sm:h-[520px]">
            {/* HERO IMAGE LAYER */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/projects-hero.png"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>

            {/* LIGHT VIGNETTE */}
            <div className="pointer-events-none absolute inset-0 z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.65)]" />
            </div>

            {/* TEXT CHIP (glass) */}
            <div className="absolute bottom-6 left-6 right-6 z-20 sm:bottom-10 sm:left-10 sm:right-auto">
              <div className="inline-block rounded-2xl border border-white/12 bg-white/7 px-5 py-4 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                <p className="text-[11px] font-medium tracking-widest text-white/70">
                  {label}
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-2 text-sm text-white/75 sm:text-base">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-10" />
      </div>
    </section>
  );
}
