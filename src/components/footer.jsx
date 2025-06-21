"use client";

import React from "react";
import Image from "next/image";
import {
  legalLinks,
  quickLinks,
  socialLinks,
  supportLinks,
} from "@/static/footerData";

export const Footer = () => {
  return (
    <footer className="bg-blue-layered text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/Proofmail.png"
                alt="ProofMail Logo"
                width={180}
                height={180}
                className="rounded-lg"
              />
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Sign. Verify. Trust. ProofMail stops phishing with
              blockchain-backed email protection.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-blue-100 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">
                Stay Updated
              </h3>
              <p className="text-blue-100 text-sm">
                Get the latest security updates, blockchain insights, and
                anti-phishing tips delivered straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-white text-[#3B82F6] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 bg-gray-400/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white">
            <div className="text-sm">
              © {new Date().getFullYear()} ProofMail. All rights reserved.
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-2 lg:space-y-0 text-sm text-center lg:text-left">
              <span>Blockchain-Powered Email Security</span>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <span>Secured by</span>
                <span className="font-semibold">
                  Solana Blockchain Technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
