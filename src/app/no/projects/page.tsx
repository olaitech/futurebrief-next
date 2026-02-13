import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Prosjekter",
  description:
    "Utforsk utvalgte kundeprosjekter, eksperimentelle R&D-grensesnitt og tidlige produktkonsepter som utfordrer dagens digitale systemer.",
  alternates: {
    canonical: "https://www.futurebrief.net/no/projects",
    languages: {
      "en-US": "https://www.futurebrief.net/projects",
      "nb-NO": "https://www.futurebrief.net/no/projects",
      "x-default": "https://www.futurebrief.net/projects",
    },
  },
};

export default function Page() {
  return <ProjectsPage lang="no" />;
}
