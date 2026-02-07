import { ProjectsHero } from "./ProjectsHero";
import { ProjectShowcase } from "./ProjectShowcase";

type ProjectsPageProps = {
  lang?: "en" | "no";
};

export function ProjectsPage({ lang = "en" }: ProjectsPageProps) {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <h1 className="sr-only">{lang === "no" ? "Prosjekter" : "Projects"}</h1>

      {/* Hero/header beholdes som før (ingen ny bakgrunn her) */}
      <ProjectsHero lang={lang} />

      {/* Alt UNDER hero får ny bakgrunn */}
      <section className="relative">
        {/* Background image ONLY for this section */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg/projects-laptop.jpg')" }}
        />
        {/* readability */}
        {/* Background image (sharp) */}
<div className="absolute inset-0 bg-[url('/bg-laptop.jpg')] bg-cover bg-center" />

{/* Dark overlay for contrast (no blur) */}
<div className="absolute inset-0 bg-black/55" />

{/* Optional vignette (still no blur) */}
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_70%,rgba(0,0,0,0.9)_100%)]" />
                 
        {/* Content above background */}
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 py-4 text-white/70">
            {lang === "no"
              ? "Showcase: utvalgte kundeprosjekter"
              : "Showcase: selected client projects"}
          </div>

          <ProjectShowcase lang={lang} />

          <section className="mx-auto max-w-6xl px-6 pb-24 text-center text-white/50">
            {lang === "no" ? "Neste: prosjekt-blokker" : "Next: project blocks"}
          </section>
        </div>
      </section>
    </main>
  );
}
