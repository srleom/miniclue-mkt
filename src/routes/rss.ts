import { createFileRoute } from "@tanstack/react-router";
import { baseUrl, getPublishedBlogPosts } from "@/lib/blog";

export const Route = createFileRoute("/rss")({
  server: {
    handlers: {
      GET: () => {
        const allBlogs = getPublishedBlogPosts();

        const itemsXml = allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map(
            (post) =>
              `<item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${post.metadata.summary || ""}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt,
          ).toUTCString()}</pubDate>
        </item>`,
          )
          .join("\n");

        const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>MiniClue</title>
        <link>${baseUrl}</link>
        <description>Blog posts by MiniClue</description>
        ${itemsXml}
    </channel>
  </rss>`;

        return new Response(rssFeed, {
          headers: { "Content-Type": "text/xml" },
        });
      },
    },
  },
});
