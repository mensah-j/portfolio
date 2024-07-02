import { ArrowLink } from "@/app/_components/ArrowLink";
import { Section } from "../../../_components/Section/Section";
import { PostItem } from "@/app/blog/_components/PostItem";
import posts from "@lib/posts";

export function SectionPosts() {
  return (
    <Section name="recent posts" background="#352323" foreground="#f7f4f0">
      <div className="flex flex-col gap-12 pt-4 pb-4">
        {posts.preview.slice(0, 3).map((post) => (
          <PostItem key={post.id} {...post} titleColor="#e5d6ba" />
        ))}
      </div>
      <ArrowLink dark={true} href="/blog">
        see all posts
      </ArrowLink>
    </Section>
  );
}
