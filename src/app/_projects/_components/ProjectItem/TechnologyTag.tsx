import Image from "next/image";

export interface TechnologyTagProps {
  name: string;
  icon: string;
}

export function TechnologyTag(props: TechnologyTagProps) {
  return (
    <div className="box-content flex flex-row gap-1 items-center p-1 h-5 bg-white rounded-sm shadow shrink-0">
      <div className="relative h-full aspect-square">
        <Image
          src={props.icon}
          alt={props.name}
          fill
          style={{ objectFit: "fill" }}
        />
      </div>
      <span className="text-xs font-bold text-nowrap">{props.name}</span>
    </div>
  );
}
