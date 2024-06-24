import { SocialIcon } from "./SocialIcon";

export interface SocialsListProps {
  socials: { name: string; path: string }[];
}

export function SocialsList(props: SocialsListProps) {
  return (
    <div className="flex flex-row gap-6 justify-center items-center">
      {props.socials.map((social) => (
        <SocialIcon key={social.name} name={social.name} path={social.path} />
      ))}
    </div>
  );
}
