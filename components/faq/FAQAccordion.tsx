"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden group ${
              isOpen
                ? "bg-white dark:bg-[#0b1f24] border-teal-500/50 shadow-[0_0_30px_rgba(45,212,191,0.1)]"
                : "bg-slate-50 dark:bg-[#06171a] border-slate-200 dark:border-teal-900/40 hover:border-teal-400/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.05)]"
            }`}
          >
            <button
              onClick={() => toggleItem(idx)}
              className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
            >
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-5 h-5 text-[#06635d] dark:text-teal-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-teal-500" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-teal-950/60 animate-in fade-in slide-in-from-top-1">
                {item.answer}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
