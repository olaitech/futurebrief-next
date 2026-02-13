import type { Metadata } from "next";

import { HeroNo } from "@/components/sections/no/hero-no";
import { TrustStrip } from "@/components/sections/trust-strip";
import { AmbitionsSectionNo } from "@/components/sections/no/ambitions-no";
import { FocusSectionNo } from "@/components/sections/no/focus-no";
import { ContactSectionNo } from "@/components/sections/no/contact-no";
import { LampDivider } from "@/components/ui/lamp";
import AmbientDivider from "@/components/ui/ambient-divider";

export const metadata: Metadata = {
  title: "Praktiske AI-løsninger og produktidéer",
  description:
    "FutureBrief bygger praktiske AI-løsninger, moderne nettsider og produktkonsepter i tidlig fase – strukturert og gjennomførbart.",

  alternates: {
    canonical: "https://www.futurebrief.net/no",
    languages: {
      "en-US": "https://www.futurebrief.net",
      "nb-NO": "https://www.futurebrief.net/no",
      "x-default": "https://www.futurebrief.net",
    },
  },
};

export default function NoPage() {
  return (
    <main className="bg-black">


      <HeroNo />

      {/* Trust / Authority strip */}
      <TrustStrip />

      <LampDivider height={220} />

      <AmbitionsSectionNo />
      <FocusSectionNo />

      <AmbientDivider />

      <ContactSectionNo />
    </main>
  );
}
