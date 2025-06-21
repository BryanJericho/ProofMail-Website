"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FiDownload, FiUserPlus, FiLink, FiShield } from "react-icons/fi";

export const HowItWorksComp = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const equalizeHeights = () => {
      if (window.innerWidth >= 768) {
        cardsRef.current.forEach((card) => {
          if (card) card.style.height = "auto";
        });

        let maxHeight = 0;
        cardsRef.current.forEach((card) => {
          if (card) {
            const height = card.offsetHeight;
            if (height > maxHeight) maxHeight = height;
          }
        });

        cardsRef.current.forEach((card) => {
          if (card) card.style.height = `${maxHeight}px`;
        });
      } else {
        cardsRef.current.forEach((card) => {
          if (card) card.style.height = "auto";
        });
      }
    };

    equalizeHeights();
    window.addEventListener("resize", equalizeHeights);

    return () => window.removeEventListener("resize", equalizeHeights);
  }, []);
  const steps = [
    {
      number: "01",
      icon: <FiDownload className="w-8 h-8 text-[#3B82F6]" />,
      title: "Install Extension",
      description:
        "Download ProofMail extension from your browser's web store and add it to Chrome, Firefox, or Edge in just one click.",
    },
    {
      number: "02",
      icon: <FiUserPlus className="w-8 h-8 text-[#3B82F6]" />,
      title: "Create Your Account",
      description:
        "Register your account on ProofMail website to establish your unique digital identity in our secure ecosystem.",
    },
    {
      number: "03",
      icon: <FiLink className="w-8 h-8 text-[#3B82F6]" />,
      title: "Connect Solana Wallet",
      description:
        "Link your Solana wallet to enable blockchain verification technology that powers our advanced security system.",
    },
    {
      number: "04",
      icon: <FiShield className="w-8 h-8 text-[#3B82F6]" />,
      title: "Complete Email Protection",
      description:
        "Automatically sign outgoing emails and verify incoming messages with blockchain security to stop phishing attacks.",
    },
  ];

  return (
    <section className="py-24 md:py-28 lg:py-32 px-4 md:px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="headingPage text-[#111827] mb-6">How ProofMail Works</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transform your email security in four simple steps. Our Solana
          blockchain powered solution provides enterprise grade protection while
          maintaining the simplicity you need for everyday use.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 left-full transform -translate-y-1/2 z-0">
                <div className="flex items-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#3B82F6] to-blue-400"></div>
                  <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-[#3B82F6] ml-1"></div>
                </div>
              </div>
            )}

            <div
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10 flex flex-col"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>

              <div className="mb-6 mt-4">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-[#111827] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1 text-justify">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold text-[#111827] mb-6">
          See ProofMail In Action
        </h3>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Watch our comprehensive tutorial to see exactly how ProofMail protects
          your inbox and eliminates phishing attacks using Solana blockchain
          technology.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/eDqfg_LexCQ"
                title="ProofMail Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/register">
            <button className="bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              Get Started with ProofMail Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
