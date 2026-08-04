import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-mono/400.css";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { baseUrl } from "@/lib/blog";
import appCss from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MiniClue" },
      {
        name: "description",
        content: "Turn your lecture slides into an interactive conversation",
      },
      { property: "og:title", content: "MiniClue" },
      {
        property: "og:description",
        content: "Turn your lecture slides into an interactive conversation",
      },
      { property: "og:url", content: baseUrl },
      { property: "og:site_name", content: "MiniClue" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: `${baseUrl}/og?title=${encodeURIComponent("MiniClue")}`,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MiniClue" },
      {
        name: "twitter:description",
        content: "Turn your lecture slides into an interactive conversation",
      },
      {
        name: "twitter:image",
        content: `${baseUrl}/og?title=${encodeURIComponent("MiniClue")}`,
      },
      { name: "twitter:creator", content: "@miniclue" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: baseUrl },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <section className="pt-16">
      <div className="page-container">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          404 - Page Not Found
        </h1>
        <p className="mb-4">The page you are looking for does not exist.</p>
      </div>
    </section>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "MiniClue",
  url: baseUrl,
  description: "Turn your lecture slides into an interactive conversation",
};

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          defer
          src="https://umami.srleom.me/script.js"
          data-website-id="97223764-ca33-487c-a4dd-79c82a47e795"
        />
        <HeadContent />
      </head>
      <body className="font-sans flex min-h-screen flex-col">
        <div className="sticky top-0 z-50 flex w-full flex-col">
          <Header />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
