import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a selection of client projects, experimental R&D interfaces, and early-stage product concepts exploring the future of digital systems.",
  alternates: {
    canonical: "https://www.futurebrief.net/projects",
    languages: {
      "en-US": "https://www.futurebrief.net/projects",
      "nb-NO": "https://www.futurebrief.net/no/projects",
      "x-default": "https://www.futurebrief.net/projects",
    },
  },
};

export default function Page() {
  return <ProjectsPage lang="en" />;
}
