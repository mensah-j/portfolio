import music from "@lib/music";

import { MusicGallery } from "../_components/MusicGallery";
import { SectionVideo } from "./_components/SectionVideo";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return music.ids;
}

export default function Page(props: PageProps) {
  return (
    <>
      <SectionVideo music={music.get(props.params.id)} />
      <MusicGallery removeLabel music={music.all} />
    </>
  );
}
