import React, { useState } from "react";
import {
  FiMail,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiTrendingDown,
  FiAlertTriangle,
  FiCheckCircle,
  FiDownload,
  FiChevronDown,
} from "react-icons/fi";
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
  AreaChart,
  Area,
} from "recharts";

export default function EmailReport() {
  const [timeRange, setTimeRange] = useState("7d");

  const mockData = {
    "7d": {
      kpiData: {
        totalEmails: 12847,
        verificationRate: 94.8,
        threatsBlocked: 127,
        activeUsers: 45,
        trends: {
          emails: 12.5,
          verification: 2.3,
          threats: -8.7,
          users: 5.4,
        },
      },
      emailTrendData: [
        { date: "Jun 16", verified: 1840, failed: 95, threats: 12 },
        { date: "Jun 17", verified: 1920, failed: 78, threats: 8 },
        { date: "Jun 18", verified: 2150, failed: 120, threats: 15 },
        { date: "Jun 19", verified: 1980, failed: 89, threats: 6 },
        { date: "Jun 20", verified: 2340, failed: 145, threats: 22 },
        { date: "Jun 21", verified: 2100, failed: 98, threats: 18 },
        { date: "Jun 22", verified: 2280, failed: 110, threats: 14 },
      ],
      verificationTrendData: [
        { date: "Jun 16", rate: 94.2 },
        { date: "Jun 17", rate: 95.1 },
        { date: "Jun 18", rate: 94.7 },
        { date: "Jun 19", rate: 95.8 },
        { date: "Jun 20", rate: 94.1 },
        { date: "Jun 21", rate: 95.5 },
        { date: "Jun 22", rate: 94.8 },
      ],
    },
    "30d": {
      kpiData: {
        totalEmails: 54320,
        verificationRate: 93.2,
        threatsBlocked: 456,
        activeUsers: 52,
        trends: {
          emails: 18.7,
          verification: -1.2,
          threats: -15.3,
          users: 8.9,
        },
      },
      emailTrendData: [
        { date: "May 24", verified: 7840, failed: 420, threats: 45 },
        { date: "May 31", verified: 8120, failed: 380, threats: 38 },
        { date: "Jun 7", verified: 8950, failed: 510, threats: 62 },
        { date: "Jun 14", verified: 9180, failed: 390, threats: 41 },
        { date: "Jun 21", verified: 9840, failed: 445, threats: 58 },
      ],
      verificationTrendData: [
        { date: "May 24", rate: 94.9 },
        { date: "May 31", rate: 95.5 },
        { date: "Jun 7", rate: 94.6 },
        { date: "Jun 14", rate: 95.9 },
        { date: "Jun 21", rate: 95.7 },
      ],
    },
    "90d": {
      kpiData: {
        totalEmails: 163450,
        verificationRate: 92.8,
        threatsBlocked: 1234,
        activeUsers: 58,
        trends: {
          emails: 25.4,
          verification: -2.8,
          threats: -22.1,
          users: 12.3,
        },
      },
      emailTrendData: [
        { date: "Mar 24", verified: 22840, failed: 1420, threats: 145 },
        { date: "Apr 7", verified: 24120, failed: 1280, threats: 138 },
        { date: "Apr 21", verified: 26950, failed: 1510, threats: 162 },
        { date: "May 5", verified: 28180, failed: 1390, threats: 141 },
        { date: "May 19", verified: 29840, failed: 1445, threats: 158 },
        { date: "Jun 2", verified: 31240, failed: 1380, threats: 149 },
        { date: "Jun 16", verified: 32450, failed: 1420, threats: 152 },
      ],
      verificationTrendData: [
        { date: "Mar 24", rate: 94.1 },
        { date: "Apr 7", rate: 95.0 },
        { date: "Apr 21", rate: 94.7 },
        { date: "May 5", rate: 95.3 },
        { date: "May 19", rate: 95.4 },
        { date: "Jun 2", rate: 95.8 },
        { date: "Jun 16", rate: 95.8 },
      ],
    },
    "180d": {
      kpiData: {
        totalEmails: 324680,
        verificationRate: 91.5,
        threatsBlocked: 2456,
        activeUsers: 63,
        trends: {
          emails: 32.1,
          verification: -4.2,
          threats: -28.5,
          users: 15.8,
        },
      },
      emailTrendData: [
        { date: "Dec 23", verified: 38840, failed: 2420, threats: 245 },
        { date: "Jan 6", verified: 42120, failed: 2180, threats: 238 },
        { date: "Jan 20", verified: 44950, failed: 2310, threats: 262 },
        { date: "Feb 3", verified: 46180, failed: 2190, threats: 241 },
        { date: "Feb 17", verified: 48840, failed: 2245, threats: 258 },
        { date: "Mar 3", verified: 51240, failed: 2180, threats: 249 },
        { date: "Mar 17", verified: 52450, failed: 2220, threats: 252 },
        { date: "Mar 31", verified: 54120, failed: 2380, threats: 268 },
        { date: "Apr 14", verified: 55840, failed: 2290, threats: 255 },
        { date: "Apr 28", verified: 57230, failed: 2350, threats: 262 },
        { date: "May 12", verified: 58940, failed: 2420, threats: 275 },
        { date: "May 26", verified: 60120, failed: 2380, threats: 268 },
      ],
      verificationTrendData: [
        { date: "Dec 23", rate: 93.8 },
        { date: "Jan 6", rate: 94.9 },
        { date: "Jan 20", rate: 95.1 },
        { date: "Feb 3", rate: 95.5 },
        { date: "Feb 17", rate: 95.6 },
        { date: "Mar 3", rate: 95.9 },
        { date: "Mar 17", rate: 95.9 },
        { date: "Mar 31", rate: 95.8 },
        { date: "Apr 14", rate: 96.0 },
        { date: "Apr 28", rate: 96.1 },
        { date: "May 12", rate: 96.0 },
        { date: "May 26", rate: 96.2 },
      ],
    },
    "365d": {
      kpiData: {
        totalEmails: 689420,
        verificationRate: 90.3,
        threatsBlocked: 4832,
        activeUsers: 72,
        trends: {
          emails: 45.8,
          verification: -6.1,
          threats: -35.2,
          users: 22.4,
        },
      },
      emailTrendData: [
        { date: "Jun 22", verified: 78840, failed: 4420, threats: 445 },
        { date: "Aug 22", verified: 82120, failed: 4180, threats: 438 },
        { date: "Oct 22", verified: 86950, failed: 4310, threats: 462 },
        { date: "Dec 22", verified: 89180, failed: 4190, threats: 441 },
        { date: "Feb 23", verified: 92840, failed: 4245, threats: 458 },
        { date: "Apr 23", verified: 96240, failed: 4180, threats: 449 },
        { date: "Jun 23", verified: 98450, failed: 4220, threats: 452 },
      ],
      verificationTrendData: [
        { date: "Jun 22", rate: 92.1 },
        { date: "Aug 22", rate: 93.2 },
        { date: "Oct 22", rate: 93.8 },
        { date: "Dec 22", rate: 94.1 },
        { date: "Feb 23", rate: 94.5 },
        { date: "Apr 23", rate: 94.8 },
        { date: "Jun 23", rate: 95.1 },
      ],
    },
  };

  const threatCategoriesData = [
    { name: "Phishing", value: 45, color: "#EF4444" },
    { name: "Spam", value: 32, color: "#F97316" },
    { name: "Malware", value: 18, color: "#DC2626" },
    { name: "Suspicious", value: 32, color: "#F59E0B" },
  ];

  const userActivityData = [
    { name: "Sarah Johnson", emails: 245, signatures: 18, success: 98.2 },
    { name: "Mike Chen", emails: 189, signatures: 12, success: 95.8 },
    { name: "Alex Rivera", emails: 167, signatures: 9, success: 97.1 },
    { name: "John Doe", emails: 134, signatures: 7, success: 92.5 },
    { name: "Emma Wilson", emails: 123, signatures: 15, success: 96.7 },
  ];

  const currentData = mockData[timeRange];

  const KPICard = ({ title, value, trend, icon: Icon, suffix = "" }) => {
    const isPositive = trend > 0;
    const TrendIcon = isPositive ? FiTrendingUp : FiTrendingDown;

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-500">{title}</h3>
              <p className="text-2xl font-semibold text-gray-900">
                {typeof value === "number" ? value.toLocaleString() : value}
                {suffix}
              </p>
            </div>
          </div>
          <div
            className={`flex items-center text-sm ${isPositive ? "text-green-600" : "text-red-600"}`}
          >
            <TrendIcon className="w-4 h-4 mr-1" />
            {Math.abs(trend)}%
          </div>
        </div>
      </div>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const getTimeRangeLabel = () => {
    const labels = {
      "7d": "Last 7 days",
      "30d": "Last 30 days",
      "90d": "Last 3 months",
      "180d": "Last 6 months",
      "365d": "Last 1 year",
    };
    return labels[timeRange];
  };

  return (
    <div className="flex-1 p-6 overflow-auto min-h-[100dvh]">
      <div className="space-y-6 max-w-[1800px] mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#111827] mb-2">
                Email Reports
              </h1>
              <p className="text-gray-600 mt-1">
                Comprehensive analytics and security insights
              </p>
            </div>
            <div className="flex flex-col xs:flex-row gap-3">
              <div className="relative">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="appearance-none bg-white border text-[#111827] border-gray-300 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 3 months</option>
                  <option value="180d">Last 6 months</option>
                  <option value="365d">Last 1 year</option>
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap cursor-pointer">
                <FiDownload className="w-4 h-4 mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Total Emails Processed"
            value={currentData.kpiData.totalEmails}
            trend={currentData.kpiData.trends.emails}
            icon={FiMail}
          />
          <KPICard
            title="Verification Success Rate"
            value={currentData.kpiData.verificationRate}
            trend={currentData.kpiData.trends.verification}
            icon={FiCheckCircle}
            suffix="%"
          />
          <KPICard
            title="Threats Blocked"
            value={currentData.kpiData.threatsBlocked}
            trend={currentData.kpiData.trends.threats}
            icon={FiShield}
          />
          <KPICard
            title="Active Users"
            value={currentData.kpiData.activeUsers}
            trend={currentData.kpiData.trends.users}
            icon={FiUsers}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Email Activity Trend
              </h3>
              <div className="flex items-center space-x-4 text-sm flex-wrap gap-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Verified</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Failed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Threats</span>
                </div>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentData.emailTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="verified"
                    stackId="1"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="failed"
                    stackId="1"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="threats"
                    stackId="1"
                    stroke="#f59e0b"
                    fill="#f59e0b"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Verification Success Rate
              </h3>
              <span className="text-sm text-gray-500">
                {getTimeRangeLabel()}
              </span>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={currentData.verificationTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                  <YAxis
                    domain={["dataMin - 1", "dataMax + 1"]}
                    stroke="#6b7280"
                    fontSize={12}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Threat Categories
              </h3>
              <span className="text-sm text-gray-500">
                {getTimeRangeLabel()}
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-1/2 h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={threatCategoriesData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {threatCategoriesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2 space-y-3">
                {threatCategoriesData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Top User Activity
              </h3>
              <span className="text-sm text-gray-500">
                {getTimeRangeLabel()}
              </span>
            </div>
            <div className="space-y-4">
              {userActivityData.map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium mr-3">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {user.emails} emails • {user.signatures} signatures
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {user.success}%
                    </div>
                    <div className="text-xs text-gray-500">Success rate</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-lg border border-green-200 p-6">
            <div className="flex items-center">
              <FiCheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <h4 className="text-lg font-semibold text-green-900">
                  Security Status
                </h4>
                <p className="text-green-700 mt-1">
                  Excellent protection with{" "}
                  {currentData.kpiData.verificationRate}% verification rate
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
            <div className="flex items-center">
              <FiTrendingUp className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h4 className="text-lg font-semibold text-blue-900">
                  Growth Trend
                </h4>
                <p className="text-blue-700 mt-1">
                  Email processing increased by{" "}
                  {currentData.kpiData.trends.emails}% this period
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-6">
            <div className="flex items-center">
              <FiAlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
              <div>
                <h4 className="text-lg font-semibold text-yellow-900">
                  Recommendations
                </h4>
                <p className="text-yellow-700 mt-1">
                  Consider additional training for 3 users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
