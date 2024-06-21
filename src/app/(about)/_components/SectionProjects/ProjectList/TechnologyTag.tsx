export interface TechnologyTagProps {
  name: string;
  logo: string;
}

export function TechnologyTag(props: TechnologyTagProps) {
  return (
    <div className="box-content flex flex-row items-center h-5 shrink-0 gap-1 p-1 bg-white rounded-sm shadow">
      <img src={props.logo} className="h-full aspect-square" />
      <span className="text-xs font-bold text-nowrap">{props.name}</span>
    </div>
  );
}
