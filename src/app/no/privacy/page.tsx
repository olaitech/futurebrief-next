export const metadata = {
  title: "Personvern",
  description: "Informasjon om personvern på FutureBrief.",
  alternates: {
    canonical: "https://www.futurebrief.net/no/privacy",
    languages: {
      "en-US": "https://www.futurebrief.net/privacy",
      "nb-NO": "https://www.futurebrief.net/no/privacy",
      "x-default": "https://www.futurebrief.net/privacy",
    },
  },
};

export default function PrivacyNoPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-28">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Personvern
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-white/70">
          FutureBrief er en portefølje- og konseptside. Dersom du tar kontakt via
          e-post, brukes informasjonen kun til å svare på henvendelsen og følge
          opp dialogen.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Personopplysninger selges ikke videre til tredjepart.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Enkle analyseverktøy kan tas i bruk i fremtiden for å forstå generell
          bruk av nettsiden. Denne siden oppdateres dersom praksis endres.
        </p>
      </section>
    </main>
  );
}
