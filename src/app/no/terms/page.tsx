export const metadata = {
  title: "Vilkår – FutureBrief",
  description: "Bruksvilkår for FutureBrief.",
};

export default function TermsNoPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-20 pt-28">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Bruksvilkår
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-white/70">
          FutureBrief er en informativ nettside. Eventuelle samarbeid,
          leveranser eller tidsrammer avtales skriftlig og avhenger av omfang.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Innholdet tilbys slik det er, uten garantier. Eksterne lenker kan endres
          eller fjernes uten varsel.
        </p>
      </section>
    </main>
  );
}
