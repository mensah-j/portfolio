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
    <div className="flex flex-col gap-4 items-stretch sm:flex-row">
      <a
        href={props.path}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full sm:w-auto sm:h-36 md:h-48 shrink-0 aspect-video"
      >
        <Image
          src={props.image}
          alt={props.name}
          fill
          sizes={"100%"}
          className="shadow shrink-0 rounded-[4px] shadow-gray-600"
        />
      </a>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2 items-start">
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
          <div className="overflow-hidden text-[15px] overflow-ellipsis">
            {props.description}
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-3 justify-start items-center pt-3">
          {props.technologies?.map((technology) => (
            <TechnologyTag key={technology.name} {...technology} />
          ))}
        </div>
      </div>
    </div>
  );
}
