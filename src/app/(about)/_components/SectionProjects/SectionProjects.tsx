import Link from "next/link";
import { Section } from "../Section";
import { ProjectList } from "./ProjectItem";

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
      <Link
        className="text-gray-600 hover:text-black hover:border-black pb-px font-extrabold transition border-b border-transparent text-md motion-reduce:transition-none"
        href="/projects"
      >
        <span className="inline-flex items-center gap-1 font-bold motion-reduce:transition-none text-md hover:gap-2 transition-all">
          See all projects <span className="text-xl font-bold">➝</span>
        </span>
      </Link>
    </Section>
  );
}
