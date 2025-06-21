"use client";

import EmailReport from "@/components/dashboard/analytics/emailReport";
import { LogComp } from "@/components/dashboard/analytics/logComp";
import { BillingHistory } from "@/components/dashboard/billing/billingHistory";
import { PaymentMethods } from "@/components/dashboard/billing/paymentMethods";
import { PricingPlanComp } from "@/components/dashboard/billing/pricingPlanComp";
import { ChangePasswordComp } from "@/components/dashboard/profile/changePass";
import { ProfileComp } from "@/components/dashboard/profile/profileComp";
import TeamManagement from "@/components/dashboard/profile/teamManagement";
import { UsageComp } from "@/components/dashboard/profile/usageComp";
import { SideNavbar } from "@/components/dashboard/sideNavbar";
import React, { useState } from "react";

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState("profile");

  const renderContent = () => {
    switch (activeMenu) {
      case "profile":
        return <ProfileComp />;
      case "changePassword":
        return <ChangePasswordComp />;
      case "team":
        return <TeamManagement />;
      case "emailReports":
        return <EmailReport />;
      case "logs":
        return <LogComp />;
      case "usage":
        return <UsageComp />;
      case "pricingPlans":
        return <PricingPlanComp />;
      case "paymentMethods":
        return <PaymentMethods />;
      case "billingHistory":
        return <BillingHistory />;
      case "logout":
        return (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-bold text-gray-700">
              You have been logged out.
            </h1>
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
