"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isPrivateBeta = pathname.startsWith("/beta");

  if (isPrivateBeta) {
    return (
      <Navbar
        logoLink="/beta"
        menu={[]}
        auth={{
          login: {
            title: "Login",
            url: "https://app.miniclue.com/auth/login",
          },
          signup: {
            title: "Start learning",
            url: "https://app.miniclue.com/auth/signup",
          },
        }}
      />
    );
  }

  return (
    <Navbar
      logoLink="/"
      menu={[]}
      auth={{
        login: { title: "", url: "" },
        signup: { title: "Join waitlist", url: "/#waitlist" },
      }}
    />
  );
}
