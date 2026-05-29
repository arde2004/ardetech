import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const password = body?.password;

  const correctPassword = process.env.ADMIN_PASSWORD;

  if (!correctPassword) {
    return NextResponse.json(
      { message: "Password admin non configurata." },
      { status: 500 }
    );
  }

  if (password !== correctPassword) {
    return NextResponse.json(
      { message: "Password non corretta." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set("ardetech_admin_auth", "ok", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}