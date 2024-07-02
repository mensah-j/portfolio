import Image from "next/image";
import "./icon.css";

interface SocialIconProps {
  name: string;
  path: string;
}

export function SocialIcon(props: SocialIconProps) {
  return (
    <a
      href={props.path}
      target="_blank"
      rel="noopener noreferrer"
      className="flex relative h-9 aspect-square"
    >
      <Image
        src={`/socials/${props.name}.svg`}
        alt={props.name}
        fill
        style={{
          objectFit: "fill",
        }}
        className="icon"
      />
    </a>
  );
}
