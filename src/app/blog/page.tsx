import { BlogPosts } from "@/components/blog/posts";
import type { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest blog posts in MiniClue.",
  keywords: [
    "Blog",
    "MiniClue",
    "Lecture Explainer",
    "Lecture Chat",
    "Lecture Notes",
    "Study Guide",
    "Study Aid",
    "Study Tool",
    "Study Helper",
    "Study Assistant",
    "Study Companion",
    "Study Partner",
  ],
  openGraph: {
    title: "Blog | MiniClue",
    description: "Read the latest blog posts in MiniClue.",
    url: `${baseUrl}/blog`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent("Blog")}`,
        width: 1200,
        height: 630,
        alt: "Blog | MiniClue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | MiniClue",
    description: "Read the latest blog posts in MiniClue.",
    images: [`${baseUrl}/og?title=${encodeURIComponent("Blog")}`],
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <section className="pt-16">
      <div className="page-container mx-auto max-w-[65ch]">
        <h1 className="mb-8 text-4xl font-medium">Blog</h1>
        <BlogPosts />
      </div>
    </section>
  );
}
