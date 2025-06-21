"use client";

import Link from "next/link";
import React from "react";
import { HiDownload } from "react-icons/hi";

export default function HeroComp() {
  return (
    <div className="bg-blue-layered relative bg-blue-layered min-h-screen flex items-center justify-center px-6 sm:px-6 lg:px-8 overflow-hidden py-28 md:mt-0">
      <div className="absolute inset-0 overflow-hidden">
        {/* Blockchain Network Nodes - Subtle but Visible */}
        <div className="absolute top-10 left-10 w-64 h-64 border border-white/15 rounded-full animate-pulse">
          <div className="absolute inset-4 border border-cyan-300/20 rounded-full">
            <div className="absolute inset-4 border border-white/10 rounded-full"></div>
          </div>
        </div>
        <div
          className="absolute top-20 right-20 w-96 h-96 border border-cyan-400/18 rounded-full animate-ping"
          style={{ animationDuration: "4s" }}
        >
          <div className="absolute inset-8 border border-white/12 rounded-full"></div>
        </div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 border border-indigo-300/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <div className="absolute inset-6 border border-cyan-200/15 rounded-full"></div>
        </div>

        {/* Hexagonal Grid Pattern - Subtle Accent */}
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 transform rotate-45 border border-white/18 animate-pulse bg-white/3"
          style={{ animationDelay: "2s" }}
        >
          <div className="absolute inset-2 border border-cyan-300/15 transform -rotate-45"></div>
        </div>
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 transform rotate-12 border border-cyan-300/22 animate-ping bg-cyan-400/5"
          style={{ animationDuration: "3s" }}
        >
          <div className="absolute inset-1 border border-white/15 transform -rotate-12"></div>
        </div>

        {/* Blockchain Connection Lines - Subtle */}
        <div
          className="absolute top-1/2 left-1/4 w-40 h-1 bg-gradient-to-r from-transparent via-white/18 to-transparent animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-28 h-1 bg-gradient-to-r from-transparent via-indigo-300/22 to-transparent animate-pulse transform rotate-45"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Crypto/Web3 Icons Background - Subtle Accent */}
        <div
          className="absolute top-1/6 right-1/4 w-16 h-16 border border-white/20 rounded-lg animate-ping transform rotate-45 bg-white/4"
          style={{ animationDuration: "2s" }}
        >
          <div className="absolute inset-2 bg-cyan-400/8 rounded-sm"></div>
        </div>
        <div
          className="absolute bottom-1/4 left-1/6 w-20 h-20 border border-cyan-300/25 rounded-full animate-pulse bg-cyan-500/6"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-300/35 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Digital Particles - Subtle Glow */}
        <div
          className="absolute top-1/6 left-3/4 w-3 h-3 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/6 right-3/4 w-2 h-2 bg-gradient-to-r from-white/35 to-cyan-300/35 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/6 w-4 h-4 bg-gradient-to-r from-indigo-400/25 to-cyan-400/25 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Additional Blockchain Network Visualization - Subtle */}
        <div
          className="absolute top-1/2 right-1/6 w-6 h-6 border border-white/22 rounded-full animate-pulse bg-white/4"
          style={{ animationDelay: "1.2s" }}
        >
          <div
            className="absolute inset-1 bg-cyan-400/20 rounded-full animate-ping"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
        <div
          className="absolute bottom-1/6 left-1/3 w-8 h-8 border border-indigo-300/18 rounded-full animate-pulse bg-indigo-400/6"
          style={{ animationDelay: "2.8s" }}
        >
          <div className="absolute inset-1 border border-white/12 rounded-full"></div>
        </div>

        {/* Geometric Blockchain Pattern - Subtle */}
        <div
          className="absolute top-1/5 left-1/2 w-12 h-12 border border-cyan-300/20 transform rotate-12 animate-ping bg-cyan-400/5"
          style={{ animationDuration: "4s" }}
        >
          <div className="absolute inset-2 border border-white/15 transform -rotate-12"></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

      <div className="relative z-10 container max-w-3xl lg:max-w-4xl 2xl:max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h2 className="!text-lg sm:!text-xl md:!text-2xl lg:!text-3xl font-medium text-blue-100/90 tracking-wide uppercase">
              Secure Email Identity
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F5F5F5] leading-tight ">
              Prove Your Identity and Keep Phishing Out of Your Inbox
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#F5F5F5]/90 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 ">
              Your emails carry a signature from your Solana wallet, proving
              it’s really you. Simple, secure, and blocks phishing by making
              fake senders easy to spot.
            </p>
            {/* <p className="text-lg sm:text-xl lg:text-2xl text-[#F5F5F5]/90 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 ">
              Send emails with proof of authenticity from your Solana wallet.
              Easy to use, secure, and ensures your message is received with
              full confidence.
            </p> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center pt-4  w-full max-w-md sm:max-w-none mx-auto">
            <Link href="/register">
              <button className="group relative px-8 py-4 bg-white text-[#263238] font-semibold md:text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 hover:bg-blue-50 w-full sm:min-w-[200px] sm:w-auto overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started</span>
              </button>
            </Link>

            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold md:text-lg rounded-xl border border-white/30 hover:bg-white/20 hover:border-cyan-300/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 w-full sm:min-w-[200px] sm:w-auto relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="flex items-center justify-center gap-2 relative z-10">
                <HiDownload className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                Download Extension
              </span>
            </button>
          </div>

          <div className="pt-4  px-4 sm:px-0">
            <p className="text-white/70 text-base lg:text-lg mb-6">
              Trusted by developers worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-80 text-sm md:text-base">
              <div className="flex items-center gap-2 text-white/80 transition-colors duration-300">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-medium">Solana Network</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 transition-colors duration-300">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Secure Signature</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 transition-colors duration-300">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Verified Identity</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 transition-colors duration-300">
                <div className="w-4 h-4 border border-current rounded-sm flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                </div>
                <span className="font-medium">Decentralized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
