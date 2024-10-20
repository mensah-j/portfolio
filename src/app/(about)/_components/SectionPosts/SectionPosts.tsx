import { ArrowLink } from "@/app/_components/ArrowLink";
import { Section } from "../../../_components/Section/Section";
import { PostItem } from "@/app/blog/_components/PostItem";
import posts from "@lib/posts";

export function SectionPosts() {
  return (
    <Section name="recent posts" background="#edeaea" foreground="#161616" last>
      <div className="flex flex-col gap-12 pt-4 pb-4" data-nosnippet>
        {posts.preview.slice(0, 3).map((post) => (
          <PostItem key={post.id} {...post} titleColor="#181818" />
        ))}
      </div>
      <ArrowLink href="/blog">see all posts</ArrowLink>
    </Section>
  );
}
