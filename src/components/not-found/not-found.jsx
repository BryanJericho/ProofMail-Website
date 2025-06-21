"use client";

import { FiHome } from "react-icons/fi";
import { useRouter } from "next/navigation";
import React from "react";

export const NotFoundComp = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 text-center">
      <div className="relative mb-6">
        <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-black text-[#3B82F6] select-none">
          404
        </h1>
      </div>

      <div className="max-w-2xl mx-auto space-y-4 mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827]">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4">
          Oops! The page you're looking for seems to be playing hide and seek.
          It might have moved to a new location or is temporarily unavailable.
        </p>
        <p className="text-sm sm:text-base text-gray-500">
          Don't worry, let's get you back on track!
        </p>
      </div>

      <button
        onClick={handleGoHome}
        className="group cursor-pointer px-8 py-3 bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[180px]"
      >
        <FiHome className="w-5 h-5 group-hover:animate-bounce" />
        <span>Back to Home</span>
      </button>
    </div>
  );
};
