// src/app/no/page.tsx
import type { Metadata } from "next";

import { HeroNo } from "@/components/sections/no/hero-no";
import { AmbitionsSectionNo } from "@/components/sections/no/ambitions-no";
import { FocusSectionNo } from "@/components/sections/no/focus-no";
import { ContactSectionNo } from "@/components/sections/no/contact-no";
import { LampDivider } from "@/components/ui/lamp";
import AmbientDivider from "@/components/ui/ambient-divider";

export const metadata: Metadata = {
  title: "FutureBrief – Praktiske AI-løsninger",
  description:
    "Praktiske AI-løsninger, webdesign og produktidéer i tidlig fase.",
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
      <h1 className="sr-only">
        FutureBrief – Praktiske AI-løsninger, webdesign og produktidéer i
        tidlig fase
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
