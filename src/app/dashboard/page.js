"use client";

import { ProfileComp } from "@/components/dashboard/profile/profileComp";
import { SideNavbar } from "@/components/dashboard/sideNavbar";
import React, { useState } from "react";

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState("profile");

  const renderContent = () => {
    switch (activeMenu) {
      case "profile":
        return <ProfileComp />;
      case "team":
        return (
          <div className="flex-1 p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold text-[#111827]">
                Team Management
              </h1>
              <p className="text-gray-600 mt-2">
                Manage your team members and permissions (Pro feature)
              </p>
            </div>
          </div>
        );
      case "verification":
        return (
          <div className="flex-1 p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold text-[#111827]">
                Email Verification
              </h1>
              <p className="text-gray-600 mt-2">
                Manage your email verification settings
              </p>
              {/* <VerificationComponent /> */}
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="flex-1 p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold text-[#111827]">Analytics</h1>
              <p className="text-gray-600 mt-2">
                View your verification statistics and usage
              </p>
              {/* <AnalyticsComponent /> */}
            </div>
          </div>
        );
      case "wallet":
        return (
          <div className="flex-1 p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold text-[#111827]">
                Blockchain Wallet
              </h1>
              <p className="text-gray-600 mt-2">
                Manage your Solana wallet connection
              </p>
              {/* <WalletComponent /> */}
            </div>
          </div>
        );
      case "billing":
        return (
          <div className="flex-1 p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold text-[#111827]">
                Billing & Plans
              </h1>
              <p className="text-gray-600 mt-2">
                Manage your subscription and payment methods
              </p>
              {/* <BillingComponent /> */}
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="flex-1 p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold text-[#111827]">Settings</h1>
              <p className="text-gray-600 mt-2">
                Configure your application preferences
              </p>
              {/* <SettingsComponent /> */}
            </div>
          </div>
        );
      default:
        return <ProfileComp />;
    }
  };

  return (
    <div className="h-screen ">
      {/* <Navbar2 /> */}

      <div className="flex h-[calc(100vh-64px)]">
        <SideNavbar activeMenu={activeMenu} onMenuChange={setActiveMenu} />
        {renderContent()}
      </div>
    </div>
  );
}
