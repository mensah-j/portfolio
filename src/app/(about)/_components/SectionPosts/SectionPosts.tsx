import { ArrowLink } from "@/app/_components/ArrowLink";
import { Section } from "../Section/Section";
import { PostList } from "./PostList";
import { PostItemProps } from "./PostList/PostItem";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const posts: PostItemProps[] = [
  {
    id: 1,
    name: (
      <span>
        Finite arithmetic progressions in{" "}
        <Latex>$\mathbb Z / q \mathbb Z$</Latex>
      </span>
    ),
    path: "/blog",
    date: "June 20, 2024",
    length: "5 min",
    excerpt: (
      <p>
        <Latex>
          Let $q$ be a prime number and $S \subseteq \mathbb Z / q \mathbb Z$ be
          a subset of size $n$. In this post, we devise an algorithm to
          determine the number of arithmetic progressions of length $k$ in
          $\mathbb Z / q \mathbb Z$ disjoint from $S$, with time complexity
          $\mathscr O (qn \log n)$...
        </Latex>
      </p>
    ),
  },
  {
    id: 2,
    name: (
      <span>
        Recording on Linux with <code>bluetoothctl</code> and FluidSynth
      </span>
    ),
    path: "/blog",
    date: "June 20, 2024",
    length: "5 min",
    excerpt: `Here's how I record and synthesize MIDI performances on my Kawaii ES110 
    with real-time MIDI visualization using FluidSynth...
    `,
  },
  {
    id: 3,
    name: "A quick proof of Holditch's Theorem",
    path: "/blog",
    date: "June 20, 2024",
    length: "5 min",
    excerpt: (
      <p>
        <Latex>
          Let $C$ be a convex curve in the plane, and consider an arbitrary
          chord of length $\ell$ between two points on $C$. Fix $p$ and $q$ such
          that $p + q = \ell$, and consider the point that is a distance $p$
          from one endpoint of the chord and a distance $q$ from the...
        </Latex>
      </p>
    ),
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
      <ArrowLink dark={true} href="/blog">
        see all posts
      </ArrowLink>
    </Section>
  );
}
