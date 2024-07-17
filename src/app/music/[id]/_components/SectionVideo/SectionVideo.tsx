import { format, parseISO } from "date-fns";
import { MusicVideo } from "./MusicVideo";
import { Section } from "@/app/_components/Section";
import { Music } from "@lib/music";
import {
  MusicOptionScore,
  MusicOptionShare,
  MusicOptionYoutube,
} from "./MusicOptions";
import { MusicNotes } from "./MusicNotes";

export interface SectionVideoProps {
  music: Music;
}

export function SectionVideo(props: SectionVideoProps) {
  return (
    <>
      <Section className="!p-0 sm:!pr-4 sm:!pl-4 sm:!pt-5">
        <MusicVideo video={props.music.video} />
      </Section>
      <Section>
        <div className="flex flex-col gap-1 w-full">
          <h1 className="text-2xl font-extrabold">{props.music.title}</h1>
          <div className="flex flex-row w-full items-center justify-between">
            <div className="flex flex-col">
              <span className="text font-semibold">by J. Mensah</span>
              <span className="text-sm font-semibold">
                composed on {format(parseISO(props.music.date), "MMMM d, yyyy")}
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <MusicOptionShare />
              {props.music.type === "composition" && (
                <MusicOptionScore id={props.music.id} />
              )}
              <MusicOptionYoutube video={props.music.video} />
            </div>
          </div>
        </div>
        {props.music.description && (
          <MusicNotes description={props.music.description} />
        )}
      </Section>
    </>
  );
}
