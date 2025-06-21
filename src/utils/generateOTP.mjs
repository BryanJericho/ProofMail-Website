import crypto from "crypto";

export const generateOTP = (length = 6) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";
  const randomBytes = crypto.randomBytes(length);

  for (let i = 0; i < length; i++) {
    result += characters.charAt(randomBytes[i] % charactersLength);
  }
  return result;
};

console.log("OTP generated:", generateOTP());
