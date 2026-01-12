import { notFound } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CustomMDX } from "@/components/blog/mdx";
import {
  formatDate,
  getBlogPosts,
  getPublishedBlogPosts,
} from "@/app/blog/utils";
import { baseUrl } from "@/app/sitemap";

export async function generateStaticParams() {
  const posts = getPublishedBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const post = getBlogPosts().find((post) => post.slug === resolvedParams.slug);
  if (!post || post.metadata.draft) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    authorName,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    title,
    description,
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
      "Study Tool",
      "Study Helper",
      "Study Assistant",
      "Study Companion",
      "Study Partner",
      "Study Tool",
      "Study Helper",
      "Study Assistant",
      title,
    ],
    authors: [{ name: authorName || "MiniClue" }],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: postUrl,
      siteName: "MiniClue",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@miniclue",
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const post = getBlogPosts().find((post) => post.slug === resolvedParams.slug);

  if (!post || post.metadata.draft) {
    notFound();
  }

  return (
    <section className="pt-16">
      <div className="page-container">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: post.metadata.authorName || "MiniClue",
                url: post.metadata.authorWebsite || "https://www.miniclue.com",
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
            }),
          }}
        />

        <article className="prose prose-neutral dark:prose-invert prose-headings:text-foreground prose-headings:font-medium prose-p:text-muted-foreground prose-a:text-primary prose-a:underline prose-strong:text-foreground/90 prose-blockquote:border-l-primary prose-blockquote:font-normal prose-img:rounded-lg prose-code:before:content-none prose-code:after:content-none prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-normal prose-pre:code:bg-transparent prose-pre:code:p-0 mx-auto">
          <h1 className="mt-2 mb-0 text-3xl font-medium tracking-tight">
            {post.metadata.title}
          </h1>

          <div className="not-prose mt-4 mb-10 flex items-center gap-3">
            {post.metadata.authorWebsite ? (
              <Link
                href={post.metadata.authorWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar className="size-10">
                  <AvatarImage
                    src={post.metadata.authorAvatar}
                    alt={post.metadata.authorName || "Author"}
                  />
                  <AvatarFallback>
                    {post.metadata.authorName
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("") || "MC"}
                  </AvatarFallback>
                </Avatar>
              </Link>
            ) : (
              <Avatar className="size-10">
                <AvatarImage
                  src={post.metadata.authorAvatar}
                  alt={post.metadata.authorName || "Author"}
                />
                <AvatarFallback>
                  {post.metadata.authorName
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("") || "MC"}
                </AvatarFallback>
              </Avatar>
            )}
            <div className="flex flex-col">
              {post.metadata.authorWebsite ? (
                <Link
                  href={post.metadata.authorWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground text-base font-medium underline-offset-4 hover:underline"
                >
                  {post.metadata.authorName}
                </Link>
              ) : (
                <span className="text-foreground text-base font-medium">
                  {post.metadata.authorName}
                </span>
              )}
              <span className="text-muted-foreground text-sm">
                {post.metadata.authorRole} •{" "}
                {formatDate(post.metadata.publishedAt)}
              </span>
            </div>
          </div>

          <CustomMDX source={post.content} />
        </article>
      </div>
    </section>
  );
}
