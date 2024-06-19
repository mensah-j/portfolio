export interface TechnologyTagProps {
  name: string;
  logo: string;
}

export function TechnologyTag(props: TechnologyTagProps) {
  return (
    <div className="box-content flex flex-row items-center h-5 gap-2 p-1 bg-white rounded-sm shadow">
      <img src={props.logo} className="h-full" />
      <span className="text-xs font-bold">{props.name}</span>
    </div>
  );
}
