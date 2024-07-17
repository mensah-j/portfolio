import music from "@lib/music";
import { Footer } from "../_components/Footer";
import { MusicHeading } from "./_components/MusicHeading/MusicHeading";
import { MusicLatest } from "./_components/MusicLatest";
import { MusicAbout } from "./_components/MusicAbout";
import { MusicGallery } from "./_components/MusicGallery/MusicGallery";

export default function Page() {
  return (
    <main className="flex flex-col items-center grow">
      <MusicHeading />
      <MusicAbout />
      <MusicLatest latest={music.all[0]} />
      <MusicGallery music={music.all} />
      <Footer className="bg-[#f4f4f4]" />
    </main>
  );
}
