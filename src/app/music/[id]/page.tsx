import music from "@lib/music";

import { MusicGallery } from "../_components/MusicGallery";
import { SectionVideo } from "./_components/SectionVideo";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export const dynamic = "force-dynamic";
export default function Page(props: PageProps) {
  const currentMusic = music.get(props.params.id);
  if (!currentMusic) {
    notFound();
  }

  return (
    <>
      <SectionVideo music={currentMusic} />
      <MusicGallery removeLabel music={music.all} />
    </>
  );
}
