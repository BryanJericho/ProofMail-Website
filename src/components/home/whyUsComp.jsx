"use client";

import { features } from "@/static/features";
import { motion } from "framer-motion";

export default function TrustFeatures() {
  return (
    <section className="py-10 px-4 lg:px-10 flex flex-col items-center justify-center bg-[#F4F7FA] md:min-h-[50dvh] lg:min-h-[70dvh]">
      <h2 className="text-center mb-4 text-[#263238] md:max-w-[60dvw] 2xl:max-w-[40dvw] lg:leading-[3.2rem]">
        That's Why We're Here, To Make Email Trustworthy Again
      </h2>
      <p className="subHeading text-center mb-8 lg:mb-12 text-[#263238] max-w-[90dvw]">
        Anyone can fake an email. We help you know who really sent it so you can
        trust your inbox again.
      </p>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover="hover"
            initial="initial"
            variants={{
              hover: {},
              initial: {},
            }}
            className="relative overflow-hidden bg-white rounded-xl border p-6 shadow-md transition-all duration-300 group"
          >
            <motion.div
              variants={{
                initial: { scale: 0 },
                hover: { scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                absolute
                bottom-0
                right-0
                left-[-10dvw]
                w-[180%]
                h-full
                rounded-full
                z-0
                hidden
                lg:block
              "
              style={{
                transformOrigin: "bottom left",
                background: `radial-gradient(ellipse at bottom left,
                rgba(59, 130, 246, 0.3) 40%,
                rgba(59, 130, 246, 0.27) 50%,
                rgba(59, 130, 246, 0.25) 60%,
                rgba(59, 130, 246, 0.2) 70%,
                rgba(59, 130, 246, 0.1) 80%,
                rgba(59, 130, 246, 0.05) 90%,
                transparent 100%
                )`,
              }}
            />

            <div className="relative z-10">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[#3B82F6] text-[#F5F5F5]">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#263238]">
                {feature.title}
              </h3>
              <p className="text-sm text-[#263238]">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
