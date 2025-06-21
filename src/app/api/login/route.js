import { validateUserLogin } from "@/lib/firebase/userService";
import { NextResponse } from "next/server";

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
