"use client";

import { pricingData } from "@/static/pricingData";
import { PricingHeader } from "./pricing/pricingHeader";
import { PricingCard } from "./pricing/pricingCard";
import { BottomSection } from "./pricing/bottomSection";

export const PricingComponent = () => {
  return (
    <section className="pb-4 pt-24 lg:pb-10 lg:pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <PricingHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingData.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <BottomSection />
      </div>
    </section>
  );
};
