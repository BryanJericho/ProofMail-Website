export const PriceDisplay = ({ plan, billingCycle }) => {
  const getDisplayPrice = () => {
    if (plan.monthlyPrice === 0) return 0;
    return billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavingsPercentage = () => {
    if (billingCycle === "annual" && plan.monthlyPrice > 0) {
      const savings =
        ((plan.monthlyPrice - plan.annualPrice) / plan.monthlyPrice) * 100;
      return Math.round(savings);
    }
    return 0;
  };

  const getAnnualTotal = () => {
    if (plan.monthlyPrice === 0) return 0;
    return billingCycle === "annual"
      ? plan.annualPrice * 12
      : plan.monthlyPrice * 12;
  };

  return (
    <div className="mb-6">
      <div className="flex items-baseline justify-center mb-2">
        {billingCycle === "annual" && plan.monthlyPrice > 0 && (
          <span className="text-lg lg:text-2xl text-gray-400 line-through mr-2 lg:mr-3">
            ${plan.monthlyPrice}
          </span>
        )}
        <span className="text-3xl lg:text-5xl font-bold text-[#111827]">
          {plan.monthlyPrice === 0 ? "$0" : `$${getDisplayPrice()}`}
        </span>
      </div>

      <div className="text-sm lg:text-base text-gray-500">
        {plan.monthlyPrice === 0 ? (
          <span>forever</span>
        ) : (
          <>
            <span>per {plan.period}</span>

            {billingCycle === "annual" && (
              <div className="mt-2">
                <span className="inline-block bg-green-100 text-green-800 text-xs lg:text-sm font-semibold px-2 lg:px-3 py-1 rounded-full">
                  Save {getSavingsPercentage()}%
                </span>
              </div>
            )}

            {billingCycle === "annual" && (
              <div className="text-xs lg:text-sm text-gray-400 mt-2">
                <div>${getAnnualTotal()} billed annually</div>
                <div className="line-through">
                  normally ${plan.monthlyPrice * 12}/year
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
