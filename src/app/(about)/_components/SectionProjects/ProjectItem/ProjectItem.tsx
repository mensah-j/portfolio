import React from "react";
import { TechnologyTag, TechnologyTagProps } from "./TechnologyTag";
import mix from "classnames";
import Image from "next/image";

export interface ProjectItemProps {
  name: string;
  path?: string;

  description: React.ReactNode;
  image: string;
  technologies?: TechnologyTagProps[];

  inProgress?: boolean;
}

export function ProjectItem(props: ProjectItemProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-4">
      <a
        href={props.path}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 sm:h-36 md:h-48 sm:w-auto w-full aspect-video relative"
      >
        <Image
          src={props.image}
          alt={props.name}
          fill
          style={{
            objectFit: "fill",
          }}
          className="shrink-0 rounded-[4px] shadow  shadow-gray-600"
        />
      </a>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-start gap-2">
          <span>
            <a
              href={props.path}
              target="_blank"
              rel="noopener noreferrer"
              className={mix(
                { "hover:border-black": !props.inProgress },
                "pb-px font-extrabold transition border-b border-transparent text-md motion-reduce:transition-none",
              )}
            >
              {props.name}
            </a>{" "}
            {props.inProgress && (
              <span className="inline-block text-sm font-bold text-gray-600">
                (in progress)
              </span>
            )}
          </span>
          <div className="text-[15px] overflow-ellipsis overflow-hidden">
            {props.description}
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-start gap-3 pt-3">
          {props.technologies?.map((technology) => (
            <TechnologyTag key={technology.name} {...technology} />
          ))}
        </div>
      </div>
    </div>
  );
}
