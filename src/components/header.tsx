"use client";
import { useScroll } from "@/hooks/use-scroll";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { Sparkle } from "lucide-react";
import Link from "next/link";

export const navLinks = [
  {
    label: "Blog",
    href: "/blog",
  },
];

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn("w-full border-b border-transparent", {
        "bg-background/95 supports-backdrop-filter:bg-background/50 backdrop-blur-sm":
          scrolled,
      })}
    >
      <nav className="page-container flex h-14 w-full items-center justify-between py-8">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-medium"
            aria-label="Homepage"
          >
            <Sparkle size={20} />
            <span>MiniClue</span>
          </Link>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link, i) => (
            <a
              className={buttonVariants({ variant: "link" })}
              href={link.href}
              key={i}
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline" className="ml-3" asChild>
            <Link href="https://app.miniclue.com/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="https://app.miniclue.com/auth/signup">
              Start learning
            </Link>
          </Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
