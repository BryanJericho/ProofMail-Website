import React from "react";
import { MdArrowForward } from "react-icons/md";

export default function EmailSubscribe() {
  return (
    <div className="px-2 md:px-4 lg:px-0">
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg max-w-3xl mx-auto text-center py-10 lg:py-20 px-4 lg:px-10 my-10">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
          Stay Updated
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-[#263238] mb-6 max-w-xl mx-auto">
          Stay ahead! Receive updates on new features, security alerts,
          blockchain insights and anti-phishing tips straight in your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="email@yourdomain.com"
            className="w-full sm:flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#3B82F6] text-[#111827] text-sm sm:text-base"
          />

          <button className="w-full sm:w-auto flex items-center justify-center gap-1 bg-[#3B82F6] text-white px-6 sm:px-4 py-2.5 sm:py-2 rounded-md hover:bg-blue-600 transition-colors text-sm sm:text-base cursor-pointer">
            Subscribe
            <MdArrowForward className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs md:text-sm text-gray-500 mt-3">
          No worries, we hate spam too!
        </p>
      </div>
    </div>
  );
}
