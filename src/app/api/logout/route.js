import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function GET(request) {
  cookies().set('token', '', { maxAge: 0 });
  return NextResponse.json({
    success: true,
    message: "Logout successful",
  }, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json',
    },
  });
}
