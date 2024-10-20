import { Section } from "../../../_components/Section";
import { ProjectItem } from "../ProjectItem";
import projects from "@lib/projects";

export function SectionProjects() {
  return (
    <Section name="projects" background="#edeaea" last>
      <div className="flex flex-col gap-16 pt-4 pb-4">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
