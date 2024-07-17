"use client";

import ShowMoreText from "react-show-more-text";

export interface MusicNoteProps {
  description: string;
}

export function MusicNotes(props: MusicNoteProps) {
  return (
    <div className="bg-gray-100 p-4 rounded w-full flex flex-col gap-2">
      <h3 className="text-md font-bold">notes</h3>
      <ShowMoreText
        lines={2}
        className="text-[14px]"
        anchorClass="font-bold cursor-pointer"
      >
        {props.description}
      </ShowMoreText>
    </div>
  );
}
