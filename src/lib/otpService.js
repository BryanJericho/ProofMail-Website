import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Resend } from "resend";
import { generateOTP } from "@/utils/generateOTP.mjs";
import { otpVerificationEmail } from "@/utils/emailOTP";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOTP(email, expiresInMinutes = 1) {
  try {
    const otp = generateOTP();
    const now = Timestamp.now();

    const mailOptions = {
      from: `PROOFMAIL <${process.env.EMAIL_USER}>`,
      to: [email],
      subject: "Your Verification OTP Code",
      html: otpVerificationEmail(otp),
    };

    const { error } = await resend.emails.send(mailOptions);
    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send OTP email" };
    }

    const otpDoc = {
      email: email.toLowerCase().trim(),
      otp,
      createdAt: now,
      expiredAt: Timestamp.fromMillis(
        now.toMillis() + expiresInMinutes * 60000
      ),
      isUsed: false,
    };

    await addDoc(collection(db, "otp"), otpDoc);

    return { success: true };
  } catch (error) {
    console.error("Error in sendOTPAndSave:", error);
    return { success: false, error: "Failed to generate or save OTP" };
  }
}
