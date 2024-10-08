import { Section } from "@/app/_components/Section";
import { SortOption } from "./SortOption";
import { BlogSearch } from "./BlogSearch";

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
];

export function BlogHeading() {
  return (
    <Section className="pb-0">
      <h1 className="pt-4 sm:pt-8 pb-4 text-4xl sm:text-5xl font-extrabold">
        /blog
      </h1>
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center justify-center gap-10">
          {sorts.map((sort) => (
            <SortOption key={sort.name} {...sort} />
          ))}
        </div>
        <div className="pb-4">
          <BlogSearch visible={true} />
        </div>
      </div>
    </Section>
  );
}
