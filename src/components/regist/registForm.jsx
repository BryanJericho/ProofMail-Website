"use client";

import { sendOTPAndSave } from "@/lib/firebase/otpService";
import connectWallet from "@/utils/connectPhantomWallet";
import React, { useState } from "react";
import {
  FiMail,
  FiUser,
  FiCheck,
  FiAlertCircle,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { FaWallet } from "react-icons/fa6";

export const RegistForm = ({ onRegistrationSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    wallet: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      if (form.password !== form.confirmPassword) {
        throw new Error("Passwords do not match!");
      }

      const validateResponse = await fetch("/api/validate-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const validateData = await validateResponse.json();

      if (!validateResponse.ok) {
        throw new Error(validateData.error);
      }

      await sendOTPAndSave(form.email);

      setMessage({
        type: "success",
        text: "OTP has been sent to your email. Please check your email and enter the OTP code.",
      });

      setTimeout(() => {
        onRegistrationSuccess(form);
      }, 2000);
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.password.trim() !== "" &&
    form.confirmPassword.trim() !== "" &&
    form.wallet.trim() !== "" &&
    termsAccepted &&
    form.password === form.confirmPassword;

  return (
    <div className="min-h-[90dvh] flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transition hover:shadow-3xl">
          <div className="text-center px-8 pt-8 pb-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-t-3xl">
            <h1 className="text-2xl font-bold">Secure Registration</h1>
            <p className="text-sm opacity-90 mt-1">
              Protect your email identity and connect your wallet securely.
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

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400 text-gray-800"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@yourdomain.com"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400 text-gray-800"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPasswords ? "text" : "password"}
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Your password"
                  required
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400 text-gray-800"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords(!showPasswords)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPasswords ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPasswords ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat your password"
                  required
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400 text-gray-800"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords(!showPasswords)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPasswords ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {form.confirmPassword &&
                form.password &&
                form.confirmPassword !== form.password && (
                  <p className="mt-1 text-sm text-red-600">
                    Passwords do not match.
                  </p>
                )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phantom Wallet
              </label>
              <button
                type="button"
                onClick={() => connectWallet(setForm, setMessage)}
                className={`w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-semibold transition cursor-pointer ${
                  form.wallet
                    ? "bg-green-50 text-green-700 border border-green-300"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                <FaWallet className="w-5 h-5" />
                {form.wallet ? "Wallet Connected" : "Connect Phantom Wallet"}
              </button>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <span className="text-blue-600 hover:text-blue-800 hover:underline font-medium cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-blue-600 hover:text-blue-800 hover:underline font-medium cursor-pointer">
                  Privacy Policy
                </span>
                .
              </label>
            </div>

            <button
              type="submit"
              disabled={loading || !isFormValid}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending OTP...
                </>
              ) : (
                <>
                  <FiMail className="w-5 h-5" />
                  Send OTP
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
