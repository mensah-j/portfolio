import posts from "@lib/posts";

import { notFound } from "next/navigation";
import { getPost } from "./post";
import { SectionPost } from "./_components/SectionPost";
import { Footer } from "@/app/_components/Footer";

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return posts.all.map((post) => ({
    id: post.id,
  }));
}

export default async function Page(props: PageProps) {
  const currentPost = posts.get(props.params.id);
  if (!currentPost) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center grow">
      <SectionPost
        title={currentPost.title}
        author="Jeffery Mensah"
        date={currentPost.date}
        length={currentPost.length}
        content={await getPost(props.params.id)}
      />
      <Footer className="bg-[#f9f9f9]" />
    </main>
  );
}
