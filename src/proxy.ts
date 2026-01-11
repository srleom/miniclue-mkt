// next
import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/relay-xYmY/")) {
    const destinationHost = pathname.startsWith("/relay-xYmY/static/")
      ? "us-assets.i.posthog.com"
      : "us.i.posthog.com";

    const newUrl = new URL(
      pathname.replace("/relay-xYmY", ""),
      `https://${destinationHost}`,
    );

    const headers = new Headers(request.headers);
    headers.delete("cookie");
    headers.set("host", destinationHost);

    return NextResponse.rewrite(newUrl, {
      headers,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/relay-xYmY/:path*"],
};
