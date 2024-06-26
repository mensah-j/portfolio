import { Section } from "@/app/_components/Section";
import { SortOption } from "./SortOption";
import { SearchBar } from "@/app/_components/SearchBar";
import { SearchDialog } from "@/app/_components/SearchDialog";

const sorts = [
  {
    name: "recent",
    sort: "new",
    default: true,
  },
  {
    name: "oldest",
    sort: "old",
  },
  {
    name: "popular",
    sort: "popular",
  },
];

export function BlogHeading() {
  return (
    <Section className="pb-0">
      <h1 className="pt-8 pb-4 text-5xl font-extrabold">/blog</h1>
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center justify-center gap-10">
          {sorts.map((sort) => (
            <SortOption key={sort.name} {...sort} />
          ))}
        </div>
        <div className="pb-4">
          <SearchDialog trigger={<SearchBar />}></SearchDialog>
        </div>
      </div>
    </Section>
  );
}
