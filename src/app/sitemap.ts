import { getPublishedBlogPosts } from "@/app/blog/utils";

export const baseUrl = "https://www.miniclue.com";

export default async function sitemap() {
  const blogs = getPublishedBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
