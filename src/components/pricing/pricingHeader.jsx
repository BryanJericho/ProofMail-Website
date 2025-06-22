import { FaStar } from "react-icons/fa";

export const PricingHeader = () => {
  return (
    <div className="text-center mb-10 lg:mb-20">
      <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 bg-[#3B82F6]">
        <FaStar className="mr-2 text-xs sm:text-sm" />
        <span className="hidden sm:inline">
          Special Launch Offer - Simple Monthly Pricing
        </span>
        <span className="sm:hidden">Simple Pricing</span>
      </div>

      <h2 className="mb-4 lg:mb-6 text-[#111827] px-4">
        Choose Your Perfect Plan
      </h2>

      <p className="subHeading text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 lg:mb-8 px-4">
        Join thousands of satisfied customers who trust our platform to grow
        their business. Start with our free plan and upgrade anytime.
      </p>
    </div>
  );
};
