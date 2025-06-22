export const PriceDisplay = ({ plan }) => {
  return (
    <div className="mb-6">
      <div className="flex items-baseline justify-center mb-2">
        {plan.customPricing ? (
          <div className="text-center">
            <div className="text-2xl lg:text-4xl font-bold text-[#111827] mb-1">
              Custom Pricing
            </div>
            <div className="text-lg lg:text-xl text-gray-600">
              Starting from ${plan.monthlyPrice}
            </div>
          </div>
        ) : (
          <span className="text-3xl lg:text-5xl font-bold text-[#111827]">
            {plan.monthlyPrice === 0 ? "$0" : `$${plan.monthlyPrice}`}
          </span>
        )}
      </div>

      <div className="text-sm lg:text-base text-gray-500">
        {plan.monthlyPrice === 0 ? (
          <span>forever</span>
        ) : plan.customPricing ? (
          <span>tailored to your needs</span>
        ) : (
          <span>per {plan.period}</span>
        )}
      </div>
    </div>
  );
};
