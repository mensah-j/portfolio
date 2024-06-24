import { Section } from "../_components/Section";
import { BlogHeading } from "./_components/BlogHeading";
import { getPosts } from "@lib/posts";
import { PostItem, PostItemProps } from "./_components/PostList/PostItem";

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
  const posts = getPosts();
  const sort = searchParams.sort;
  if (typeof sort === "string" && Object.keys(sorts).includes(sort)) {
    posts.sort(sorts[sort as keyof typeof sorts]);
  }

  return (
    <main>
      <BlogHeading />
      <Section background="#edeaea">
        <div className="flex flex-col gap-12 pt-4 pb-4">
          {posts.map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </Section>
    </main>
  );
}
