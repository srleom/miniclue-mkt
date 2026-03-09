import Image from "next/image";
import Link from "next/link";
import { HighlightText } from "@/components/animate-ui/primitives/texts/highlight";
import Features from "@/components/features";
import LogoCloud from "@/components/logo-cloud";
import { Button } from "@/components/ui/button";

export const metadata = {
	title: "Home | MiniClue",
	description: "Turn any document into an interactive conversation",
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
						<span className="text-foreground text-sm">Now on desktop</span>
					</Button>

					<h1 className="mx-auto mb-8 max-w-2xl text-5xl leading-14 font-medium sm:text-6xl sm:leading-17">
						Read and chat with any document,{" "}
						<HighlightText
							text="privately"
							highlightColor="rgba(168, 85, 247, 0.25)"
							delay={100}
						/>
					</h1>
					<p className="text-muted-foreground mx-auto mb-10 max-w-xl">
						MiniClue is the desktop app that gives you instant AI answers for
						any document, privately. Your files never leave your machine.
					</p>

					<div className="flex flex-col items-center justify-center gap-x-4 gap-y-3 sm:flex-row">
						<Button asChild variant="default" size="lg">
							<Link href="/download">Download (it&apos;s free!)</Link>
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
							src="/home/hero.png"
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
						Trusted by students and professionals worldwide
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
					<h2 className="text-center text-5xl max-w-md  mx-auto font-medium lg:max-w-2xl lg:text-7xl">
						Built for anyone who reads and{" "}
						<HighlightText
							text="thinks"
							highlightColor="rgba(34, 197, 94, 0.3)"
							delay={100}
						/>{" "}
					</h2>

					{/* <p className="mx-auto mt-6 max-w-2xl text-neutral-500 dark:text-neutral-300">
						We built MiniClue because reading and understanding should happen in
						the same place — with your data staying exactly where it belongs.
						It&apos;s{" "}
						<HighlightText
							text="100% free to use"
							highlightColor="rgba(34, 197, 94, 0.3)"
							delay={100}
							style={{ fontWeight: "600" }}
						/>{" "}
						— just plug in your API key and start today.
					</p> */}

					<div className="mt-12 flex flex-wrap justify-center gap-3">
						<Button asChild variant="default" size="lg">
							<Link href="#">
								<span>Download (it&apos;s free!)</span>
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="/blog">
								<span>Read the blog</span>
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
