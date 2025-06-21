"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar3 = () => {
  return (
    <nav className="bg-[#f0f4f7]/90 backdrop-blur-md shadow-sm py-2 px-6 md:px-20">
      <div className="w-full mx-auto flex items-center h-16">
        <Link href="/">
          <Image
            src="/Proofmail2.png"
            alt="ProofMail Logo"
            width={120}
            height={120}
            className="rounded-lg"
            priority
          />
        </Link>
      </div>
    </nav>
  );
};
