"use client";

import { HeroMessage } from "./HeroMessage";

export function SectionHero() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-start gap-3 pt-16 pl-5 w-content">
        <HeroMessage
          activities={[
            "build websites.",
            "compose early music.",
            "do geometry.",
          ]}
        />
      </div>
    </div>
  );
}
