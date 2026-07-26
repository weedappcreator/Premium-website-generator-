import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Route weedkerwing.is-a.dev to the portfolio page
  if (hostname.includes("weedkerwing.is-a.dev")) {
    // Root → /weed-kerwing
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/weed-kerwing", request.url));
    }
    // Any other path (e.g. /images/*) passes through normally
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip static files and API routes except for the root
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
};
