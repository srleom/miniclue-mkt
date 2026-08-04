"use client";

import { DOWNLOAD_URL } from "@/components/header";
import { AppleIcon } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroCta() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-x-4 gap-y-3 sm:flex-row">
      <a
        href={DOWNLOAD_URL}
        className={cn(buttonVariants({ size: "lg" }), "gap-2")}
      >
        <AppleIcon className="size-4" />
        Download for Apple Silicon
      </a>
      <Button variant="outline" size="lg" onClick={() => scrollTo("features")}>
        See our features
      </Button>
    </div>
  );
}
