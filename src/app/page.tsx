import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { LampDivider } from "@/components/ui/lamp";
import { AmbitionsSection } from "@/components/sections/ambitions";
import { FocusSection } from "@/components/sections/focus";
import { ContactSection } from "@/components/sections/contact";
import AmbientDivider from "@/components/ui/ambient-divider";

export const metadata: Metadata = {
  title: "Practical AI, Web Design & Early Product Concepts",
  description:
    "FutureBrief builds practical AI applications, clean web experiences, and early-stage product concepts designed for real-world use.",
  alternates: {
    canonical: "https://futurebrief.net/",
  },
};

export default function Page() {
  return (
    <main className="bg-black">
      <h1 className="sr-only">
        FutureBrief – Practical AI applications, web design, and early-stage
        product concepts
      </h1>

      <Hero />
      <LampDivider height={220} />

      <AmbitionsSection />
      <FocusSection />

      <AmbientDivider />

      <ContactSection />
    </main>
  );
}
