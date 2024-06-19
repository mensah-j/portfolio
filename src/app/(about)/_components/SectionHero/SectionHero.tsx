"use client";

import { HeroMessage } from "./HeroMessage";
import { SocialsList } from "./SocialsList";

export function SectionHero() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-start gap-6 pt-16 pl-5 w-content">
        <HeroMessage
          activities={[
            "build websites.",
            "compose early music.",
            "do geometry.",
          ]}
        />
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
      </div>
    </div>
  );
}
