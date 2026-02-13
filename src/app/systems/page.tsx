import type { Metadata } from "next";
import { ArticleLayout } from "@/components/sections/insights/ArticleLayout";
import { SoftOrbsBackground } from "@/components/hero/SoftOrbsBackground";
import { SystemsLoop } from "@/components/systems/SystemsLoop";
import Link from "next/link";

const SITE_URL = "https://www.futurebrief.net";

export const metadata: Metadata = {
    title: "AI Website Systems for Founders",
    description:
        "A practical framework for founders to build digital systems that produce leads and learning, moving beyond static websites.",
    alternates: {
        canonical: `${SITE_URL}/systems`,
        languages: {
            "en-US": `${SITE_URL}/systems`,
            "nb-NO": `${SITE_URL}/no/systemer`,
            "x-default": `${SITE_URL}/systems`,
        },
    },
};

const steps = [
    { id: "strategy", title: "Strategy", subtitle: "Positioning + ICP" },
    { id: "evidence", title: "Evidence", subtitle: "Proof of work" },
    { id: "journey", title: "Journey", subtitle: "Conversion paths" },
    { id: "capture", title: "Capture", subtitle: "Lead workflows" },
    { id: "signals", title: "Signals", subtitle: "Measurement" },
];

export default function SystemsPage() {
    return (
        <ArticleLayout
            lang="en"
            title="AI Website Systems for Founders"
            description="Founders don't need 'a website' – they need a system that produces leads and learning."
        >
            <SoftOrbsBackground />

            <section className="relative z-10">
                <p>
                    Most business owners think they need a website. What they actually need is a system.
                    A website is a collection of pages; a system is a strategic engine that drives growth
                    and captures market signals.
                </p>

                <div className="my-16">
                    <h2 className="text-center mb-8">The SYSTEMS Loop</h2>
                    <SystemsLoop steps={steps} />
                    <p className="text-center text-sm text-white/40 italic">
                        Click a step above to jump to that section.
                    </p>
                </div>

                <div className="space-y-16">
                    <section className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h2>The problem: Why “page-first” fails</h2>
                        <p>
                            When you start with pages, you focus on visuals, copy length, and menu items.
                            You end up with a digital brochure that looks great but performs poorly.
                            Common symptoms of a page-first approach include:
                        </p>
                        <ul>
                            <li>No clear path for visitors to take (low conversion).</li>
                            <li>Unclear value proposition (high bounce rate).</li>
                            <li>Missing proof of work (low trust).</li>
                            <li>Lack of data tracking (no learning).</li>
                        </ul>
                    </section>

                    <hr className="border-white/5" />

                    <section className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h2>What a “website system” is</h2>
                        <p>
                            A system-first approach treats your website as infrastructure.
                            Instead of asking "what should the homepage look like?", we ask
                            "how does this asset contribute to our business goals?".
                        </p>

                        <div className="overflow-x-auto my-8">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left py-2 px-4 border-b border-white/10">Static Page</th>
                                        <th className="text-left py-2 px-4 border-b border-white/10">Website System</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-white/5">Focused on appearance</td>
                                        <td className="py-2 px-4 border-b border-white/5">Focused on performance</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-white/5">Static information</td>
                                        <td className="py-2 px-4 border-b border-white/5">Dynamic conversion paths</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-white/5">Hard to scale</td>
                                        <td className="py-2 px-4 border-b border-white/5">Built for growth</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-white/5">No feedback loop</td>
                                        <td className="py-2 px-4 border-b border-white/5">Driven by metrics</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <hr className="border-white/5" />

                    <div className="space-y-12">
                        <section id="strategy" className="scroll-mt-24">
                            <h3>Strategy (Positioning + ICP)</h3>
                            <p>
                                Before writing a single line of code, we define exactly who we are talking to (Ideal Customer Profile)
                                and what specific problem we solve for them. This creates the foundation for every design decision.
                            </p>
                        </section>

                        <section id="evidence" className="scroll-mt-24">
                            <h3>Evidence (Proof)</h3>
                            <p>
                                In a market full of AI hype, evidence is the only currency that matters.
                                We build proof-of-work into the site through case studies, demos, and metrics
                                that demonstrate actual capability rather than promises.
                            </p>
                        </section>

                        <section id="journey" className="scroll-mt-24">
                            <h3>Journey (Conversion Path)</h3>
                            <p>
                                Every visitor has a "job to be done." We map out exactly how we move them
                                from initial curiosity to a defined action (demo, signup, or contact),
                                removing every unnecessary friction point.
                            </p>
                        </section>

                        <section id="capture" className="scroll-mt-24">
                            <h3>Capture (Lead Capture + Follow-up)</h3>
                            <p>
                                We build the mechanisms to capture interest and automate the initial follow-up,
                                integrating with your CRM to ensure no lead is lost in the noise.
                            </p>
                        </section>

                        <section id="signals" className="scroll-mt-24">
                            <h3>Signals (Measurement)</h3>
                            <p>
                                We track behavior, not just views. We measure conversion rates, scroll depth,
                                and CTA engagement to inform the next iteration of your digital strategy.
                            </p>
                        </section>
                    </div>

                    <hr className="border-white/10" />

                    <section className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h2>Minimum Viable System (MVS)</h2>
                        <p>
                            You don't need 50 pages. You need an MVS that works. Use this checklist:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                            <li>One clear value prop in hero.</li>
                            <li>Exactly one primary CTA.</li>
                            <li>Proof visible within 2 scrolls.</li>
                            <li>Working lead capture form.</li>
                            <li>Configured behavioral analytics.</li>
                            <li>Automated welcome sequence.</li>
                            <li>Clean, absolute SEO metadata.</li>
                            <li>Fast-loading performance.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Practical examples</h2>

                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <h4 className="text-white font-semibold mb-2">Example A: Next.js Metadata</h4>
                                <pre><code>{`export const metadata: Metadata = {
  title: "AI Lead System",
  description: "Automate your lead pipeline using behavioral AI.",
  openGraph: { images: ["/og-image.png"] },
  alternates: { canonical: "/systems" },
};`}</code></pre>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-2">Example B: Simple Lead Capture Handler</h4>
                                <pre><code>{`// src/app/api/leads/route.ts
export async function POST(req: Request) {
  const { email, company } = await req.json();
  // 1. Validate 2. Save 3. Notify
  return Response.json({ status: "success" });
}`}</code></pre>
                            </div>
                        </div>
                    </section>

                    <section className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm border-cyan-500/20">
                        <h2>Start here: Recommended Insights</h2>
                        <p>Deep dives into the individual parts of building high-performance systems:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {[
                                { label: "Stop Building Pages", href: "/insights/stop-building-pages-start-building-systems" },
                                { label: "AI Landing Pages", href: "/insights/ai-landing-page-that-converts" },
                                { label: "Conversion Strategy", href: "/insights/what-makes-an-ai-landing-page-convert" },
                                { label: "Common Mistakes", href: "/insights/why-most-ai-startups-build-the-wrong-website" },
                                { label: "Founder Framework", href: "/insights/from-prototype-to-product-website-strategy-for-ai-founders" }
                            ].map(link => (
                                <Link key={link.href} href={link.href} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-sm text-cyan-400 font-medium">
                                    {link.label} →
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="text-center py-12">
                        <h2>Ready to build a system?</h2>
                        <p className="max-w-xl mx-auto mb-8">
                            I help founders bridge the gap between technical prototypes and scalable digital products.
                        </p>
                        <Link href="/#contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] transition hover:bg-white/90 transform hover:scale-[1.02]">
                            Start Your System Transformation →
                        </Link>
                    </section>
                </div>
            </section>
        </ArticleLayout>
    );
}
