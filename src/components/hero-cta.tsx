"use client";

import { Button } from "@/components/ui/button";

export function HeroCta() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-x-4 gap-y-3 sm:flex-row">
      <Button size="lg" onClick={() => scrollTo("waitlist")}>
        Join the waitlist
      </Button>
      <Button variant="outline" size="lg" onClick={() => scrollTo("features")}>
        See our features
      </Button>
    </div>
  );
}
