import { Section } from "@/app/_components/Section";
import { SortOption } from "./SortOption";

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
      <h1 className="text-5xl font-extrabold pt-8 pb-4">/blog</h1>
      <div className="flex flex-row items-center justify-center gap-10">
        {sorts.map((sort) => (
          <SortOption key={sort.name} {...sort} />
        ))}
      </div>
    </Section>
  );
}
