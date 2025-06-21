import { FaFire } from "react-icons/fa";
import { PriceDisplay } from "./priceDisplay";
import { FeaturesList } from "./featureList";

export const PricingCard = ({ plan, billingCycle }) => {
  return (
    <div
      className={`relative bg-white rounded-2xl lg:rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${
        plan.popular
          ? "lg:transform lg:scale-105 ring-2 lg:ring-4 ring-[#3B82F6] ring-opacity-50"
          : "hover:scale-102"
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 lg:px-6 py-1.5 lg:py-2 rounded-b-2xl bg-[#3B82F6] text-white text-xs lg:text-sm font-bold tracking-wide">
              <FaFire className="mr-1.5 lg:mr-2 text-xs lg:text-sm" />
              <span className="hidden sm:inline">BEST VALUE</span>
              <span className="sm:hidden">POPULAR</span>
            </div>
          </div>
        </div>
      )}

      <div
        className={`p-6 lg:p-8 ${plan.popular ? "pt-12 lg:pt-16" : "pt-6 lg:pt-8"}`}
      >
        <div className="text-center mb-6 lg:mb-8">
          <div className="mb-2">
            <span className="text-xs lg:text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {plan.tagline}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#111827]">
            {plan.name}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed">
            {plan.description}
          </p>

          <PriceDisplay plan={plan} billingCycle={billingCycle} />
        </div>

        <button
          className={`w-full py-3 lg:py-4 px-4 lg:px-6 rounded-xl font-bold text-sm lg:text-lg transition-all duration-200 mb-6 lg:mb-8 cursor-pointer ${
            plan.buttonStyle === "primary"
              ? "bg-[#3B82F6] text-white shadow-lg hover:shadow-xl hover:bg-blue-600 transform hover:scale-105"
              : "border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-blue-50 transform hover:scale-105"
          }`}
        >
          {plan.buttonText}
        </button>

        <FeaturesList features={plan.features} />
      </div>
    </div>
  );
};
