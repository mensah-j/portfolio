"use client";

import { FaYoutube } from "react-icons/fa";
import { MusicOption } from "./MusicOption";

export interface MusicOptionYoutubeProps {
  video: string;
}

export function MusicOptionYoutube(props: MusicOptionYoutubeProps) {
  return (
    <MusicOption
      icon={<FaYoutube size={19} />}
      label="watch on youtube"
      link={`https://youtube.com/watch?v=${props.video}`}
    />
  );
}
