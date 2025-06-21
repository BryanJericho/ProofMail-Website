"use client";

import { verifyOTP, sendOTPAndSave } from "@/lib/firebase/otpService";
import { createUser } from "@/lib/firebase/userService";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FiAlertCircle, FiCheck } from "react-icons/fi";
import { SuccessPopup } from "./successOTP";

export const OTPVerification = ({ registrationData, onBackToRegister }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [resendLoading, setResendLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockEndTime, setBlockEndTime] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const router = useRouter();
  const inputRefs = useRef([]);

  useEffect(() => {
    if (!registrationData) {
      onBackToRegister();
      return;
    }

    setCountdown(60);
    setCanResend(false);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [registrationData, onBackToRegister]);

  const handleOTPChange = (index, value) => {
    const cleanValue = value.replace(/[^a-zA-Z0-9]/g, "");

    if (cleanValue.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = cleanValue;
      setOtp(newOtp);

      if (cleanValue && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^a-zA-Z0-9]/g, "");

    if (pastedData.length <= 6) {
      const newOtp = [...otp];
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pastedData[i] || "";
      }
      setOtp(newOtp);

      const lastFilledIndex = Math.min(pastedData.length - 1, 5);
      if (pastedData.length < 6) {
        inputRefs.current[lastFilledIndex + 1]?.focus();
      } else {
        inputRefs.current[5]?.focus();
      }
    }
  };

  const handleFocus = (index) => {
    inputRefs.current[index]?.select();
  };

  const handleRedirectToHome = () => {
    try {
      sessionStorage.removeItem("registrationStep");
      sessionStorage.removeItem("registrationData");
    } catch (error) {
      console.error("Error clearing registration state:", error);
    }

    router.push("/");
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    if (!registrationData) {
      setMessage({ type: "error", text: "Registration data not found" });
      return;
    }

    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setMessage({ type: "error", text: "OTP must be 6 characters" });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      await verifyOTP(registrationData.email, otpString);
      await createUser(registrationData);
      setShowSuccessPopup(true);
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResend || !registrationData || isBlocked) return;

    setResendLoading(true);
    setMessage(null);

    try {
      await sendOTPAndSave(registrationData.email);

      const newResendCount = resendCount + 1;
      setResendCount(newResendCount);

      if (newResendCount >= 3) {
        const blockDuration =
          newResendCount === 3 ? 5 * 60 * 1000 : 60 * 60 * 1000;
        const blockEndTime = new Date(Date.now() + blockDuration);
        setBlockEndTime(blockEndTime);
        setIsBlocked(true);
        setCanResend(false);

        const blockMinutes = blockDuration / (60 * 1000);
        setMessage({
          type: "error",
          text: `Too many OTP requests. Please try again in ${blockMinutes} minutes.`,
        });

        return;
      }

      setMessage({
        type: "success",
        text: `A new OTP has been sent to your email (${4 - newResendCount} attempts left)`,
      });

      setOtp(["", "", "", "", "", ""]);
      setCountdown(60);
      setCanResend(false);
      inputRefs.current[0]?.focus();

      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setResendLoading(false);
    }
  };

  const formatBlockTime = (endTime) => {
    if (!endTime) return "";

    const now = new Date();
    const diff = Math.max(0, Math.floor((endTime - now) / 1000));

    if (diff >= 3600) {
      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      return `${hours} hours ${minutes} minutes`;
    } else {
      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;
      return `${minutes} minutes ${seconds} seconds`;
    }
  };

  if (!registrationData) {
    return null;
  }

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-xl">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Email Verification
            </h1>
            <p className="text-gray-600">
              We have sent an OTP code to your email:
            </p>
            <p className="font-semibold text-blue-600">
              {registrationData.email}
            </p>
          </div>

          {message && (
            <div
              className={`px-6 py-4 text-sm font-medium flex items-center gap-3 justify-center text-center ${
                message.type === "success"
                  ? "bg-green-50 text-green-700 border-b border-green-200"
                  : "bg-red-50 text-red-700 border-b border-red-200"
              }`}
            >
              {message.type === "success" ? (
                <FiCheck className="w-5 h-5 flex-shrink-0" />
              ) : (
                <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <span>{message.text}</span>
            </div>
          )}

          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                Enter OTP Code (6 characters)
              </label>

              <div className="flex justify-center gap-2 mb-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    onFocus={() => handleFocus(index)}
                    className="w-12 h-12 text-center text-black text-xl font-mono border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    maxLength={1}
                    autoComplete="off"
                  />
                ))}
              </div>

              <p className="text-xs text-gray-500 text-center">
                You can also paste the OTP directly
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !isOtpComplete}
              className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition duration-200 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Didn't receive the OTP code?
              </p>

              {isBlocked ? (
                <div className="text-red-600 text-sm">
                  <p className="font-medium">Temporarily blocked</p>
                  <p>Try again in: {formatBlockTime(blockEndTime)}</p>
                </div>
              ) : canResend ? (
                <div>
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    disabled={resendLoading}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm disabled:opacity-50"
                  >
                    {resendLoading ? "Sending..." : "Resend OTP"}
                  </button>
                  {resendCount > 0 && (
                    <p className="text-xs text-gray-500 mt-1">
                      Attempts left: {3 - resendCount}
                    </p>
                  )}
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-500">
                    You can resend in {countdown} seconds
                  </p>
                  {resendCount > 0 && (
                    <p className="text-xs text-gray-500 mt-1">
                      Attempts left: {3 - resendCount}
                    </p>
                  )}
                </div>
              )}
            </div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={onBackToRegister}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Back to Registration
            </button>
          </div>
        </div>
      </div>

      <SuccessPopup
        isOpen={showSuccessPopup}
        onRedirect={handleRedirectToHome}
      />
    </>
  );
};
