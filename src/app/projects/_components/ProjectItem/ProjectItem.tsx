"use client";

import React, { useEffect, useState } from "react";
import { TechnologyTag } from "./TechnologyTag";
import mix from "classnames";
import Image from "next/image";
import { ProjectSchema } from "@lib/projects/parse";
import { technologies } from "@lib/projects/technologies";
import { MarkdownGeneral } from "@/app/_components/MarkdownGeneral/MarkdownGeneral";

export interface ProjectItemProps {
  project: ProjectSchema;
}

export function ProjectItem(props: ProjectItemProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-stretch sm:flex-row">
      <a
        href={props.project.path}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full sm:w-auto sm:h-36 md:h-48 shrink-0 aspect-video"
      >
        <Image
          priority={true}
          src={`${isClient ? window.location.origin : ""}/projects/thumb/${props.project.id}`}
          alt={props.project.id}
          fill
          sizes={"100%"}
          className="shadow shrink-0 rounded-[4px] shadow-gray-600"
        />
      </a>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2 items-start">
          <span>
            <a
              href={props.project.path}
              target="_blank"
              rel="noopener noreferrer"
              className={mix(
                { "hover:border-black": props.project.published },
                "pb-px font-extrabold transition border-b border-transparent text-md motion-reduce:transition-none",
              )}
            >
              {props.project.title}
            </a>{" "}
            {!props.project.published && (
              <span className="inline-block text-sm font-bold text-gray-600">
                (in progress)
              </span>
            )}
          </span>
          <MarkdownGeneral className="overflow-hidden text-[15px] overflow-ellipsis">
            {props.project.description ?? ""}
          </MarkdownGeneral>
        </div>
        <div className="flex flex-row flex-wrap gap-3 justify-start items-center pt-3">
          {props.project.technologies
            ?.map((technology) => technologies.get(technology))
            .filter((technology) => technology !== undefined)
            .map((technology) => (
              <TechnologyTag key={technology.name} {...technology} />
            ))}
        </div>
      </div>
    </div>
  );
}
