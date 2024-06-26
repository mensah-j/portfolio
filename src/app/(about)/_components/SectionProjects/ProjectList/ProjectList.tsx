import { ProjectItem, ProjectItemProps } from "./ProjectItem";

export interface ProjectListProps {
  projects: ProjectItemProps[];
}

export function ProjectList(props: ProjectListProps) {
  return (
    <div className="flex flex-col gap-16 pt-4 pb-4">
      {props.projects.map((project) => (
        <ProjectItem key={project.name} {...project} />
      ))}
    </div>
  );
}
