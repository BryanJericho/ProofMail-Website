import React, { useEffect, useRef, useState } from "react";
import { FiCheck, FiHome } from "react-icons/fi";

export const SuccessPopup = ({ isOpen, onRedirect }) => {
  const [countdown, setCountdown] = useState(5);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    setCountdown(5);
    timerRef.current = setInterval(() => {
      setCountdown((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isOpen]);

  useEffect(() => {
    if (countdown === 0 && isOpen) {
      onRedirect();
    }
  }, [countdown, isOpen, onRedirect]);

  const handleManualRedirect = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    onRedirect();
  };

  if (!isOpen) return null;

  const percent = ((5 - countdown) / 5) * 100;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-xl animate-in fade-in-0 zoom-in-95 duration-200">
        <div className="text-center space-y-5">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-green-200 opacity-20 animate-pulse"></div>
            <FiCheck className="w-8 h-8 text-green-600 relative z-10" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Success!
            </h3>
            <p className="text-gray-600">
              Your account has been created successfully.
            </p>
          </div>

          <div className="relative w-16 h-16 mx-auto">
            <svg className="transform -rotate-90" width="64" height="64">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="#e5e7eb"
                strokeWidth="4"
                fill="transparent"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="#3b82f6"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 28}
                strokeDashoffset={2 * Math.PI * 28 * (1 - percent / 100)}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-linear"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-blue-600 font-medium">
              {countdown}s
            </span>
          </div>

          <button
            onClick={handleManualRedirect}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <FiHome className="w-4 h-4" />
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
