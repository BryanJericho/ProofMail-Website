import { FaStar } from "react-icons/fa";

export const PricingHeader = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="text-center mb-10 lg:mb-20">
      <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 bg-[#3B82F6]">
        <FaStar className="mr-2 text-xs sm:text-sm" />
        <span className="hidden sm:inline">
          Special Launch Offer - Save up to 40%
        </span>
        <span className="sm:hidden">Save up to 40%</span>
      </div>

      <h2 className="mb-4 lg:mb-6 text-[#111827] px-4">
        Choose Your Perfect Plan
      </h2>

      <p className="subHeading text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 lg:mb-8 px-4">
        Join thousands of satisfied customers who trust our platform to grow
        their business. Start with our free plan and upgrade anytime.
      </p>

      <div className="flex items-center justify-center mb-2 md:mb-8">
        <div className="bg-white rounded-2xl p-1.5 sm:p-2 shadow-lg border max-w-xs sm:max-w-none">
          <div className="flex items-center">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-[#3B82F6] shadow-lg"
                  : "text-gray-600 hover:text-[#111827]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 relative ${
                billingCycle === "annual"
                  ? "bg-[#3B82F6] shadow-lg"
                  : "text-gray-600 hover:text-[#111827]"
              }`}
            >
              Annual
              <span className="absolute -top-3 -right-5 lg:-right-6 bg-red-500 text-[10px] md:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-bold !text-[#f8fafc]">
                SAVINGS
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
