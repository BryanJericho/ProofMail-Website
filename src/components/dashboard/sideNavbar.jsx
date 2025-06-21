import React from "react";
import {
  FiUser,
  FiUsers,
  FiCreditCard,
  FiSettings,
  FiShield,
  FiMail,
} from "react-icons/fi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const SideNavbar = ({ activeMenu = "profile", onMenuChange }) => {
  const menuItems = [
    {
      id: "profile",
      label: "Profile",
      icon: FiUser,
      category: "account",
    },
    {
      id: "team",
      label: "Team Management",
      icon: FiUsers,
      category: "account",
      badge: "Pro",
    },
    {
      id: "verification",
      label: "Email Verification",
      icon: FiShield,
      category: "main",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: TbBrandGoogleAnalytics,
      category: "main",
    },
    {
      id: "wallet",
      label: "Blockchain Wallet",
      icon: FaWallet,
      category: "blockchain",
    },
    {
      id: "billing",
      label: "Billing & Plans",
      icon: FiCreditCard,
      category: "billing",
    },
    {
      id: "settings",
      label: "Settings",
      icon: FiSettings,
      category: "system",
    },
  ];

  const categories = {
    account: "Account Management",
    main: "Verification",
    blockchain: "Blockchain",
    billing: "Billing",
    system: "System",
  };

  const groupedMenus = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <Link href="/">
        <div className="p-6 border-b border-gray-200">
          <Image
            src="/Proofmail2.png"
            alt="ProofMail Logo"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
      </Link>

      <div className="flex-1 overflow-y-auto py-4">
        {Object.entries(groupedMenus).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h3 className="px-6 text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              {categories[category]}
            </h3>
            <nav className="space-y-1 px-3">
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = activeMenu === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => onMenuChange?.(item.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#3B82F6] text-white"
                        : "text-[#111827] hover:bg-gray-50"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 mr-3 ${isActive ? "text-white" : "text-gray-400"}`}
                    />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-[#3B82F6] text-white"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <FiUser className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#111827] truncate">
              John Doe
            </p>
            <p className="text-xs text-gray-500 truncate">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
