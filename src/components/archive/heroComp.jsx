import React from "react";
import { HiDownload } from "react-icons/hi";
import "@/styles/home/hero/hero.css";

export const HeroComp = () => {
  return (
    <div className="bg-blue-layered hero min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h2 className="text-lg sm:text-xl font-medium text-blue-100/90 tracking-wide uppercase">
              Secure Email Identity
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Earn Instant Trust with{" "}
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Every Email
              </span>{" "}
              You Send
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Send emails with proof of authenticity from your Solana wallet.
              Easy to use, secure, and ensures your message is received with
              full confidence.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group relative px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-blue-50 min-w-[200px]">
              <span className="relative z-10">Get Started</span>
            </button>

            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border border-white/30 hover:bg-white/20 hover:border-white/40 transform hover:-translate-y-1 transition-all duration-300 min-w-[200px]">
              <span className="flex items-center justify-center gap-2">
                <HiDownload className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Download Extension
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12">
            <p className="text-white/70 text-sm mb-6">
              Trusted by developers worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Solana Network</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">
                  End-to-End Encrypted
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Verified Identity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
