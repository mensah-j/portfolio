import { MdLibraryMusic } from "react-icons/md";
import { MusicOption } from "./MusicOption";

export interface MusicOptionScoreProps {
  id: string;
}

export function MusicOptionScore(props: MusicOptionScoreProps) {
  return (
    <a href={`/music/scores/${props.id}`} target="_blank">
      <MusicOption icon={<MdLibraryMusic size={19} />} label="view score" />
    </a>
  );
}
