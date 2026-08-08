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

/**
 * Each card carries a small preview of what that engine actually returns.
 * These are drawn in markup rather than shipped as imagery — the shapes are
 * real output shapes, they weigh nothing, and they stay sharp at any density.
 */
type Preview = { label: string; value: string; tone?: "flag" | "ok" | "muted" }[];

export function KeyFeatures() {
  const features: {
    id: string;
    icon: typeof MessageSquare;
    title: string;
    tagline: string;
    description: string;
    benefits: string[];
    color: string;
    preview: Preview;
  }[] = [
    {
      id: "history-taking",
      icon: MessageSquare,
      title: "AI History Taking",
      tagline: "Voice & Conversational Patient Intake",
      description:
        "The patient answers by voice in colloquial Egyptian Arabic while they wait. Each follow-up question is written from what they have already said, and the interview stops when enough clinical ground has been covered.",
      benefits: ["Egyptian Arabic Voice", "Structured HPI Output", "Asks Until It Has Enough"],
      color:
        "from-teal-500/10 to-teal-500/5 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900/40",
      preview: [
        { label: "Asked", value: "الألم بدأ إمتى؟", tone: "muted" },
        { label: "Onset", value: "3 days ago" },
        { label: "Character", value: "Sharp, pleuritic" },
      ],
    },
    {
      id: "lab-interpretation",
      icon: FileText,
      title: "Laboratory Interpretation",
      tagline: "OCR Extraction & Abnormal Flagging",
      description:
        "Photograph a lab sheet and get back test name, value, unit, reference range and flag as structured data. Patient-identifying details are masked before the document reaches any model.",
      benefits: ["Values, Units and Flags", "Trend Analysis", "Critical Alerts"],
      color:
        "from-blue-500/10 to-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/40",
      preview: [
        { label: "Patient name", value: "masked", tone: "muted" },
        { label: "WBC", value: "14.2 ×10⁹/L", tone: "flag" },
        { label: "Haemoglobin", value: "13.8 g/dL", tone: "ok" },
      ],
    },
    {
      id: "radiology-interpretation",
      icon: FileCheck2,
      title: "Radiology Interpretation",
      tagline: "Structured Findings From the Image",
      description:
        "Reads an uploaded X-ray, CT or MRI and returns modality, body part, findings, abnormalities and a written impression as structured data, ready to correlate against the history and the labs.",
      benefits: ["X-ray, CT and MRI", "Modality and Region", "Correlates Labs + Imaging"],
      color:
        "from-indigo-500/10 to-indigo-500/5 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/40",
      preview: [
        { label: "Modality", value: "MRI" },
        { label: "Body part", value: "Brain" },
        { label: "Finding", value: "Right frontal lobe lesion", tone: "flag" },
      ],
    },
    {
      id: "clinical-dashboard",
      icon: LayoutDashboard,
      title: "Clinical Dashboard",
      tagline: "Unified Timeline & Differential Diagnosis",
      description:
        "One screen with the chronological timeline, laboratory and radiology insights, cross-source correlations, emergency red flags, and ranked differentials — each showing what supports it, what argues against it, and what is still missing.",
      benefits: ["One-Click Summary", "Ranked Differentials", "Evidence-Based RAG"],
      color:
        "from-[#06635d]/10 to-[#06635d]/5 text-[#06635d] dark:text-teal-400 border-teal-300 dark:border-teal-800/40",
      preview: [
        { label: "Red flag", value: "Hypoxia on room air", tone: "flag" },
        { label: "Ranked 1st", value: "Community-acquired pneumonia" },
        { label: "Still missing", value: "Sputum culture", tone: "muted" },
      ],
    },
    {
      id: "physician-assistant",
      icon: Bot,
      title: "AI Physician Assistant",
      tagline: "Assistant Grounded in the Patient File",
      description:
        "Ask a question in plain language and get an answer drawn only from that patient’s own file, returned with the exact source snippet and a confidence score. Drafts visit notes, referral letters and insurance reports from what the system already holds.",
      benefits: ["Answers From the File Only", "Shows Its Source", "Visit Notes and Letters"],
      color:
        "from-emerald-500/10 to-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/40",
      preview: [
        { label: "Asked", value: "Any renal impairment?", tone: "muted" },
        { label: "Answer", value: "Creatinine 1.6 mg/dL", tone: "flag" },
        { label: "Source", value: "Lab report, 2 Aug" },
      ],
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

                  <div className="mt-4 rounded-xl bg-slate-50 dark:bg-[#061518] border border-slate-200 dark:border-teal-900/40 p-3 space-y-1.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      What it returns
                    </div>
                    {item.preview.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-baseline justify-between gap-3 text-[11px]"
                      >
                        <span className="text-slate-500 dark:text-slate-400 shrink-0">
                          {row.label}
                        </span>
                        <span
                          className={[
                            "font-semibold text-right leading-snug",
                            row.tone === "flag"
                              ? "text-amber-700 dark:text-amber-400"
                              : row.tone === "muted"
                                ? "text-slate-400 dark:text-slate-500 italic"
                                : "text-slate-800 dark:text-slate-100",
                          ].join(" ")}
                        >
                          {row.value}
                        </span>
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
