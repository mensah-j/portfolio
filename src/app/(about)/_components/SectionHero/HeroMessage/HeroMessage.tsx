import Typewriter from "typewriter-effect";
import "./typewriter.css";

interface HeroMessageProps {
  activities: string[];
}

export function HeroMessage(props: HeroMessageProps) {
  return (
    <div className="flex flex-col items-start gap-3">
      <span className="text-2xl font-extrabold">hi, my name is</span>
      <h1 className="font-extrabold text-7xl">Jeffery Mensah.</h1>
      <span className="inline-flex pt-3 text-xl font-bold">
        i like to&nbsp;
        <Typewriter
          options={{
            /* must be interesting */
            strings: props.activities,
            autoStart: true,
            loop: true,
            cursor: " ",
            cursorClassName:
              "inline-block border-r-2 border-black border-opacity-60 blink",
          }}
        ></Typewriter>
      </span>
    </div>
  );
}
