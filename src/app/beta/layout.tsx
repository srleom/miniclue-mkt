import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Beta | MiniClue",
  description: "Turn your lecture into your most powerful study guide",
};

export default function BetaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
