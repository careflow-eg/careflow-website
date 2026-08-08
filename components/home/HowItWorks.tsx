"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  FileSpreadsheet,
  FileSearch,
  Brain,
  Sparkles,
  LayoutDashboard,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: User,
      title: "Patient Intake",
      desc: "Patient completes voice or chat intake before entering the clinic room.",
    },
    {
      step: "02",
      icon: FileSpreadsheet,
      title: "Lab Reports",
      desc: "OCR ingests lab results & flags baseline anomalies automatically.",
    },
    {
      step: "03",
      icon: FileSearch,
      title: "Radiology Scans",
      desc: "Imaging AI extracts key diagnostic findings & region overlays.",
    },
    {
      step: "04",
      icon: Brain,
      title: "AI History Synthesis",
      desc: "Deep clinical NLP structures chief complaints, symptoms & risk factors.",
    },
    {
      step: "05",
      icon: Sparkles,
      title: "Clinical Intelligence",
      desc: "Evidence-based RAG generates ranked differential diagnoses.",
    },
    {
      step: "06",
      icon: LayoutDashboard,
      title: "Doctor Dashboard",
      desc: "Physician opens the visit with the history already taken and the results already read.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#021418] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block mb-4 text-xs font-bold text-[#06635d] dark:text-teal-400 uppercase tracking-widest bg-teal-50 dark:bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-200 dark:border-teal-900">
            End-to-End Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            How CareFlow Delivers Connected Care
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            From the moment a patient schedules an appointment to the final doctor sign-off, CareFlow coordinates data seamlessly.
          </p>
        </div>

        {/* Step Grid Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative rounded-2xl p-6 bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#06635d] dark:bg-teal-500 text-white dark:text-[#021418] flex items-center justify-center font-bold shadow-md shadow-teal-900/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold text-slate-500 dark:text-teal-600 font-mono">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#06635d] dark:group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center text-xs font-bold border border-teal-200 dark:border-teal-800">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
