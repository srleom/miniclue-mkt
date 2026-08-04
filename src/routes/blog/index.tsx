import { createFileRoute } from "@tanstack/react-router";
import { BlogPosts } from "@/components/blog/posts";
import { baseUrl } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | MiniClue" },
      {
        name: "description",
        content: "Read the latest blog posts in MiniClue.",
      },
      { property: "og:title", content: "Blog | MiniClue" },
      {
        property: "og:description",
        content: "Read the latest blog posts in MiniClue.",
      },
      { property: "og:url", content: `${baseUrl}/blog` },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: `${baseUrl}/og?title=${encodeURIComponent("Blog")}`,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Blog | MiniClue" },
      {
        name: "twitter:description",
        content: "Read the latest blog posts in MiniClue.",
      },
      {
        name: "twitter:image",
        content: `${baseUrl}/og?title=${encodeURIComponent("Blog")}`,
      },
    ],
    links: [{ rel: "canonical", href: `${baseUrl}/blog` }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <section className="pt-16">
      <div className="page-container mx-auto max-w-[65ch]">
        <h1 className="mb-8 text-4xl font-medium">Blog</h1>
        <BlogPosts />
      </div>
    </section>
  );
}
