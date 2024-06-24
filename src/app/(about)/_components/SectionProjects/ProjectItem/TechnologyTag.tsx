import Image from "next/image";

export interface TechnologyTagProps {
  name: string;
  logo: string;
}

export function TechnologyTag(props: TechnologyTagProps) {
  return (
    <div className="box-content flex flex-row items-center h-5 shrink-0 gap-1 p-1 bg-white rounded-sm shadow">
      <div className="h-full aspect-square relative">
        <Image
          src={props.logo}
          alt={props.name}
          fill
          style={{ objectFit: "fill" }}
        />
      </div>
      <span className="text-xs font-bold text-nowrap">{props.name}</span>
    </div>
  );
}
