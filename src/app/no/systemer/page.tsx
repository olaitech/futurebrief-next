import type { Metadata } from "next";
import { ArticleLayout } from "@/components/sections/insights/ArticleLayout";
import { SoftOrbsBackground } from "@/components/hero/SoftOrbsBackground";
import { SystemsLoop } from "@/components/systems/SystemsLoop";
import Link from "next/link";

const SITE_URL = "https://www.futurebrief.net";

export const metadata: Metadata = {
    title: "AI-nettsidesystemer for gründere",
    description:
        "Et praktisk rammeverk for gründere for å bygge digitale systemer som produserer leads og læring, utover statiske nettsider.",
    alternates: {
        canonical: `${SITE_URL}/no/systemer`,
        languages: {
            "en-US": `${SITE_URL}/systems`,
            "nb-NO": `${SITE_URL}/no/systemer`,
            "x-default": `${SITE_URL}/systems`,
        },
    },
};

const steps = [
    { id: "strategy", title: "Strategi", subtitle: "Posisjonering + ICP" },
    { id: "evidence", title: "Bevis", subtitle: "Proof of work" },
    { id: "journey", title: "Brukerreise", subtitle: "Konverteringsstier" },
    { id: "capture", title: "Fangst", subtitle: "Lead-arbeidsflyt" },
    { id: "signals", title: "Signaler", subtitle: "Måling" },
];

export default function NoSystemsPage() {
    return (
        <ArticleLayout
            lang="no"
            title="AI-nettsidesystemer for gründere"
            description="Gründere trenger ikke 'en nettside' – de trenger et system som produserer leads og læring."
        >
            <SoftOrbsBackground />

            <section className="relative z-10">
                <p>
                    De fleste bedriftseiere tror de trenger en nettside. Det de egentlig trenger er et system.
                    En nettside er en samling sider; et system er en strategisk motor som driver vekst
                    og fanger opp signaler fra markedet.
                </p>

                <div className="my-16">
                    <h2 className="text-center mb-8">SYSTEMS Loop</h2>
                    <SystemsLoop steps={steps} />
                    <p className="text-center text-sm text-white/40 italic">
                        Klikk på et steg over for å hoppe til den seksjonen.
                    </p>
                </div>

                <div className="space-y-16">
                    <section className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h2>Problemet: Hvorfor “side-først” feiler</h2>
                        <p>
                            Når du starter med sider, fokuserer du på det visuelle, tekstlengde og menyelementer.
                            Du ender opp med en digital brosjyre som ser bra ut, men som presterer dårlig.
                            Vanlige symptomer på en side-først-tilnærming inkluderer:
                        </p>
                        <ul>
                            <li>Ingen tydelig sti for besøkende å ta (lav konvertering).</li>
                            <li>Uklart verdiforslag (høy fluktfrekvens).</li>
                            <li>Manglende bevis på arbeid (lav tillit).</li>
                            <li>Mangel på datasporing (ingen læring).</li>
                        </ul>
                    </section>

                    <hr className="border-white/5" />

                    <section className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h2>Hva et “nettsidesystem” er</h2>
                        <p>
                            En system-først-tilnærming behandler nettsiden din som infrastruktur.
                            I stedet for å spørre "hvordan skal forsiden se ut?", spør vi
                            "hvordan bidrar denne ressursen til forretningsmålene våre?".
                        </p>

                        <div className="overflow-x-auto my-8">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left py-2 px-4 border-b border-white/10">Statisk side</th>
                                        <th className="text-left py-2 px-4 border-b border-white/10">Nettsidesystem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-white/5">Fokus på utseende</td>
                                        <td className="py-2 px-4 border-b border-white/5">Fokus på ytelse</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-white/5">Statisk informasjon</td>
                                        <td className="py-2 px-4 border-b border-white/5">Dynamiske konverteringsstier</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-white/5">Vanskelig å skalere</td>
                                        <td className="py-2 px-4 border-b border-white/5">Bygget for vekst</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-white/5">Ingen feedback-loop</td>
                                        <td className="py-2 px-4 border-b border-white/5">Drevet av målinger</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <hr className="border-white/5" />

                    <div className="space-y-12">
                        <section id="strategy" className="scroll-mt-24">
                            <h3>Strategi (Posisjonering + ICP)</h3>
                            <p>
                                Før vi skriver en eneste linje med kode, definerer vi nøyaktig hvem vi snakker til
                                (Ideal Customer Profile) og hvilket spesifikt problem vi løser for dem.
                            </p>
                        </section>

                        <section id="evidence" className="scroll-mt-24">
                            <h3>Bevis (Evidence)</h3>
                            <p>
                                I et marked fullt av AI-hype er bevis den eneste valutaen som betyr noe.
                                Vi bygger "proof-of-work" inn i siden gjennom casestudier, demoer og resultater.
                            </p>
                        </section>

                        <section id="journey" className="scroll-mt-24">
                            <h3>Brukerreise (Journey)</h3>
                            <p>
                                Hver besøkende har en oppgave som skal løses. Vi kartlegger nøyaktig hvordan vi flytter
                                dem fra nysgjerrighet til en definert handling (demo, påmelding eller kontakt).
                            </p>
                        </section>

                        <section id="capture" className="scroll-mt-24">
                            <h3>Fangst (Capture)</h3>
                            <p>
                                Vi bygger mekanismene for å fange interesse og automatisere oppfølgingen,
                                slik at ingen leads går tapt i støyen.
                            </p>
                        </section>

                        <section id="signals" className="scroll-mt-24">
                            <h3>Signaler (Signals)</h3>
                            <p>
                                Vi sporer atferd, ikke bare visninger. Vi måler konverteringsrater, rulledybde
                                og engasjement for å informere neste iterasjon av produktet.
                            </p>
                        </section>
                    </div>

                    <hr className="border-white/10" />

                    <section className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h2>Minimum Viable System (MVS)</h2>
                        <p>
                            Du trenger ikke 50 sider. Du trenger et MVS som fungerer. Bruk denne sjekklisten:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                            <li>Ett tydelig verdiforslag i hero.</li>
                            <li>Nøyaktig én primær handling (CTA).</li>
                            <li>Bevis synlig innen 2 rull.</li>
                            <li>Fungerende leads-skjema.</li>
                            <li>Konfigurert atferdsanalyse.</li>
                            <li>Automatisert velkomstsekvens.</li>
                            <li>Ren, absolutt SEO-metadata.</li>
                            <li>Rask ytelse.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Praktiske eksempler</h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <h4 className="text-white font-semibold mb-2">Eksempel A: Next.js Metadata</h4>
                                <pre><code>{`export const metadata: Metadata = {
  title: "AI Lead System",
  description: "Automatiser din lead-pipeline med atferdsbasert AI.",
  openGraph: { images: ["/og-image.png"] },
  alternates: { canonical: "/systemer" },
};`}</code></pre>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-2">Eksempel B: Enkel Lead Capture Handler</h4>
                                <pre><code>{`// src/app/api/leads/route.ts
export async function POST(req: Request) {
  const { email, company } = await req.json();
  // 1. Valider 2. Lagre 3. Varsle
  return Response.json({ status: "success" });
}`}</code></pre>
                            </div>
                        </div>
                    </section>

                    <section className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm border-cyan-500/20">
                        <h2>Start her: Anbefalt Innsikt</h2>
                        <p>Dypdykk i de individuelle delene av å bygge høytytende systemer:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {[
                                { label: "Slutt å bygge sider", href: "/no/innsikt/slutt-a-bygge-sider-begynn-a-bygge-systemer" },
                                { label: "AI Landingssider", href: "/no/innsikt/ai-landingsside-som-konverterer" },
                                { label: "Hva gir konvertering", href: "/no/innsikt/hva-gjor-at-en-ai-landingsside-konverterer" },
                                { label: "Typiske feil", href: "/no/innsikt/hvorfor-de-fleste-ai-startups-bygger-feil-nettside" },
                                { label: "Gründers strategi", href: "/no/innsikt/fra-prototype-til-produkt-nettstedsstrategi-for-ai-gründere" }
                            ].map(link => (
                                <Link key={link.href} href={link.href} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-sm text-cyan-400 font-medium">
                                    {link.label} →
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="text-center py-12">
                        <h2>Klar for å bygge et system?</h2>
                        <p className="max-w-xl mx-auto mb-8">
                            Jeg hjelper gründere med å brobygge gapet mellom tekniske prototyper og skalerbare digitale produkter.
                        </p>
                        <Link href="/#contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] transition hover:bg-white/90 transform hover:scale-[1.02]">
                            Start din system transformeringsreise →
                        </Link>
                    </section>
                </div>
            </section>
        </ArticleLayout>
    );
}
