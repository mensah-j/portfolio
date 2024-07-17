import { SearchBarDefault } from "@/app/_components/SearchBarDefault";
import { SearchTriggerIcon } from "@/app/_components/SearchDialog";

export function MusicSearch() {
  return (
    <>
      <div className="hidden sm:block">
        <SearchBarDefault onInputChange={() => {}} />
      </div>
      <div className="block sm:hidden">
        <SearchTriggerIcon />
      </div>
    </>
  );
}
