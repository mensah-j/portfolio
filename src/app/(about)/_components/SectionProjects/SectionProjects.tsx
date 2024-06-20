import Link from "next/link";
import { Section } from "../Section";
import { ProjectList } from "./ProjectList";
import { ArrowLink } from "@/app/_components/ArrowLink";

const projects = [
  {
    name: "Portmanteau",
    path: "https://portmanteaux.io",
    description:
      "Portmanteaux is an addictive word game based on composing words into large portmanteaux.",
    image: "/projects/portmanteaux.png",
    technologies: [
      {
        name: "Typescript",
        logo: "/technologies/typescript.svg",
      },
    ],
  },
  {
    name: "Enharmonic",
    description: (
      <p>
        Enharmonic provides a curated collection of public domain classical
        recordings along with handcrafted visualizations. This project draws
        inspiration from two other notable projects: the{" "}
        <a
          className="hover:underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtube.com/smalin"
        >
          Music Animation Machine
        </a>
        , created by Stephen Malinowski, and the{" "}
        <a
          className="hover:underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtube.com/gerubach"
        >
          Scrolling Bach Project
        </a>
        , created by Gerardo Martinez.
      </p>
    ),
    image: "/projects/enharmonic.png",
    technologies: [
      {
        name: "Vue.js",
        logo: "/technologies/vuejs.svg",
      },
      {
        name: "Radix Vue",
        logo: "/technologies/radix-vue.svg",
      },
      {
        name: "OpenSearch",
        logo: "/technologies/opensearch.svg",
      },
      {
        name: "PostgreSQL",
        logo: "/technologies/postgresql.svg",
      },
      {
        name: "Express",
        logo: "/technologies/express.svg",
      },
    ],
    inProgress: true,
  },
];

export function SectionProjects() {
  return (
    <Section name="projects" color="#edeaea">
      <ProjectList projects={projects} />
      <ArrowLink href="/projects">See all projects</ArrowLink>
    </Section>
  );
}
