import { createFileRoute, notFound } from "@tanstack/react-router";
import { mdxComponents } from "@/components/blog/mdx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { baseUrl, formatDate, getBlogPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPosts().find((p) => p.slug === params.slug);
    if (!post || post.metadata.draft) {
      throw notFound();
    }
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { metadata, slug } = loaderData;
    const { title, publishedAt, summary, image, authorName } = metadata;
    const ogImage = image ?? `${baseUrl}/og?title=${encodeURIComponent(title)}`;
    const postUrl = `${baseUrl}/blog/${slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: summary },
        { name: "author", content: authorName || "MiniClue" },
        { property: "og:title", content: title },
        { property: "og:description", content: summary },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: publishedAt },
        { property: "og:url", content: postUrl },
        { property: "og:site_name", content: "MiniClue" },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: summary },
        { name: "twitter:image", content: ogImage },
        { name: "twitter:creator", content: "@miniclue" },
      ],
      links: [{ rel: "canonical", href: postUrl }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const { metadata, Content } = post;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    datePublished: metadata.publishedAt,
    dateModified: metadata.publishedAt,
    description: metadata.summary,
    image: metadata.image
      ? `${baseUrl}${metadata.image}`
      : `${baseUrl}/og?title=${encodeURIComponent(metadata.title)}`,
    url: `${baseUrl}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: metadata.authorName || "MiniClue",
      url: metadata.authorWebsite || "https://www.miniclue.com",
    },
    publisher: {
      "@type": "Person",
      name: "MiniClue",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    articleSection: "Technology",
    inLanguage: "en-GB",
  };

  return (
    <section className="pt-16">
      <div className="page-container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article className="prose prose-neutral dark:prose-invert prose-headings:text-foreground prose-headings:font-medium prose-p:text-muted-foreground prose-a:text-primary prose-a:underline prose-strong:text-foreground/90 prose-blockquote:border-l-primary prose-blockquote:font-normal prose-img:rounded-lg prose-code:before:content-none prose-code:after:content-none prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-normal prose-pre:code:bg-transparent prose-pre:code:p-0 mx-auto">
          <h1 className="mt-2 mb-0 text-3xl font-medium tracking-tight">
            {metadata.title}
          </h1>

          <div className="not-prose mt-4 mb-10 flex items-center gap-3">
            {metadata.authorWebsite ? (
              <a
                href={metadata.authorWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar className="size-10">
                  <AvatarImage
                    src={metadata.authorAvatar}
                    alt={metadata.authorName || "Author"}
                  />
                  <AvatarFallback>
                    {metadata.authorName
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("") || "MC"}
                  </AvatarFallback>
                </Avatar>
              </a>
            ) : (
              <Avatar className="size-10">
                <AvatarImage
                  src={metadata.authorAvatar}
                  alt={metadata.authorName || "Author"}
                />
                <AvatarFallback>
                  {metadata.authorName
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("") || "MC"}
                </AvatarFallback>
              </Avatar>
            )}
            <div className="flex flex-col">
              {metadata.authorWebsite ? (
                <a
                  href={metadata.authorWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground text-base font-medium underline-offset-4 hover:underline"
                >
                  {metadata.authorName}
                </a>
              ) : (
                <span className="text-foreground text-base font-medium">
                  {metadata.authorName}
                </span>
              )}
              <span className="text-muted-foreground text-sm">
                {metadata.authorRole} • {formatDate(metadata.publishedAt)}
              </span>
            </div>
          </div>

          <Content components={mdxComponents} />
        </article>
      </div>
    </section>
  );
}
