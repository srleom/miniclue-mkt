"use client";
import React, { SVGProps, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "motion/react";
import { cn } from "@/lib/utils";

const BANNER_STORAGE_KEY = "miniclue-banner-dismissed";

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
  isInitiallyDismissed = false,
}: {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
  isInitiallyDismissed?: boolean;
}) => {
  const [open, setOpen] = useState(!isInitiallyDismissed);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  const handleClose = () => {
    setOpen(false);
    document.cookie = `${BANNER_STORAGE_KEY}=true; path=/; max-age=31536000; SameSite=Lax`;
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hideOnScroll) {
      if (latest > 40) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
  });

  return (
    <AnimatePresence initial={false}>
      {open && isVisible && (
        <motion.div
          className={cn(
            "relative flex min-h-10 w-full items-center justify-center overflow-hidden bg-transparent px-4 py-1",
            className,
          )}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {children}

          <motion.button
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon className="text-foreground h-4 w-4" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
