"use client";

import React from "react";
import Link from "next/link";
import {
  Brain,
  FileSpreadsheet,
  FileSearch,
  LayoutDashboard,
  Bot,
  ArrowRight,
  Mic,
} from "lucide-react";

/** The three inputs CareFlow correlates, each with its measured latency. */
const INPUTS = [
  { icon: Mic, label: "Voice history", detail: "Egyptian Arabic, structured live", time: "~1.8s/turn" },
  { icon: FileSpreadsheet, label: "Laboratory report", detail: "Masked, then read", time: "52.72s" },
  { icon: FileSearch, label: "Radiology image", detail: "X-ray, CT or MRI", time: "16.32s" },
] as const;

/** What the dashboard actually surfaces, from a real correlated encounter. */
const OUTPUT: { label: string; value: string; flag?: boolean }[] = [
  { label: "Red flag", value: "Hypoxia on room air", flag: true },
  { label: "Ranked 1st", value: "Community-acquired pneumonia" },
  { label: "Evidence", value: "WHO pneumonia guidance" },
];

export function PlatformOverview() {
  const highlights = [
    {
      icon: Brain,
      title: "Intelligent History Collection",
      desc: "Conversational intake agent asking dynamic, guideline-backed follow-up questions to gather thorough symptoms prior to consultation.",
    },
    {
      icon: FileSpreadsheet,
      title: "Lab Report OCR & Summaries",
      desc: "Instant OCR extraction of unstructured lab PDFs into standardized panels with flagged abnormal thresholds and chronological trends.",
    },
    {
      icon: FileSearch,
      title: "Radiology AI Interpretation",
      desc: "Automated analysis of chest X-rays, CTs, and MRIs, correlating imaging findings with patient history for instant preliminary insights.",
    },
    {
      icon: LayoutDashboard,
      title: "Unified Clinical Dashboard",
      desc: "Presents timeline views, differential diagnoses, evidence-based recommendations, and risk stratification in one unified interface.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#021418] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-[#06635d] dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Bot className="w-4 h-4 text-teal-500" />
              <span>Platform Intelligence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Transforming Raw Clinical Data into{" "}
              <span className="text-[#06635d] dark:text-teal-400">
                Actionable Insights
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              In most Egyptian clinics the consultation starts cold: the history is taken from scratch, the laboratory report is read on the spot and the scan is squinted at between patients. CareFlow does all three before the patient sits down, and hands the doctor one screen instead of three problems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-100 dark:border-teal-900/40 space-y-2 hover:border-teal-500/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-950 flex items-center justify-center text-[#06635d] dark:text-teal-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/features"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#06635d] dark:text-teal-400 hover:text-[#044c47] dark:hover:text-teal-300 group"
              >
                <span>Explore all platform capabilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/*
            Right column: the pipeline, drawn rather than photographed. Each
            input carries its measured latency, so the graphic is also the
            evidence. Nothing here is decorative stock imagery.
          */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-teal-900/40 bg-gradient-to-br from-teal-950 to-[#021418] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                  Before the consultation
                </span>
                <span className="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded font-mono border border-teal-800">
                  Measured, not estimated
                </span>
              </div>

              {/* Three inputs */}
              <div className="space-y-2.5">
                {INPUTS.map(({ icon: Icon, label, detail, time }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0b1f24]/80 border border-teal-900/50"
                  >
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-teal-950 text-teal-400 flex items-center justify-center border border-teal-800/60">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-white truncate">{label}</div>
                      <div className="text-[11px] text-slate-400 truncate">{detail}</div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-teal-300 shrink-0">
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Convergence */}
              <div className="flex justify-center py-0.5" aria-hidden="true">
                <div className="w-px h-5 bg-gradient-to-b from-teal-800 to-teal-500" />
              </div>

              {/* Output */}
              <div className="p-4 rounded-xl bg-[#0b1f24] border border-teal-500/40 space-y-2.5">
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4 text-teal-400" />
                  <span className="text-sm font-bold text-white">One clinical dashboard</span>
                  <span className="ml-auto text-xs font-mono text-teal-300">5.58s</span>
                </div>
                {OUTPUT.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-3 text-xs">
                    <span className="text-slate-400 shrink-0">{row.label}</span>
                    <span
                      className={`font-semibold text-right ${
                        row.flag ? "text-amber-400" : "text-slate-100"
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2 rounded-lg bg-[#06171a] border border-teal-900/40">
                  <div className="text-lg font-bold text-white">3</div>
                  <div className="text-[10px] text-slate-400">Modalities Fused</div>
                </div>
                <div className="p-2 rounded-lg bg-[#06171a] border border-teal-900/40">
                  <div className="text-lg font-bold text-white">11</div>
                  <div className="text-[10px] text-slate-400">AI Models</div>
                </div>
                <div className="p-2 rounded-lg bg-[#06171a] border border-teal-900/40">
                  <div className="text-lg font-bold text-white">13</div>
                  <div className="text-[10px] text-slate-400">Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
