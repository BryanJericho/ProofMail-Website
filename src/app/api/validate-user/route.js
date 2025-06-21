import { NextResponse } from "next/server";
import { validateUserRegistration } from "@/lib/firebase/userService";

export async function POST(request) {
  try {
    const body = await request.json();

    const result = await validateUserRegistration(body);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Validation failed" },
      { status: 400 }
    );
  }
}
