// middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url))
}

// Export the middleware for Next.js to use
export const config = {
  matcher: ["/api/:path*"], // Matches all routes under /api
};
