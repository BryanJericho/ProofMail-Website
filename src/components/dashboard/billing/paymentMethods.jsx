import React from "react";
import { FaCreditCard, FaPlus } from "react-icons/fa";

export const PaymentMethods = () => {
  return (
    <div className="flex-1 p-8 overflow-auto min-h-[100dvh]">
      <div className="mb-6 bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#111827] mb-2">
              Payment Methods
            </h1>
            <p className="text-gray-600">
              Manage your ProofMail subscription payment options
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-white">
          <h2 className="!text-xl font-semibold text-gray-900 flex items-center">
            <FaCreditCard className="w-5 h-5 mr-3 text-blue-500" />
            Credit Cards
          </h2>
        </div>

        <div className="p-6">
          <div className="text-center py-8">
            <FaCreditCard className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-6">
              You don't have any cards saved.
            </p>
            <button className="inline-flex items-center px-4 py-2.5 border border-transparent rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
              <FaPlus className="w-4 h-4 mr-2" />
              Add Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
