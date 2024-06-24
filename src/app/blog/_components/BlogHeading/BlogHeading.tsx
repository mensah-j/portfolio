import { Section } from "@/app/_components/Section";
import { SortOption } from "./SortOption";
import { SearchBar } from "@/app/_components/SearchBar";

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
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-10 justify-center items-center">
          {sorts.map((sort) => (
            <SortOption key={sort.name} {...sort} />
          ))}
        </div>
        <SearchBar />
      </div>
    </Section>
  );
}
