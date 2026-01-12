import Link from "next/link";
import { formatDate, getPublishedBlogPosts } from "@/app/blog/utils";

export function BlogPosts() {
  const allBlogs = getPublishedBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4 flex flex-col space-y-1 transition-all hover:text-neutral-600 dark:hover:text-neutral-400"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col space-x-0 md:flex-row md:items-center md:space-x-2">
              <p className="min-w-[120px] text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
