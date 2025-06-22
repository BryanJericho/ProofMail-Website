import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    cookieStore.set("name", "value");

    if (!token) {
      return NextResponse.json({ error: "No token found" }, { status: 401 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    return NextResponse.json({
      success: true,
      user: { userId: payload.userId, wallet: payload.wallet },
    });
  } catch (error) {
    console.error("Auth check error:", error.message);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
