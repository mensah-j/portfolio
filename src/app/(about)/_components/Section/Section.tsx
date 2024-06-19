export interface SectionProps {
  children?: React.ReactNode;

  name: string;
  color?: string;
  dark?: boolean;
}

export function Section(props: SectionProps) {
  return (
    <div
      className="flex flex-col items-center w-full"
      style={{
        background: props.color ?? "transparent",
        color: props.dark ? "white" : "black",
      }}
    >
      <div className="flex flex-col items-start gap-4 p-5 pt-4 w-content">
        <h2 className="text-xl font-bold">{props.name}</h2>
        {props.children}
      </div>
    </div>
  );
}
