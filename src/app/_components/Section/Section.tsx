import mix from "classnames";

export interface SectionProps {
  children?: React.ReactNode;

  name?: string;
  foreground?: string;
  background?: string;

  className?: string;
  last?: boolean;
}

export function Section(props: SectionProps) {
  return (
    <div
      className={mix("flex flex-col items-center w-full", { grow: props.last })}
      style={{
        background: props.background ?? "transparent",
        color: props.foreground ?? "black",
      }}
    >
      <div
        className={mix(
          props.className,
          "flex flex-col items-start gap-4 p-5 pt-4 w-content",
        )}
      >
        {props.name ? (
          <h2 className="text-xl font-bold">{props.name}</h2>
        ) : null}
        {props.children}
      </div>
    </div>
  );
}
