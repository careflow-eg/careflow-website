"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  FileCheck2,
  LayoutDashboard,
  Bot,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function KeyFeatures() {
  const features = [
    {
      id: "history-taking",
      icon: MessageSquare,
      title: "AI History Taking",
      tagline: "Voice & Conversational Patient Intake",
      description:
        "Gathers comprehensive patient history prior to consultation. Adapts questions dynamically based on clinical guidelines and chief complaints.",
      benefits: ["Multilingual Voice Support", "Structured HPI Output", "Guideline Compliance"],
      color: "from-teal-500/10 to-teal-500/5 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900/40",
    },
    {
      id: "lab-interpretation",
      icon: FileText,
      title: "Laboratory Interpretation",
      tagline: "OCR Extraction & Abnormal Flagging",
      description:
        "Transforms messy paper & PDF lab reports into clean digital panels. Flags critical values and compares against historical patient baselines.",
      benefits: ["99%+ OCR Precision", "Trend Analysis", "Critical Alerts"],
      color: "from-blue-500/10 to-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/40",
    },
    {
      id: "radiology-interpretation",
      icon: FileCheck2,
      title: "Radiology Interpretation",
      tagline: "AI Diagnostic Visual Insights",
      description:
        "Analyzes X-rays, CT scans, and MRIs to extract radiological findings, correlate with history, and highlight regions of interest.",
      benefits: ["DICOM Integration", "Heatmap Overlay", "Correlates Labs + Imaging"],
      color: "from-indigo-500/10 to-indigo-500/5 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/40",
    },
    {
      id: "clinical-dashboard",
      icon: LayoutDashboard,
      title: "Clinical Dashboard",
      tagline: "Unified Timeline & Differential Diagnosis",
      description:
        "Provides doctors with a 360-degree patient timeline, symptoms correlation, differential diagnosis ranking, and evidence-based treatment suggestions.",
      benefits: ["One-Click Summary", "Ranked Differentials", "Evidence-Based RAG"],
      color: "from-[#06635d]/10 to-[#06635d]/5 text-[#06635d] dark:text-teal-400 border-teal-300 dark:border-teal-800/40",
    },
    {
      id: "physician-assistant",
      icon: Bot,
      title: "AI Physician Assistant",
      tagline: "Conversational Copilot for Doctors",
      description:
        "An on-demand clinical chatbot that answers queries, references latest medical literature, checks drug interactions, and drafts clinical notes.",
      benefits: ["Instant Q&A", "Drug Interaction Checks", "SOAP Note Generation"],
      color: "from-emerald-500/10 to-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/40",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#061518] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-teal-500" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Engineered for Modern Clinical Workflows
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Explore the specialized AI engines powering CareFlow clinical decision support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 bg-white dark:bg-[#0b1f24] border ${item.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Feature 0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#06635d] dark:group-hover:text-teal-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#06635d] dark:text-teal-400 mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-teal-950 space-y-1.5">
                    {item.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-teal-950/60">
                  <Link
                    href={`/features#${item.id}`}
                    className="inline-flex items-center space-x-2 text-xs font-bold text-[#06635d] dark:text-teal-400 hover:underline"
                  >
                    <span>Learn how it works</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
