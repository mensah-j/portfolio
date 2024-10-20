import { Section } from "../../../_components/Section";
import { ArrowLink } from "@/app/_components/ArrowLink";
import { ProjectItem } from "../../../_projects/_components/ProjectItem";
import projects from "@lib/projects";

export function SectionProjects() {
  return (
    <Section name="projects" background="#edeaea">
      <div className="flex flex-col gap-16 pt-4 pb-4" data-nosnippet>
        {projects.slice(0, 3).map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
      <ArrowLink href="/projects">see all projects</ArrowLink>
    </Section>
  );
}
