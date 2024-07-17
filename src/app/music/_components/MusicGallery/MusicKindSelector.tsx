import mix from "classnames";

export interface MusicKindSelectorProps {
  musicKinds: {
    name: string;
    title: string;
  }[];
  currentKind: number;
  setCurrentKind: (kind: number) => void;
}

export function MusicKindSelector(props: MusicKindSelectorProps) {
  return (
    <div className="flex flex-row gap-8 text-md font-bold">
      {props.musicKinds.map((kind, index) => (
        <button
          key={kind.name}
          className={mix(
            "text-gray-400 border-b transition-[border-color_color] motion-reduce:transition-none duration-200",
            props.currentKind === index
              ? "text-gray-900 border-gray-900"
              : "hover:text-gray-500 border-transparent",
          )}
          onClick={() => props.setCurrentKind(index)}
        >
          {kind.title}
        </button>
      ))}
    </div>
  );
}
