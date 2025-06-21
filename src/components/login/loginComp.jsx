"use client";

import React, { useState } from "react";
import {
  FiMail,
  FiLock,
  FiCheck,
  FiAlertCircle,
  FiLogIn,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

export const LoginComp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
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
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setMessage({
        type: "success",
        text: "Login successful! Redirecting...",
      });

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = form.email.trim() !== "" && form.password.trim() !== "";

  return (
    <div className="min-h-[80dvh] flex items-center justify-center p-4 lg:px-4 lg:py-10">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transition hover:shadow-3xl">
          <div className="text-center px-8 pt-8 pb-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-t-3xl">
            <h1 className="text-4xl font-bold">Sign in</h1>
            <p className="text-base opacity-90 mt-1">
              Log in to your account securely.
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
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  required
                  autoComplete="username"
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
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Your password"
                  required
                  autoComplete="current-password"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400 text-gray-800"
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

            <button
              type="submit"
              disabled={loading || !isFormValid}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <FiLogIn className="w-5 h-5" />
                  Sign in
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
