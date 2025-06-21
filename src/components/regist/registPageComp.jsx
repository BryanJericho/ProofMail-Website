"use client";
import { OTPVerification } from "@/components/regist/otpVerification";
import { useState, useEffect } from "react";
import { RegistForm } from "./registForm";
import { Navbar3 } from "../navbar3";

export const RegistPageComp = () => {
  const [currentStep, setCurrentStep] = useState("register");
  const [registrationData, setRegistrationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedStep = sessionStorage.getItem("registrationStep");
      const savedData = sessionStorage.getItem("registrationData");

      if (savedStep === "otp" && savedData) {
        const parsedData = JSON.parse(savedData);
        setRegistrationData(parsedData);
        setCurrentStep("otp");
      }
    } catch (error) {
      console.error("Error loading registration state:", error);
      sessionStorage.removeItem("registrationStep");
      sessionStorage.removeItem("registrationData");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleRegistrationSuccess = (userData) => {
    setRegistrationData(userData);
    setCurrentStep("otp");

    try {
      sessionStorage.setItem("registrationStep", "otp");
      sessionStorage.setItem("registrationData", JSON.stringify(userData));
    } catch (error) {
      console.error("Error saving registration state:", error);
    }
  };

  const handleBackToRegister = () => {
    setCurrentStep("register");
    setRegistrationData(null);

    try {
      sessionStorage.removeItem("registrationStep");
      sessionStorage.removeItem("registrationData");
    } catch (error) {
      console.error("Error clearing registration state:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar3 />
      {currentStep === "register" && (
        <RegistForm onRegistrationSuccess={handleRegistrationSuccess} />
      )}
      {currentStep === "otp" && (
        <OTPVerification
          registrationData={registrationData}
          onBackToRegister={handleBackToRegister}
        />
      )}
    </div>
  );
};
