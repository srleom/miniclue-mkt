import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { baseUrl } from "@/app/sitemap";
import { Header } from "@/components/header";
import { StickyBanner } from "@/components/ui/sticky-banner";
import Link from "next/link";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "MiniClue",
    template: "%s | MiniClue",
  },
  description: "Turn your lecture slides into an interactive conversation",
  keywords: [
    "MiniClue",
    "Study Guide",
    "Lecture Notes",
    "Study Aid",
    "Study Tool",
    "Study Helper",
    "Study Assistant",
    "Study Companion",
    "Study Partner",
  ],
  authors: [
    {
      name: "MiniClue",
      url: "https://www.miniclue.com",
    },
  ],
  creator: "MiniClue",
  publisher: "MiniClue",
  openGraph: {
    title: "MiniClue",
    description: "Turn your lecture slides into an interactive conversation",
    url: baseUrl,
    siteName: "MiniClue",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent("MiniClue")}`,
        width: 1200,
        height: 630,
        alt: "MiniClue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MiniClue",
    description: "Turn your lecture slides into an interactive conversation",
    images: [`${baseUrl}/og?title=${encodeURIComponent("MiniClue")}`],
    creator: "@miniclue",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isBannerDismissed =
    cookieStore.get("miniclue-banner-dismissed")?.value === "true";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "MiniClue",
    url: baseUrl,
    description: "Turn your lecture slides into an interactive conversation",
  };
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col`}
      >
        <div className="sticky top-0 z-50 flex w-full flex-col">
          <StickyBanner
            className="bg-muted"
            isInitiallyDismissed={isBannerDismissed}
          >
            <p className="mx-0 max-w-[90%] text-center text-sm">
              <span className="hidden sm:inline">
                <span className="font-medium">MiniClue 1.0</span> is here.{" "}
                <Link
                  href="/blog/launch"
                  className="transition duration-200 hover:underline"
                >
                  Read the announcement
                </Link>
                .
              </span>
              <span className="sm:hidden">
                <Link
                  href="/blog/launch"
                  className="transition duration-200 hover:underline"
                >
                  <span className="font-medium">MiniClue 1.0</span> is here.
                </Link>
              </span>
            </p>
          </StickyBanner>
          <Header />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
