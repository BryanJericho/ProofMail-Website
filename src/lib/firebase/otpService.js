export const sendOTPAndSave = async (email) => {
  try {
    const response = await fetch("/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Gagal mengirim OTP");
    }

    return data;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};

export const verifyOTP = async (email, otp) => {
  try {
    const response = await fetch("/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Gagal memverifikasi OTP");
    }

    return data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};

export const cleanExpiredOTPs = async () => {
  try {
    const now = Timestamp.now();
    const otpQuery = query(collection(db, "otp"), where("expiredAt", "<", now));

    const expiredOTPs = await getDocs(otpQuery);

    const deletePromises = expiredOTPs.docs.map(async (docSnap) => {
      await updateDoc(doc(db, "otp", docSnap.id), {
        isUsed: true,
      });
    });

    await Promise.all(deletePromises);

    console.log(`Cleaned ${expiredOTPs.size} expired OTPs`);
  } catch (error) {
    console.error("Error cleaning expired OTPs:", error);
  }
};
