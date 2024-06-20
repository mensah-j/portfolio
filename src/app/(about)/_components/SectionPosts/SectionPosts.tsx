import { Section } from "../Section/Section";
import { PostList } from "./PostList";
import { PostItemProps } from "./PostList/PostItem";

const posts: PostItemProps[] = [
  {
    name: "Differential Geometry via Sheaves",
    path: "/",
    date: "December 1, 2022",
    length: "5 min",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export function SectionPosts() {
  return (
    <Section name="recent posts" color="#352323" dark={true}>
      <PostList posts={posts} />
    </Section>
  );
}
