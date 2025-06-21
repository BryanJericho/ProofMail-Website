import { sendOTP } from "@/lib/otpService";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const result = await sendOTP(email);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "OTP has been sent to your email",
    });
  } catch (error) {
    console.error("Error in /api/send-otp:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
