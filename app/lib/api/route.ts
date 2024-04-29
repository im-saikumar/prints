import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: Request, res: Response) {
  const data = { message: "This is a test API endpoint!" };

  return NextResponse.json(data);
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
