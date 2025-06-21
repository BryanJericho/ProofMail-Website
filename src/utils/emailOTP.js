export function otpVerificationEmail(otp) {
  return `
    <div style="font-family: Poppins, sans-serif; padding: 44px; background-color: #3b82f6; color: white;">
      <h2>Your OTP: <strong>${otp}</strong></h2>
      <p>Do not share this code with anyone. It is valid for 1 minute.</p>
    </div>
  `;
}
