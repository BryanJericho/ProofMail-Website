import { validateUserLogin } from "@/lib/firebase/userService";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SignJWT } from 'jose';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await validateUserLogin(email, password);

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credential" },
        { status: 401 }
      );
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ userId: user.id, wallet: user.wallet })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(secret);
    cookies().set("token", token, { httpOnly: true, secure: true, maxAge: 3600 });

    return NextResponse.json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.error("Login error:", error.message);
    return NextResponse.json(
      { error: "Login failed. Please try again." },
      { status: 500 }
    );
  }
}
