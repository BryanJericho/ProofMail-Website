import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { CiUser } from "react-icons/ci";
import { FiShield, FiCheckCircle, FiUser } from "react-icons/fi";

export const UsageComp = () => {
  const [currentPlan] = useState("Free");

  const [todayUsage] = useState({
    createSign: 9,
    verifySign: 32,
  });

  const planLimits = {
    Free: { createSign: 10, verifySign: 50 },
    Pro: { createSign: 100, verifySign: 500 },
    Enterprise: { createSign: 1000, verifySign: 5000 },
  };

  const weeklyData = [
    { day: "Mon", create: 8, verify: 42 },
    { day: "Tue", create: 5, verify: 35 },
    { day: "Wed", create: 9, verify: 48 },
    { day: "Thu", create: 6, verify: 38 },
    { day: "Fri", create: 7, verify: 45 },
    { day: "Sat", create: 4, verify: 28 },
    { day: "Sun", create: 7, verify: 32 },
  ];

  const verificationResults = [
    { name: "Verified", value: 89, color: "#10B981" },
    { name: "Failed", value: 11, color: "#EF4444" },
  ];

  const currentLimits = planLimits[currentPlan];
  const createPercentage =
    (todayUsage.createSign / currentLimits.createSign) * 100;
  const verifyPercentage =
    (todayUsage.verifySign / currentLimits.verifySign) * 100;

  const isNearLimit = createPercentage > 80 || verifyPercentage > 80;

  const UsageCard = ({
    title,
    current,
    limit,
    percentage,
    icon: Icon,
    color,
  }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <span className="text-2xl font-bold text-gray-900">
          {current}/{limit}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${
            percentage > 80
              ? "bg-red-500"
              : percentage > 60
                ? "bg-yellow-500"
                : "bg-blue-500"
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>{percentage.toFixed(1)}% used</span>
        <span>{limit - current} remaining</span>
      </div>
    </div>
  );

  return (
    <div className="flex-1 p-6 overflow-auto min-h-[100dvh]">
      <div className="xl:-[90dvw] 2xl:w-[80dvw] mx-auto">
        <div className="mb-8 bg-white rounded-lg border border-gray-200 p-6">
          <h1 className="text-3xl font-bold text-[#111827] mb-2">
            Usage Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor your ProofMail usage and security metrics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 ">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
                <FiUser className="w-6 h-6 text-white" />
              </div>
              <h2 className="!text-2xl font-semibold text-gray-800">
                John Doe
              </h2>
            </div>
            <div className="text-xl font-bold text-blue-600 mb-1">
              {currentPlan}
            </div>
            <p className="text-sm text-gray-500">Active since Juny 2024</p>
          </div>

          {isNearLimit && (
            <div className="lg:col-span-2 bg-white border border-orange-100 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <CiUser className="w-6 h-6 text-orange-500" />
                <h3 className="text-base font-semibold text-gray-800">
                  Upgrade Recommended
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                You're approaching your daily limits. Upgrade to Pro for higher
                quotas and advanced features.
              </p>
              <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors cursor-pointer">
                Upgrade to Pro
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Protection Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CiUser className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">325</div>
              <div className="text-sm text-gray-600">Verified Emails</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CiUser className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">36</div>
              <div className="text-sm text-gray-600">Threats Detected</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CiUser className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
              <div className="text-sm text-gray-600">Verification Accuracy</div>
            </div>
          </div>
        </div>

        {/* Usage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <UsageCard
            title="Create Signatures"
            current={todayUsage.createSign}
            limit={currentLimits.createSign}
            percentage={createPercentage}
            icon={FiShield}
            color="bg-blue-500"
          />
          <UsageCard
            title="Verify Signatures"
            current={todayUsage.verifySign}
            limit={currentLimits.verifySign}
            percentage={verifyPercentage}
            icon={FiCheckCircle}
            color="bg-green-500"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Weekly Usage Trend */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Weekly Usage Trend
              </h3>
              <CiUser className="w-5 h-5 text-gray-500" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="create"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                  name="Create"
                />
                <Line
                  type="monotone"
                  dataKey="verify"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                  name="Verify"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Verification Success Rate */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Verification Results
              </h3>
              <div className="flex items-center space-x-2">
                <CiUser className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">
                  89% Success Rate
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center mb-6">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={verificationResults}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {verificationResults.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Verified Emails</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  289 emails
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Failed Verification
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  36 emails
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
