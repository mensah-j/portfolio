export interface HotkeyDescriptionProps {
  description: string;

  children: React.ReactNode;
}

export function HotkeyDescription(props: HotkeyDescriptionProps) {
  return (
    <span className="inline-flex flex-row gap-1 items-baseline">
      <span className="border border-gray-400 shadow-[0_2px_0px_0px] shadow-[#6e8b84] rounded pl-1 pr-1 text-[#246454]">
        {props.children}
      </span>

      {props.description ? (
        <span className="text-gray-700">{props.description}</span>
      ) : null}
    </span>
  );
}
