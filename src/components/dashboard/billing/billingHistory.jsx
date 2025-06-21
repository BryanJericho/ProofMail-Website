import { billingData as initialBillingData } from "@/static/dashboard/billingData";
import React, { useState } from "react";
import {
  FaDownload,
  FaEye,
  FaCalendarAlt,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

export const BillingHistory = () => {
  const [billingData] = useState(initialBillingData);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleDownload = (invoiceNumber) => {
    console.log(`Downloading invoice ${invoiceNumber}`);
  };

  const handleView = (invoiceNumber) => {
    console.log(`Viewing invoice ${invoiceNumber}`);
  };

  return (
    <div className="flex-1 h-full overflow-y-auto p-6 bg-gray-50 w-full min-h-screen">
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <h1 className="text-3xl font-bold text-[#111827] mb-2">
                ProofMail Pro
              </h1>
              <p className="text-gray-600 text-base">
                Blockchain-powered email verification
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-base text-gray-600">Next billing date</p>
            <p className="text-xl font-semibold text-gray-900">July 15, 2025</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 bg-white">
          <h2 className="!text-2xl font-semibold text-gray-900 flex items-center">
            <FaCalendarAlt className="w-6 h-6 mr-3 text-blue-500" />
            Billing History
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Invoice
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Period
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Date Paid
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {billingData.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="text-base text-gray-900">
                      {invoice.invoiceNumber}
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="text-base text-gray-900">
                      {invoice.month}
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="text-base text-gray-900">
                      {formatCurrency(invoice.amount)}
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                      <FaCheckCircle className="w-4 h-4 mr-1.5" />
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="text-base text-gray-900">
                      {formatDate(invoice.date)}
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleView(invoice.invoiceNumber)}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-150 cursor-pointer"
                      >
                        <FaEye className="w-4 h-4 mr-2" />
                        View
                      </button>
                      <button
                        onClick={() => handleDownload(invoice.invoiceNumber)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition-all duration-150 shadow-sm cursor-pointer"
                      >
                        <FaDownload className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
