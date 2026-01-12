import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoCloud from "@/components/logo-cloud";
import Features from "@/components/features";
import { HighlightText } from "@/components/animate-ui/primitives/texts/highlight";

export const metadata = {
  title: "Home | MiniClue",
  description: "Turn your lecture slides into an interactive conversation",
};

export default function HomePage() {
  return (
    <>
      <section className="pt-32">
        <div className="page-container text-center">
          <Button className="hover:bg-background dark:hover:border-t-border bg-muted mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border px-4 py-2 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
            <span className="relative flex size-2">
              <span className="bg-chart-2 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-chart-2 relative inline-flex size-2 rounded-full"></span>
            </span>
            <span className="text-foreground text-sm">We&apos;re live!</span>
          </Button>

          <h1 className="mx-auto mb-8 max-w-4xl text-5xl leading-14 font-medium sm:text-6xl sm:leading-17">
            Turn your lecture slides into an interactive{" "}
            <HighlightText
              text="conversation"
              highlightColor="rgba(168, 85, 247, 0.25)"
              delay={100}
            />
          </h1>
          <p className="text-muted-foreground mx-auto mb-10 max-w-xl text-lg sm:text-xl">
            Upload your PDFs and get instant, contextual answers as you read. No
            more switching tabs or losing your study flow.
          </p>

          <div className="flex flex-col items-center justify-center gap-x-4 gap-y-3 sm:flex-row">
            <Button asChild variant="default" size="lg">
              <Link href="https://app.miniclue.com/auth/signup">
                Start learning
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#features">See our features</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="pt-24">
        <div className="page-container">
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/home/automatic-saving.png"
              alt="MiniClue"
              width={1920}
              height={1080}
              className="w-full object-top"
              priority
            />
          </div>
        </div>
      </section>

      <section className="pt-24">
        <div className="page-container">
          <h2 className="text-center text-lg">
            Trusted by students at top universities
          </h2>
          <LogoCloud />
        </div>
      </section>

      <section id="features" className="pt-20">
        <div className="page-container">
          <Features />
        </div>
      </section>

      <section className="pt-30">
        <div className="page-container py-20 text-center">
          <h2 className="text-center text-5xl font-medium lg:text-7xl">
            For students, by students
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-500 dark:text-neutral-300">
            We built MiniClue to help students learn lectures faster and
            understand them better. It&apos;s{" "}
            <HighlightText
              text="100% free to use"
              highlightColor="rgba(34, 197, 94, 0.3)"
              delay={100}
              style={{ fontWeight: "600" }}
            />{" "}
            - just plug in your API key and start mastering your coursework
            today.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                <span>Read the blog</span>
              </Link>
            </Button>
            <Button asChild variant="default" size="lg">
              <Link href="https://app.miniclue.com/auth/signup">
                <span>Start learning</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
