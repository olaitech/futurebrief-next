import type { Metadata } from "next";

import { HeroNo } from "@/components/sections/no/hero-no";
import { LampDivider } from "@/components/ui/lamp";
import { AmbitionsSectionNo } from "@/components/sections/no/ambitions-no";
import { FocusSectionNo } from "@/components/sections/no/focus-no";
import { ContactSectionNo } from "@/components/sections/no/contact-no";
import AmbientDivider from "@/components/ui/ambient-divider";

export const metadata: Metadata = {
  title: "Praktisk AI, webdesign og tidlige produktkonsepter",
  description:
    "FutureBrief bygger praktiske AI-løsninger, rene webopplevelser og tidlige produktkonsepter utviklet for reell bruk.",
};

export default function Page() {
  return (
    <main className="bg-black">
      <h1 className="sr-only">
        FutureBrief – Praktisk AI, webdesign og tidlige produktkonsepter
      </h1>

      <HeroNo />
      <LampDivider height={220} />

      <AmbitionsSectionNo />
      <FocusSectionNo />

      <AmbientDivider />

      <ContactSectionNo />
    </main>
  );
}
