import React from "react";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

export const PricingPlanComp = () => {
  return (
    <div className="flex-1 p-8 overflow-auto min-h-[100dvh]">
      <div className="mx-auto">
        <div className="mb-6 bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Pricing plans
              </h1>
              <p className="text-gray-600">
                Choose or manage your ProofMail subscription.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <p className="text-[#111827] text-lg mb-4">
            You're currently on the free plan.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors duration-200 cursor-pointer">
            <span>Compare plans</span>
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-4 rounded-lg flex items-center space-x-2 transition-colors duration-200 cursor-pointer">
          <FiCalendar className="w-4 h-4" />
          <span>Quotas</span>
        </button>
      </div>
    </div>
  );
};
