"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  FileSpreadsheet,
  FileSearch,
  LayoutDashboard,
  Bot,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

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
              Physicians spend up to 40% of their workday dealing with fragmented records and manual documentation. CareFlow connects patient intake, lab results, and diagnostic imaging into a single intelligent workflow.
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

          {/* Right Column: Visual Graphic Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-teal-900/40 group">
              <div className="relative h-[420px] sm:h-[480px] w-full bg-gradient-to-br from-teal-950 to-[#021418]">
                <Image
                  src="/assets/img/hero-bg.png"
                  alt="CareFlow Platform Overview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021418] via-transparent to-transparent" />
                
                {/* Floating Badge overlays */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 dark:bg-[#0b1f24]/90 backdrop-blur-md border border-slate-200 dark:border-teal-800/40 shadow-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#06635d] dark:text-teal-400 uppercase">
                      Clinical Efficiency Metrics
                    </span>
                    <span className="text-[10px] bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded font-mono">
                      Real-Time Data
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="p-2 rounded bg-slate-50 dark:bg-[#06171a]">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">65%</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Faster Notes</div>
                    </div>
                    <div className="p-2 rounded bg-slate-50 dark:bg-[#06171a]">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">99.2%</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">OCR Accuracy</div>
                    </div>
                    <div className="p-2 rounded bg-slate-50 dark:bg-[#06171a]">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">&lt; 3s</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">CDS Latency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
