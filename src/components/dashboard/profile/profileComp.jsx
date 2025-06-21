import CustomSelect from "@/components/customSelect";
import {
  countries,
  industries,
  languages,
  useCases,
} from "@/static/dashboard/profileData";
import React, { useState } from "react";
import { FiSave, FiEdit3, FiEye, FiEyeOff, FiUser } from "react-icons/fi";

export const ProfileComp = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    industry: "Technology & Software",
    primaryUseCase: "Business Email Protection",
    companyName: "Tech Solutions Inc.",
    jobTitle: "Security Manager",
    phoneNumber: "+62 812-3456-7890",
    country: "Indonesia",
    language: "English",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Profile saved:", formData);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex-1 p-8">
      <div className="w-full mx-auto">
        <div className="mb-10">
          <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-6 shadow-xs">
            <div>
              <h1 className="text-3xl font-bold text-[#111827] mb-2">
                Profile Settings
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your account information and preferences
              </p>
            </div>
            <div className="flex space-x-3">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <FiEdit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 border border-gray-300 text-[#111827] rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <FiSave className="w-4 h-4 mr-2" />
                    Save Changes
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-6 py-10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center mr-4">
                <FiUser className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#111827]">
                  {formData.fullName}
                </h2>
                <p className="text-gray-600">{formData.email}</p>
                {/* <p className="text-sm text-gray-500">
                  {formData.jobTitle} at {formData.companyName}
                </p> */}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#111827]">
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-4">
                  Basic Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <CustomSelect
                        label="Country"
                        value={formData.country}
                        options={countries}
                        onChange={(val) =>
                          setFormData((prev) => ({ ...prev, country: val }))
                        }
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <CustomSelect
                        label="Language"
                        value={formData.language}
                        options={languages}
                        onChange={(val) =>
                          setFormData((prev) => ({ ...prev, language: val }))
                        }
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-4">
                  Professional Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>

                  <div>
                    <CustomSelect
                      label="Industry"
                      value={formData.industry}
                      options={industries}
                      onChange={(val) =>
                        setFormData((prev) => ({ ...prev, industry: val }))
                      }
                      disabled={!isEditing}
                    />
                  </div>

                  <div>
                    <CustomSelect
                      label=" Primary Use Case"
                      value={formData.primaryUseCase}
                      options={useCases}
                      onChange={(val) =>
                        setFormData((prev) => ({
                          ...prev,
                          primaryUseCase: val,
                        }))
                      }
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
