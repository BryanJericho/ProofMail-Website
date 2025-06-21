"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { faqData } from "@/static/faqData";

export const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const renderAnswer = (answer) => {
    if (typeof answer === "string") {
      if (
        answer.includes("<ul>") ||
        answer.includes("<ol>") ||
        answer.includes("<li>") ||
        answer.includes("<a")
      ) {
        return (
          <div
            className="faq-content"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        );
      }
      return <div className="faq-content">{answer}</div>;
    }

    if (typeof answer === "object" && answer.type) {
      return (
        <div className="faq-content">
          {answer.intro && <p className="mb-2">{answer.intro}</p>}

          {answer.type === "list" && answer.items && (
            <ul className="faq-list">
              {answer.items.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}

          {answer.type === "numbered_list" && answer.items && (
            <ol className="faq-numbered-list">
              {answer.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          )}

          {answer.type === "text" && <p>{answer.content}</p>}

          {answer.conclusion && <p className="mt-2">{answer.conclusion}</p>}
        </div>
      );
    }

    return <div className="faq-content">{answer}</div>;
  };

  return (
    <div className="mx-auto py-4 lg:pb-10 px-4 lg:px-10 text-[#111827] min-h-[80dvh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center mb-12 space-y-4">
        <h2>Frequently Asked Questions</h2>
        <p className="subHeading">
          Get instant solutions to your common questions.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item) => {
          const isOpen = openItem === item.id;

          return (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-lg border transition-all duration-300 lg:max-w-[90dvw] xl:max-w-[80dvw] 2xl:max-w-[70dvw] ${
                isOpen
                  ? "border-[#3B82F6] shadow-lg"
                  : "border-gray-200 bg-white"
              }`}
              style={
                isOpen
                  ? {
                      background: `radial-gradient(
                        ellipse at bottom left,
                        rgba(59, 130, 246, 0.2) 20%,
                        rgba(59, 130, 246, 0.15) 40%,
                        transparent 80%
                      )`,
                    }
                  : {}
              }
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="relative z-10 w-full p-5 md:p-6 text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base md:text-lg font-medium transition-colors duration-300">
                    {item.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-300 ${
                      isOpen ? "bg-blue-100" : "bg-gray-100"
                    }`}
                  >
                    {isOpen ? (
                      <FaMinus className="w-4 h-4" />
                    ) : (
                      <FaPlus className="w-4 h-4" />
                    )}
                  </motion.div>
                </div>
              </button>

              <div
                className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 md:px-6 pb-8">
                  {renderAnswer(item.answer)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
