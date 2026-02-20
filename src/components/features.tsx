"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HighlightText } from "./animate-ui/primitives/texts/highlight";

export default function Features() {
  const features = [
    {
      title: "Read and chat in one view",
      description:
        "Our split-screen interface keeps your lecture on the left and AI tutor on the right.",
      skeleton: <SplitScreenInterface />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Instant context, zero effort",
      description: (
        <>
          Type{" "}
          <code className="rounded-md bg-neutral-100 px-1 py-0.5 font-mono text-sm dark:bg-neutral-800">
            @Current Slide
          </code>{" "}
          to instantly share a screenshot of exactly what you’re looking at.
        </>
      ),
      skeleton: <InstantContext />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Quiz yourself on the fly",
      description:
        "Challenge your understanding by asking MiniClue to test you on the current lecture.",
      skeleton: <Quiz />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Bring your preferred models",
      description:
        "MiniClue supports models from all major providers including Gemini, OpenAI, Anthropic, and xAI.",
      skeleton: <ModelProviders />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 mx-auto max-w-7xl">
      <div className="px-8">
        <h4 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-black lg:text-5xl lg:leading-tight dark:text-white">
          Study{" "}
          <HighlightText
            text="smarter"
            highlightColor="rgba(59, 130, 246, 0.2)"
            delay={100}
          />
          , not harder
        </h4>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 lg:text-base dark:text-neutral-300">
          Everything you need to master your lecture, built into one seamless
          workspace.
        </p>
      </div>

      <div className="relative">
        <div className="mt-12 grid grid-cols-1 rounded-md lg:grid-cols-6 xl:border dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`relative overflow-hidden p-4 sm:p-8`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-auto max-w-5xl text-left text-xl tracking-tight text-black md:text-2xl md:leading-snug dark:text-white">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-4xl text-left text-sm md:text-base",
        "text-center font-normal text-neutral-500 dark:text-neutral-300",
        "mx-0 my-2 max-w-sm text-left md:text-sm",
      )}
    >
      {children}
    </p>
  );
};

export const SplitScreenInterface = () => {
  return (
    <div className="mt-5 w-full">
      <Image
        src="/home/split-screen.png"
        alt="Dual screen"
        width={1400}
        height={800}
        className="h-auto w-full rounded-md shadow-md blur-none transition-all duration-200 group-hover/image:blur-md"
        priority
      />
    </div>
  );
};

export const InstantContext = () => {
  return (
    <div className="mt-5 w-full">
      <Image
        src="/home/instant-context.png"
        alt="Instant context"
        width={1400}
        height={800}
        className="h-auto w-full rounded-md shadow-md blur-none transition-all duration-200 group-hover/image:blur-md"
        priority
      />
    </div>
  );
};

export const Quiz = () => {
  return (
    <div className="mt-5 w-full">
      <Image
        src="/home/quiz.png"
        alt="Quiz"
        width={1400}
        height={800}
        className="h-auto w-full rounded-md shadow-md blur-none transition-all duration-200 group-hover/image:blur-md"
        priority
      />
    </div>
  );
};

export const ModelProviders = () => {
  return (
    <div className="mt-5 w-full">
      <Image
        src="/home/model-providers.png"
        alt="Providers"
        width={1400}
        height={800}
        className="h-auto w-full rounded-md shadow-md blur-none transition-all duration-200 group-hover/image:blur-md"
        priority
      />
    </div>
  );
};
