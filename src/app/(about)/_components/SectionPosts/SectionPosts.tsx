import { ArrowLink } from "@/app/_components/ArrowLink";
import { Section } from "../Section/Section";
import { PostList } from "./PostList";
import { PostItemProps } from "./PostList/PostItem";

const posts: PostItemProps[] = [
  {
    name: "Differential Geometry via Sheaves",
    path: "/",
    date: "December 1, 2022",
    length: "5 min",
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  },
  {
    name: "Calculus of Variations",
    path: "/",
    date: "December 1, 2022",
    length: "5 min",
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  },
  {
    name: "Algorithms for Differential Geometry",
    path: "/",
    date: "December 1, 2022",
    length: "5 min",
    excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  },
];

export function SectionPosts() {
  return (
    <Section
      name="recent posts"
      background="#352323"
      color="#f7f4f0"
      dark={true}
    >
      <PostList posts={posts} />
      <ArrowLink dark={true} href="/posts">
        see all posts
      </ArrowLink>
    </Section>
  );
}
