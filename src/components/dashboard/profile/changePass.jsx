"use client";

import React, { useState } from "react";
import { FiEye, FiEyeOff, FiSave, FiX } from "react-icons/fi";

export const ChangePasswordComp = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleShow = (field) => {
    setShow((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirmation do not match!");
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    alert("Password updated successfully!");

    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleCancel = () => {
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex-1 p-8">
      <div className="w-full mx-auto">
        <div className="mb-8 bg-white rounded-lg border border-gray-200 p-6 shadow-xs">
          <h1 className="text-3xl font-bold text-[#111827] mb-2">
            Change Password
          </h1>
          <p className="text-gray-600 mt-1">
            Manage and update your account password securely.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-[#111827]">
            <div>
              <label className="block text-sm font-medium mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={show.current ? "text" : "password"}
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter current password"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6]"
                />
                <button
                  type="button"
                  onClick={() => toggleShow("current")}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {show.current ? (
                    <FiEyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <FiEye className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={show.new ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6]"
                />
                <button
                  type="button"
                  onClick={() => toggleShow("new")}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {show.new ? (
                    <FiEyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <FiEye className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={show.confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6]"
                />
                <button
                  type="button"
                  onClick={() => toggleShow("confirm")}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {show.confirm ? (
                    <FiEyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <FiEye className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Leave password fields empty if you don't want to change it.
          </p>

          <div className="flex items-center space-x-3 mt-8">
            <button
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 text-[#111827] rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              <FiX className="inline w-4 h-4 mr-2" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              <FiSave className="inline w-4 h-4 mr-2" />
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
