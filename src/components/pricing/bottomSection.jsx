import { FaCheck } from "react-icons/fa";

export const BottomSection = () => {
  return (
    <div className="text-center mt-12 lg:mt-16">
      <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-6xl mx-auto shadow-lg">
        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900">
          Still not sure? Try Pro with zero risk.
        </h3>
        <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed">
          Experience the Pro plan free for 14 days. Upgrade only when ready.
          Cancel anytime.
        </p>

        <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-4 lg:gap-8 text-xs lg:text-sm text-gray-500">
          {[
            "No setup fees",
            "Cancel anytime",
            "24/7 support",
            "30-day money back",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center lg:justify-start"
            >
              <FaCheck className="w-3 h-3 lg:w-4 lg:h-4 mr-1.5 lg:mr-2 text-[#3B82F6] flex-shrink-0" />
              <span className="text-center lg:text-left">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
