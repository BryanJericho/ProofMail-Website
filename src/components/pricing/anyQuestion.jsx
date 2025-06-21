import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const AnyQuestion = () => {
  return (
    <div className="mx-auto pt-4 pb-24 px-4 lg:px-10 text-[#111827] flex flex-col items-center justify-center text-center space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Any questions?
        </h3>
        <p className="text-base lg:text-lg text-gray-600">
          Get in touch with us, we're happy to help.
        </p>
      </div>

      <div>
        <Link href="/contact">
          <div className="inline-flex items-center gap-[3px] text-[#3B82F6] font-medium transition-all duration-300 hover:text-[#2563EB] group cursor-pointer text-base lg:text-lg capitalize">
            <span>Contact us</span>
            <FaArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
