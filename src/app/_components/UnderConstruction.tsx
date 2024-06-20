import Icon from "@mdi/react";
import { mdiHammerScrewdriver } from "@mdi/js";

export function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow w-full">
      <div className="flex flex-col items-center gap-4">
        <Icon path={mdiHammerScrewdriver} size={7} color="gray" />
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-3xl font-bold">under construction</h1>
          <span className="text-sm font-semibold">
            Sorry, this page is under construction! Please check back later.
          </span>
        </div>
      </div>
    </div>
  );
}
