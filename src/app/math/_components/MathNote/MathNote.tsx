import { MarkdownGeneral } from "@/app/_components/MarkdownGeneral/MarkdownGeneral";
import { Math } from "@lib/math";

export interface MathNoteProps {
  math: Math;
}

export function MathNote(props: MathNoteProps) {
  return (
    <div className="flex flex-col gap-4 items-stretch sm:flex-row">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2 items-start">
          <span>
            <a
              href={props.math.url ?? props.math.path}
              target="_blank"
              rel="noopener noreferrer"
              className="pb-px font-extrabold transition border-b hover:border-black border-transparent text-md motion-reduce:transition-none"
            >
              {props.math.title}
            </a>{" "}
            {props.math && (
              <span className="inline-block text-sm font-bold text-gray-600">
                (in progress)
              </span>
            )}
          </span>
          <MarkdownGeneral className="overflow-hidden text-[15px] overflow-ellipsis">
            {props.math.description ?? ""}
          </MarkdownGeneral>
        </div>
      </div>
    </div>
  );
}
