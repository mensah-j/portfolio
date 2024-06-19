import React from "react";
import { TechnologyTag, TechnologyTagProps } from "./TechnologyTag";

export interface ProjectItemProps {
  name: string;
  path: string;

  description: React.ReactNode;
  image: string;
  technologies?: TechnologyTagProps[];
}

export function ProjectItem(props: ProjectItemProps) {
  return (
    <div className="flex flex-row items-stretch gap-4">
      <a
        href={props.path}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0"
      >
        <img
          src={props.image}
          alt={props.name}
          className="w-auto rounded-[4px] shadow h-48 shadow-gray-600"
        />
      </a>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <a
            href={props.path}
            target="_blank"
            rel="noopener noreferrer"
            className="pb-px font-extrabold transition border-b border-transparent text-md hover:border-black motion-reduce:transition-none"
          >
            {props.name}
          </a>
          <div className="text-[15px]">{props.description}</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-4">
          {props.technologies?.map((technology) => (
            <TechnologyTag key={technology.name} {...technology} />
          ))}
        </div>
      </div>
    </div>
  );
}
