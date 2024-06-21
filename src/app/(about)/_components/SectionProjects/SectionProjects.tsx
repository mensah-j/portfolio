import Link from "next/link";
import { Section } from "../Section";
import { ProjectList } from "./ProjectList";
import { ArrowLink } from "@/app/_components/ArrowLink";

const projects = [
  {
    name: "Portmanteau",
    path: "https://portmanteaux.io",
    description: (
      <p>
        Portmanteau is an addictive word game based on combining words together
        to score points. Each new word must begin with a part of the previous
        word (e.g. <i>portman</i> and <i>manteau</i>).
      </p>
    ),
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
        recordings along with handcrafted visualizations.
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
    <Section name="projects" background="#edeaea">
      <ProjectList projects={projects} />
      <ArrowLink href="/projects">see all projects</ArrowLink>
    </Section>
  );
}
