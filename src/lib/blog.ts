import type { ComponentType } from "react";

export const baseUrl = "https://www.miniclue.com";

export type BlogMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  draft?: boolean;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  authorWebsite?: string;
};

type MDXModule = {
  default: ComponentType<{
    // biome-ignore lint/suspicious/noExplicitAny: MDX component map is heterogeneous by tag name
    components?: Record<string, ComponentType<any>>;
  }>;
  frontmatter: BlogMetadata;
};

const modules = import.meta.glob<MDXModule>("/src/content/blog/*.mdx", {
  eager: true,
});

export type BlogPost = {
  slug: string;
  metadata: BlogMetadata;
  Content: MDXModule["default"];
};

export function getBlogPosts(): BlogPost[] {
  return Object.entries(modules).map(([path, mod]) => {
    const slug =
      path
        .split("/")
        .pop()
        ?.replace(/\.mdx$/, "") ?? path;
    return { slug, metadata: mod.frontmatter, Content: mod.default };
  });
}

export function getPublishedBlogPosts(): BlogPost[] {
  return getBlogPosts().filter((post) => !post.metadata.draft);
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
