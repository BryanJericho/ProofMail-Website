import React from "react";

export const PlanCard = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {currentPlans.map((plan) => (
        <div
          key={plan.id}
          className={`relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${
            plan.popular
              ? "transform scale-105 ring-4 ring-opacity-50"
              : "hover:scale-102"
          }`}
          style={
            plan.popular ? { borderColor: "#3B82F6", ringColor: "#3B82F6" } : {}
          }
        >
          {/* Popular Badge */}
          {plan.popular && (
            <div className="absolute top-0 left-0 right-0">
              <div className="text-center">
                <div
                  className="inline-flex items-center px-6 py-2 rounded-b-2xl text-white text-sm font-bold tracking-wide"
                  style={{ backgroundColor: "#3B82F6" }}
                >
                  <FaFire className="mr-2" />
                  MOST POPULAR
                </div>
              </div>
            </div>
          )}

          <div className={`p-8 ${plan.popular ? "pt-16" : "pt-8"}`}>
            {/* Plan Header */}
            <div className="text-center mb-8">
              <div className="mb-2">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {plan.tagline}
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "#111827" }}
              >
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center justify-center mb-2">
                  {billingCycle === "annual" && plan.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through mr-3">
                      ${plan.originalPrice}
                    </span>
                  )}
                  <span
                    className="text-5xl font-bold"
                    style={{ color: "#111827" }}
                  >
                    ${plan.price}
                  </span>
                </div>
                <div className="text-gray-500">
                  per {plan.period}
                  {billingCycle === "annual" && plan.savings && (
                    <div className="mt-2">
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {plan.savings}
                      </span>
                    </div>
                  )}
                  {billingCycle === "annual" && plan.annualPrice && (
                    <div className="text-sm text-gray-400 mt-1">
                      ${plan.annualPrice} billed annually
                      {plan.originalAnnualPrice && (
                        <span className="line-through ml-2">
                          ${plan.originalAnnualPrice}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 mb-8 ${
                plan.buttonStyle === "primary"
                  ? "text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                  : "border-2 hover:bg-gray-50 transform hover:scale-105"
              }`}
              style={
                plan.buttonStyle === "primary"
                  ? { backgroundColor: "#3B82F6" }
                  : { borderColor: "#3B82F6", color: "#3B82F6" }
              }
            >
              {plan.buttonText}
            </button>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 mb-4">
                What's included:
              </h4>
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    {feature.included ? (
                      <FaCheck
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "#3B82F6" }}
                      />
                    ) : (
                      <FaTimes className="w-4 h-4 flex-shrink-0 text-gray-300" />
                    )}
                  </div>
                  <span
                    className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
