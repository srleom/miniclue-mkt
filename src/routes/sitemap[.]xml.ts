import { createFileRoute } from "@tanstack/react-router";
import { baseUrl, getPublishedBlogPosts } from "@/lib/blog";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const blogs = getPublishedBlogPosts().map((post) => ({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: post.metadata.publishedAt,
        }));

        const routes = ["", "/blog"].map((route) => ({
          url: `${baseUrl}${route}`,
          lastModified: new Date().toISOString().split("T")[0],
        }));

        const entries = [...routes, ...blogs];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml" },
        });
      },
    },
  },
});
