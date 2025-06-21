"use client";

import contactReasons from "@/static/contactReasons";
import Link from "next/link";
import React, { useState } from "react";
import {
  FiMessageSquare,
  FiShield,
  FiUsers,
  FiSend,
  FiCheck,
  FiChevronDown,
  FiDownload,
  FiLogIn,
} from "react-icons/fi";

export const ContactComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
    }
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.subject.trim() &&
    formData.message.trim() &&
    formData.category.trim();

  return (
    <div className="min-h-screen py-24 md:py-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="headingPage mb-6 text-[#111827]">Get in Touch</h1>
          <p className="subHeading text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Have questions about ProofMail's blockchain-powered email
            verification? Need help securing your inbox from phishing attacks?
            We're here to help you take control of your email security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-16">
          {contactReasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4 group-hover:bg-blue-100 transition-colors">
                <div className="text-[#3B82F6]">{reason.icon}</div>
              </div>
              <h3 className="font-semibold mb-2 text-[#111827]">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="md:mt-20 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-[#111827]">
                Let's Secure Your Email Together
              </h2>
              <p className="subHeading text-gray-600 text-lg leading-relaxed mb-6">
                ProofMail is revolutionizing email security through Solana
                blockchain verification. Whether you're experiencing phishing
                attacks, need technical support, or want to learn more about our
                decentralized approach to email authentication, we're ready to
                assist.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg flex-shrink-0">
                  <FiShield className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[#111827]">
                    Advanced Security
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our blockchain-based verification ensures authentic email
                    communication
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg flex-shrink-0">
                  <FiUsers className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[#111827]">
                    Community Driven
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Join thousands of users protecting themselves from phishing
                    attacks
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg flex-shrink-0">
                  <FiMessageSquare className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[#111827]">
                    Responsive Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our team typically responds within 24 hours to all inquiries
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl px-4 md:px-6 py-8 lg:p-8 border border-gray-100 shadow-lg h-full flex flex-col justify-center item-center">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mx-auto mb-6">
                  <FiCheck className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#111827]">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-[#111827]">
                    Send us a Message
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#111827]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-[#111827]"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#111827]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-[#111827]"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium mb-2 text-[#111827]">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      onClick={toggleCategory}
                      onBlur={() => setIsCategoryOpen(false)}
                      className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-[#111827] appearance-none"
                    >
                      <option value="general">General Support</option>
                      <option value="security">Security Concerns</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="feature">Feature Request</option>
                      <option value="technical">Technical Issue</option>
                    </select>
                    <FiChevronDown
                      className={`absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-transform duration-300 ${
                        isCategoryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#111827]">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-[#111827]"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#111827]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none resize-none text-[#111827]"
                    placeholder="Tell us more about your inquiry or how we can assist you..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isFormValid
                      ? "bg-[#3B82F6] text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <FiSend className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 md:mt-20 text-center rounded-3xl pt-10 md:pt-20">
          <h2 className="font-bold mb-4 text-[#111827]">
            Ready to Secure Your Email?
          </h2>
          <p className="subHeading text-gray-600 mb-8 max-w-3xl mx-auto">
            Don't wait for the next phishing attack. Install ProofMail today and
            experience the future of verified email communication powered by
            Solana blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center text-sm sm:text-base gap-2 px-8 py-4 bg-[#3B82F6] rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <span>Install Extension</span>
              <FiDownload className="w-5 h-5" />
            </button>
            <Link href="/register">
              <button className="flex items-center justify-center text-sm sm:text-base gap-2 px-8 py-4 text-[#3B82F6] border-[#3B82F6] bg-transparent rounded-xl font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <span>Sign Up</span>
                <FiLogIn className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
