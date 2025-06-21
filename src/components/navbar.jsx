"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const navLinks = [
    { name: "How it Works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("/api/check", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Auth check error:", error);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setIsLoggedIn(false);
        setIsMobileMenuOpen(false);
        router.push("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                         ${
                           isScrolled || isMobileMenuOpen
                             ? "bg-white/95 backdrop-blur-xl shadow-lg"
                             : "bg-transparent"
                         }`}
        style={{
          borderBottom:
            isScrolled || isMobileMenuOpen
              ? "1px solid rgba(156, 163, 175, 0.2)"
              : "1px solid transparent",
          transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="max-w-7xl mx-auto py-2 lg:py-1 px-6 md:px-14 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <div className="relative w-full h-full">
                <Link href="/">
                  <Image
                    src={
                      isScrolled || isMobileMenuOpen
                        ? "/Proofmail2.png"
                        : "/Proofmail.png"
                    }
                    alt="ProofMail Logo"
                    width={120}
                    height={120}
                    className="rounded-lg"
                  />
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`px-4 py-2 rounded-lg text-sm xl:text-base font-medium transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105
                                  ${
                                    isScrolled || isMobileMenuOpen
                                      ? "text-gray-700 hover:text-[#3B82F6] hover:bg-blue-50"
                                      : "text-gray-200 hover:text-white hover:bg-white/10"
                                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              {!isLoading && (
                <>
                  {isLoggedIn ? (
                    <>
                      <Link href="/dashboard">
                        <button
                          className={`px-4 py-2 text-sm xl:text-base font-medium rounded-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                                          ${
                                            isScrolled || isMobileMenuOpen
                                              ? "text-gray-700 hover:text-[#3B82F6] hover:bg-blue-50"
                                              : "text-gray-200 hover:text-white hover:bg-white/10"
                                          } cursor-pointer hover:scale-105`}
                        >
                          Dashboard
                        </button>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className={`relative overflow-hidden px-6 py-2.5 rounded-lg font-semibold text-sm xl:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 transition-all duration-500 ease-out text-gray-800
                            ${isScrolled ? "bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white" : "hover:text-[#3B82F6] hover:bg-blue-50 bg-white"}
                            cursor-pointer`}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login">
                        <button
                          className={`px-4 py-2 text-sm xl:text-base font-medium rounded-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                                              ${
                                                isScrolled || isMobileMenuOpen
                                                  ? "text-gray-700 hover:text-[#3B82F6]"
                                                  : "text-gray-200 hover:text-white"
                                              } cursor-pointer hover:scale-105`}
                        >
                          Sign in
                        </button>
                      </Link>
                      <Link href="/register">
                        <button
                          className={`relative overflow-hidden px-6 py-2.5 rounded-lg font-semibold text-sm xl:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 transition-all duration-500 ease-out
                            ${isScrolled ? "text-white" : "text-gray-800 bg-white"}
                            cursor-pointer`}
                        >
                          <span className="relative z-10">Sign up free</span>
                          <span
                            className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                              isScrolled ? "opacity-100" : "opacity-0"
                            } bg-gradient-to-r from-[#3B82F6] to-[#2563EB]`}
                          ></span>
                        </button>
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 relative z-50 rounded-lg hover:bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`absolute h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out transform-gpu
                    ${
                      isScrolled || isMobileMenuOpen
                        ? "bg-gray-900"
                        : "bg-white"
                    }
                    ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-0"
                        : "-translate-y-2"
                    }`}
                ></span>

                <span
                  className={`absolute h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out transform-gpu
                    ${
                      isScrolled || isMobileMenuOpen
                        ? "bg-gray-900"
                        : "bg-white"
                    }
                    ${
                      isMobileMenuOpen
                        ? "opacity-0 scale-0"
                        : "opacity-100 scale-100"
                    }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out transform-gpu
                    ${
                      isScrolled || isMobileMenuOpen
                        ? "bg-gray-900"
                        : "bg-white"
                    }
                    ${
                      isMobileMenuOpen
                        ? "-rotate-45 translate-y-0"
                        : "translate-y-2"
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed left-0 right-0 z-40 overflow-hidden ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
        style={{
          top: "5rem",
          maxHeight: isMobileMenuOpen ? "500px" : "0",
          opacity: isMobileMenuOpen ? "1" : "0",
          transition: isMobileMenuOpen
            ? "max-height 0.5s ease-out, opacity 0.4s ease-out"
            : "max-height 0.8s ease-in, opacity 1s ease-in",
          transitionDelay: isMobileMenuOpen ? "0s" : "0.2s",
        }}
      >
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            transition: isMobileMenuOpen
              ? "opacity 0.5s cubic-bezier(0.4,0,0.2,1)"
              : "opacity 1s cubic-bezier(0.4,0,0.8,1)",
          }}
        ></div>

        <div
          className={`relative bg-white/95 backdrop-blur-xl shadow-xl transform`}
          style={{
            borderTop: "1px solid rgba(156, 163, 175, 0.2)",
            transformOrigin: "top center",
            transform: isMobileMenuOpen
              ? "translateY(0) scaleY(1)"
              : "translateY(-100%) scaleY(0.9)",
            opacity: isMobileMenuOpen ? 1 : 0,
            transition: isMobileMenuOpen
              ? "all 0.5s cubic-bezier(0.4,0,0.2,1)"
              : "all 0.8s cubic-bezier(0.4,0,0.8,1)",
          }}
        >
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-[#3B82F6] hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-center transform"
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen
                    ? "translateY(0) scale(1)"
                    : "translateY(-10px) scale(0.98)",
                  transitionDelay: isMobileMenuOpen
                    ? `${(index + 1) * 100}ms`
                    : `${(navLinks.length - index) * 50 + 200}ms`,
                  transitionDuration: isMobileMenuOpen ? "300ms" : "600ms",
                  transitionTimingFunction: "ease-in-out",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="px-4 pb-6 space-y-3">
            {!isLoading && (
              <>
                {isLoggedIn ? (
                  <>
                    <Link href="/dashboard">
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full py-3 text-gray-700 hover:text-[#3B82F6] hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium border border-gray-200 transform mb-3"
                        style={{
                          opacity: isMobileMenuOpen ? 1 : 0,
                          transform: isMobileMenuOpen
                            ? "translateY(0) scale(1)"
                            : "translateY(-10px) scale(0.98)",
                          transitionDelay: isMobileMenuOpen ? "500ms" : "150ms",
                          transitionDuration: isMobileMenuOpen
                            ? "300ms"
                            : "600ms",
                          transitionTimingFunction: "ease-in-out",
                        }}
                      >
                        Dashboard
                      </button>
                    </Link>

                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-out"
                      style={{
                        opacity: isMobileMenuOpen ? 1 : 0,
                        transform: isMobileMenuOpen
                          ? "translateY(0) scale(1)"
                          : "translateY(-10px) scale(0.98)",
                        transitionDelay: isMobileMenuOpen ? "600ms" : "50ms",
                        transitionDuration: isMobileMenuOpen
                          ? "300ms"
                          : "600ms",
                        transitionTimingFunction: "ease-in-out",
                      }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full py-3 text-gray-700 hover:text-[#3B82F6] hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium border border-gray-200 transform"
                        style={{
                          opacity: isMobileMenuOpen ? 1 : 0,
                          transform: isMobileMenuOpen
                            ? "translateY(0) scale(1)"
                            : "translateY(-10px) scale(0.98)",
                          transitionDelay: isMobileMenuOpen ? "500ms" : "150ms",
                          transitionDuration: isMobileMenuOpen
                            ? "300ms"
                            : "600ms",
                          transitionTimingFunction: "ease-in-out",
                        }}
                      >
                        Login
                      </button>
                    </Link>
                    <Link href="/register">
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-out"
                        style={{
                          opacity: isMobileMenuOpen ? 1 : 0,
                          transform: isMobileMenuOpen
                            ? "translateY(0) scale(1)"
                            : "translateY(-10px) scale(0.98)",
                          transitionDelay: isMobileMenuOpen ? "600ms" : "50ms",
                          transitionDuration: isMobileMenuOpen
                            ? "300ms"
                            : "600ms",
                          transitionTimingFunction: "ease-in-out",
                        }}
                      >
                        Get Extension
                      </button>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
