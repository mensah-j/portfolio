export interface SectionProps {
  children?: React.ReactNode;

  name?: string;
  color?: string;
  background?: string;
  dark?: boolean;
}

export function Section(props: SectionProps) {
  return (
    <div
      className="flex flex-col items-center w-full"
      style={{
        background: props.background ?? "transparent",
        color: props.color ?? "black",
      }}
    >
      <div className="flex flex-col items-start gap-4 p-5 pt-4 w-content">
        {props.name ? (
          <h2 className="text-xl font-bold">{props.name}</h2>
        ) : null}
        {props.children}
      </div>
    </div>
  );
}
