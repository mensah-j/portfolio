"use client";

import { HeroMessage } from "./HeroMessage";

export function SectionHero() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-6 items-start p-5 pt-10 w-content">
        <HeroMessage
        /*activities={[
            "build websites.",
            "write code.",
            ...arrayShuffle([
              "create animations.",
              "do geometry.",
              "create puzzles.",
              "make educational videos.",
              "create art.",
              "learn new technologies.",
              "analyze data.",
              "compose music.",
              "study physics.",
              "optimize code.",
              "study math.",
              "solve puzzles.",
              "make games.",
              "write fugues.",
              "write bash scripts.",
            ]),
            "use arch, btw.",
          ]}*/
        />
        {/*
        <SocialsList
          socials={[
            {
              name: "github",
              path: "https://github.com/mensah-j",
            },
            {
              name: "stackexchange",
              path: "https://math.stackexchange.com/users/838822/orange-mushroom",
            },
            {
              name: "youtube",
              path: "https://youtube.com/@mensah-j",
            },
          ]}
        />
        */}
      </div>
    </div>
  );
}
