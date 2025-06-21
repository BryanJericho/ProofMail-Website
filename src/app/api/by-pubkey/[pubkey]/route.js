import { NextResponse } from "next/server";
import { getUserByPublicKey } from "@/lib/firebase/userService";

export async function GET(request, { params }) {
  try {
    const { pubkey } = await params;

    if (!pubkey) {
      return NextResponse.json(
        { error: "Public key is required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const result = await getUserByPublicKey(pubkey);

    return NextResponse.json(result, { status: 200, headers: corsHeaders });
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
