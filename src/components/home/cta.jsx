import Link from "next/link";
import React from "react";

export const CTA = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-[#F5F5F5] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:min-h-[35dvh]"
      style={{
        background: "rgba(59, 130, 246, 0.8)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[2.5rem] font-extrabold mb-4 sm:mb-6 leading-tight lg:leading-[3.2rem]">
          Ready to secure your identity?
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-xl mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
          Stay one step ahead of email threats. Our technology helps you verify
          every sender and protect your online presence.
        </p>
        <Link href="/register">
          <button className="bg-white px-8 sm:px-10 py-3 sm:py-3 rounded-full text-[#263238] text-sm sm:text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl cursor-pointer">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};
