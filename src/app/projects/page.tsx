import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | FutureBrief",
  description:
    "Selected client projects and experimental R&D showcase interfaces.",
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
