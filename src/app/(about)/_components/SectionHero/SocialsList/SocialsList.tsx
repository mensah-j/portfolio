import { SocialIcon } from "./SocialIcon";

export interface SocialsListProps {
  socials: { name: string; path: string }[];
}

export function SocialsList(props: SocialsListProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-6">
      {props.socials.map((social) => (
        <SocialIcon name={social.name} path={social.path} />
      ))}
    </div>
  );
}
