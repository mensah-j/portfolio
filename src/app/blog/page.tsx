import { Footer } from "../_components/Footer";
import { Section } from "../_components/Section";
import { BlogHeading } from "./_components/BlogHeading";
import { PostItem, PostItemProps } from "./_components/PostList/PostItem";
import posts from "@lib/posts";

const sorts = {
  new: (p: PostItemProps, q: PostItemProps) => {
    return new Date(p.date) < new Date(q.date) ? +1 : -1;
  },
  old: (p: PostItemProps, q: PostItemProps) => {
    return new Date(p.date) < new Date(q.date) ? -1 : +1;
  },
};

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const sortedPosts = (() => {
    const sort = searchParams.sort;
    if (typeof sort === "string" && Object.keys(sorts).includes(sort)) {
      return [...posts.preview].sort(sorts[sort as keyof typeof sorts]);
    } else {
      return posts.preview;
    }
  })();

  return (
    <main className="flex flex-col items-center grow">
      <BlogHeading />
      <Section background="#e9e9e9" last>
        <div className="flex flex-col gap-12 pt-4 pb-4">
          {sortedPosts.map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </Section>
      <Footer className="bg-[#f5f5f5]" />
    </main>
  );
}
