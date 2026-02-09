import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Prosjekter | FutureBrief",
  description:
    "Utvalgte kundeprosjekter og eksperimentelle R&D-grensesnitt.",
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
