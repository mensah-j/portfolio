export interface MusicOptionProps {
  icon: React.ReactNode;
  label: string;
  link?: string;
}

export function MusicOption(props: MusicOptionProps) {
  /* link should open in new tab */
  return props.link ? (
    <a
      className="inline-flex items-center font-semibold text-gray-800 gap-2 cursor-pointer hover:bg-[#bfd6d0] p-2 sm:pr-[9px] sm:pl-[9px] sm:pt-[5px] sm:pb-[5px] rounded-full"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="aspect-square">{props.icon}</div>
      <span className="hidden sm:inline">{props.label}</span>
    </a>
  ) : (
    <div className="inline-flex items-center font-semibold text-gray-800 gap-2 cursor-pointer hover:bg-[#bfd6d0] p-2 sm:pr-[9px] sm:pl-[9px] sm:pt-[5px] sm:pb-[5px] rounded-full">
      <div className="h-fit">{props.icon}</div>
      <span className="hidden sm:inline">{props.label}</span>
    </div>
  );
}
