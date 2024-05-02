import { NextResponse, NextRequest } from "next/server";
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from "next";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/about/:path*",
};

