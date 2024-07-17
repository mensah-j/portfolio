"use client";

import { Section } from "@/app/_components/Section";
import {
  SearchDialog,
  SearchTriggerIcon,
} from "@/app/_components/SearchDialog";
import { Music } from "@lib/music/parse";
import { useState } from "react";
import { MusicKindSelector } from "./MusicKindSelector";
import { MusicList } from "./MusicList";
import { SearchBarDefault } from "@/app/_components/SearchBarDefault";
import debounce from "debounce";
import { search } from "./search";
import { MdPiano } from "react-icons/md";
import { RiPenNibFill } from "react-icons/ri";

export interface MusicGalleryProps {
  music: Music[];
  removeLabel?: boolean;
}

const kinds = [
  {
    name: "composition" as const,
    title: "compositions",
    icon: <RiPenNibFill size={70} className="text-gray-500" />,
  },
  {
    name: "improvisation" as const,
    title: "improvisations",
    icon: <MdPiano size={70} className="text-gray-500" />,
  },
];

export function MusicGallery(props: MusicGalleryProps) {
  const [musicKind, setMusicKind] = useState(0);
  const [searchResults, setSearchResults] = useState<Music[]>(props.music);

  return (
    <Section name={props.removeLabel ? undefined : "music"} last>
      <div className="flex flex-row justify-between w-full">
        <MusicKindSelector
          musicKinds={kinds}
          currentKind={musicKind}
          setCurrentKind={setMusicKind}
        />
        <>
          <div className="hidden sm:block">
            <SearchBarDefault
              onInputChange={debounce(
                (query: string) =>
                  void search(query).then((r) =>
                    setSearchResults(query ? r : props.music),
                  ),
                200,
              )}
            />
          </div>
          <div className="block sm:hidden">
            <SearchDialog
              className="block sm:hidden"
              trigger={<SearchTriggerIcon />}
              listener={{
                type: "resize",
                action: (e: Event, open: boolean) => {
                  if (window.innerWidth > 640) {
                    return false;
                  }

                  return open;
                },
              }}
              search={(query: string) =>
                void search(query).then((r) => setSearchResults(r))
              }
            >
              <div className="p-4 pt-2 flex-col">
                <MusicKindSelector
                  musicKinds={kinds}
                  currentKind={musicKind}
                  setCurrentKind={setMusicKind}
                />
                <MusicList
                  type={kinds[musicKind].title}
                  notFoundIcon={kinds[musicKind].icon}
                  music={searchResults.filter(
                    (m) => m.type === kinds[musicKind].name,
                  )}
                />
              </div>
            </SearchDialog>
          </div>
        </>
      </div>
      <MusicList
        type={kinds[musicKind].title}
        notFoundIcon={kinds[musicKind].icon}
        music={searchResults.filter((m) => m.type === kinds[musicKind].name)}
      />
    </Section>
  );
}
