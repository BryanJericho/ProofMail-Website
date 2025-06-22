import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  const cookieStore = await cookies();
  cookieStore.set("token", "", { maxAge: 0 });

  return NextResponse.json(
    {
      success: true,
      message: "Logout successful",
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
    }
  );
}

export async function POST() {
  try {
    const cookieStore = await cookies();

    cookieStore().set("token", "", {
      httpOnly: true,
      secure: true,
      maxAge: 0,
      path: "/",
    });

    return NextResponse.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error.message);
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
