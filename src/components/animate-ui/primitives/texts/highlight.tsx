"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";

import { useIsInView, type UseIsInViewOptions } from "@/hooks/use-is-in-view";
import { cn } from "@/lib/utils";

type HighlightTextProps = Omit<HTMLMotionProps<"span">, "children"> & {
  text: string;
  delay?: number;
  highlightColor?: string;
} & UseIsInViewOptions;

function HighlightText({
  ref,
  text,
  style,
  inView = true,
  inViewMargin = "0px",
  inViewOnce = true,
  transition = { duration: 1, ease: "easeInOut" },
  delay = 0,
  highlightColor = "rgba(34, 197, 94, 0.2)", // Default to a light green
  className,
  ...props
}: HighlightTextProps) {
  const { ref: localRef, isInView } = useIsInView(
    ref as React.Ref<HTMLElement>,
    {
      inView,
      inViewOnce,
      inViewMargin,
    },
  );

  return (
    <motion.span
      ref={localRef}
      data-slot="highlight-text"
      initial={{ backgroundSize: "0% 100%" }}
      animate={isInView ? { backgroundSize: "100% 100%" } : undefined}
      transition={{
        ...transition,
        delay: (transition?.delay ?? 0) + delay / 1000,
      }}
      style={{
        position: "relative",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline-block",
        backgroundImage: `linear-gradient(to right, ${highlightColor}, ${highlightColor})`,
        ...style,
      }}
      className={cn("relative inline-block bg-left bg-no-repeat", className)}
      {...props}
    >
      {text}
    </motion.span>
  );
}

export { HighlightText, type HighlightTextProps };
