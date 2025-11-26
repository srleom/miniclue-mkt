import Image from "next/image";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Private Beta | MiniClue",
  description: "Turn your lecture into your most powerful study guide",
};

export default function BetaPage() {
  return (
    <>
      <section className="pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Button className="hover:bg-background dark:hover:border-t-border bg-muted mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border px-4 py-2 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
            <span className="relative flex size-2">
              <span className="bg-chart-3 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-chart-2 relative inline-flex size-2 rounded-full"></span>
            </span>
            <span className="text-foreground text-sm">
              Private Beta: You&apos;re invited!
            </span>
          </Button>

          <h1 className="mx-auto mb-8 max-w-4xl text-5xl leading-14 font-medium sm:text-6xl sm:leading-17">
            Turn your lecture slides into your most powerful study guide
          </h1>
          <p className="text-muted-foreground mx-auto mb-10 max-w-lg text-lg sm:text-xl">
            Go from a dense lecture PDF to slide-by-slide explanations and
            summaries in minutes.
          </p>

          <div className="flex flex-col items-center justify-center gap-x-4 gap-y-3 sm:flex-row">
            <Button asChild variant="default" size="lg">
              <a href="https://app.miniclue.com/auth/signup">Start learning</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/beta#features">See our features</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src="/assets/hero_image.png"
              alt="MiniClue"
              width={1920}
              height={1080}
              className="w-full object-top"
              priority
            />
          </div>
        </div>
      </section>

      <section className="pt-30">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-lg font-medium">
            Trusted by students at top universities
          </h2>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-10 sm:gap-x-24">
            <Image
              src="/assets/ntu_logo.png"
              alt="NTU Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
            <Image
              src="/assets/nus_logo.png"
              alt="NUS Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
            <Image
              src="/assets/smu_logo.png"
              alt="SMU Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
            <Image
              src="/assets/oxford_logo.svg"
              alt="Oxford Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
            <Image
              src="/assets/cambridge_logo.png"
              alt="Cambridge Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
          </div>
        </div>
      </section>

      <section id="features" className="pt-30">
        <Features />
      </section>

      <section className="pt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-center text-5xl font-medium md:text-6xl lg:text-7xl">
            Learn faster.
            <br /> Understand better.
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild variant="default" size="lg">
              <a href="https://app.miniclue.com/auth/signup">
                <span>Start learning</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
