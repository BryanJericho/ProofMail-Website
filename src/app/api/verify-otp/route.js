import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";

export async function POST(request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const inputOTP = otp.toString().trim();

    console.log("Verifying OTP:", {
      email: normalizedEmail,
      otp: inputOTP,
      inputLength: inputOTP.length,
    });

    const otpQuery = query(
      collection(db, "otp"),
      where("email", "==", normalizedEmail),
      where("isUsed", "==", false)
    );

    const otpSnapshot = await getDocs(otpQuery);

    if (otpSnapshot.empty) {
      console.log("No OTP found for email:", normalizedEmail);
      return NextResponse.json(
        { error: "OTP not found or already used" },
        { status: 404 }
      );
    }

    let validOTPDoc = null;
    let validOTPData = null;

    console.log("Found OTP documents:", otpSnapshot.size);

    otpSnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const now = Timestamp.now();

      console.log("Checking OTP doc:", {
        id: docSnap.id,
        otp: data.otp,
        expiredAt: data.expiredAt.toDate(),
        isExpired: data.expiredAt.toMillis() <= now.toMillis(),
        isUsed: data.isUsed,
      });

      if (data.expiredAt.toMillis() > now.toMillis()) {
        validOTPDoc = docSnap;
        validOTPData = data;
      }
    });

    if (!validOTPDoc) {
      console.log("No valid (non-expired) OTP found");
      return NextResponse.json({ error: "OTP has expired" }, { status: 400 });
    }

    const dbOTP = validOTPData.otp.toString().trim();

    console.log("Comparing OTPs:", {
      input: inputOTP,
      database: dbOTP,
      match: dbOTP === inputOTP,
    });

    if (dbOTP !== inputOTP) {
      console.log("OTP mismatch:", {
        expected: dbOTP,
        received: inputOTP,
        expectedLength: dbOTP.length,
        receivedLength: inputOTP.length,
      });
      return NextResponse.json(
        { error: "Incorrect OTP code" },
        { status: 400 }
      );
    }

    await updateDoc(doc(db, "otp", validOTPDoc.id), {
      isUsed: true,
      usedAt: Timestamp.now(),
    });

    console.log("OTP verified successfully for:", normalizedEmail);

    return NextResponse.json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { error: "Failed to verify OTP" },
      { status: 500 }
    );
  }
}
