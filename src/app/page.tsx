import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { LampDivider } from "@/components/ui/lamp";
import { AmbitionsSection } from "@/components/sections/ambitions";
import { FocusSection } from "@/components/sections/focus";
import { ContactSection } from "@/components/sections/contact";
import AmbientDivider from "@/components/ui/ambient-divider";

export const metadata: Metadata = {
  title: "Practical AI, Web Design & Product Concepts",
  description:
    "FutureBrief builds practical AI applications, clean web experiences, and early-stage product concepts designed for real-world use.",

  alternates: {
    canonical: "https://www.futurebrief.net",
    languages: {
      "en-US": "https://www.futurebrief.net",
      "nb-NO": "https://www.futurebrief.net/no",
      "x-default": "https://www.futurebrief.net",
    },
  },
};

export default function Page() {
  return (
    <main className="bg-black">


      <Hero />

      {/* Authority / Trust layer */}
      <TrustStrip />

      <LampDivider height={220} />

      <AmbitionsSection />
      <FocusSection />

      <AmbientDivider />

      <ContactSection />
    </main>
  );
}
