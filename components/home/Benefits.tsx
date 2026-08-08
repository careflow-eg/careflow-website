"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  FileCheck,
  Zap,
  Smile,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export function Benefits() {
  const benefitsList = [
    {
      icon: Clock,
      title: "The History Is Already Taken",
      desc: "The patient answers in the waiting room, off the consultation clock. You open the visit with it already written up.",
    },
    {
      icon: FileCheck,
      title: "Reduce Documentation Errors",
      desc: "Every lab value is read, flagged and cross-referenced against the history and the scan — not scanned by eye between patients.",
    },
    {
      icon: Zap,
      title: "Faster Clinical Decisions",
      desc: "Ranked differentials with the evidence shown, grounded in WHO and NICE guidance and standard reference texts.",
    },
    {
      icon: Smile,
      title: "Better Patient Experience",
      desc: "Patients answer in their own dialect and feel properly asked. You spend the visit examining rather than writing.",
    },
    {
      icon: ShieldCheck,
      title: "Evidence-Based RAG Insights",
      desc: "All AI suggestions cite authoritative medical guidelines (WHO, NICE and standard reference texts) with the evidence shown.",
    },
    {
      icon: TrendingUp,
      title: "Work Moved Off the Consultation",
      desc: "Intake, laboratory reading and image interpretation all happen before the door opens, so the consultation is spent on the patient rather than on their paperwork.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#061518] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block mb-4 text-xs font-bold text-[#06635d] dark:text-teal-400 uppercase tracking-widest bg-teal-100 dark:bg-teal-950 px-3.5 py-1.5 rounded-full">
            Clinical ROI &amp; Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Why Physicians Choose CareFlow
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Measurable advantages for individual practitioners, group practices, and outpatient centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
