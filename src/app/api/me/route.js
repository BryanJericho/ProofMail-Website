import { NextResponse } from "next/server";
import { getUserByPublicKey } from "@/lib/firebase/userService";
import { jwtVerify } from "jose";

export async function GET(request) {
  try {
    const token = request.cookies.get("token")?.value;
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    console.log("Payload:", payload);

    const result = await getUserByPublicKey(payload.wallet);

    return NextResponse.json({
        success: true,
        user: result,
    }, { status: 200, headers: corsHeaders });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Validation failed" },
      { status: 400, headers: corsHeaders }
    );
  }
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://mail.google.com",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}
