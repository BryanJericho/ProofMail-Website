import { FaCheck, FaTimes } from "react-icons/fa";

export const FeaturesList = ({ features }) => {
  return (
    <div className="space-y-3 lg:space-y-4">
      <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-3 lg:mb-4">
        What's included:
      </h4>
      {features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <div className="mr-2 lg:mr-3 mt-0.5">
            {feature.included ? (
              <FaCheck className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0 text-[#3B82F6]" />
            ) : (
              <FaTimes className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0 text-gray-300" />
            )}
          </div>
          <span
            className={`text-xs lg:text-sm leading-relaxed ${
              feature.included ? "text-gray-700" : "text-gray-400"
            }`}
          >
            {feature.text}
          </span>
        </div>
      ))}
    </div>
  );
};
