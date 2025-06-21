import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  try {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = jwtVerify(token, secret);

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard"],
};
