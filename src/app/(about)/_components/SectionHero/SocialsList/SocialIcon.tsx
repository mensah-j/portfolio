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
      className="flex h-9 aspect-square"
    >
      <img
        src={`/socials/${props.name}.svg`}
        alt={props.name}
        className="icon"
      />
    </a>
  );
}
