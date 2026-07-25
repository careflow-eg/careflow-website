"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Sparkles,
  ArrowRight,
  Brain,
  ShieldCheck,
  CheckCircle2,
  Activity,
  FileText,
  FileCheck2,
  Flame,
} from "lucide-react";

export function Hero() {
  const doctorPortalUrl =
    process.env.NEXT_PUBLIC_DOCTOR_PORTAL_URL || "https://doctor.careflowai.health";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden hero-gradient">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/60 text-[#06635d] dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-500 animate-pulse" />
            <span>Next-Generation AI Clinical Assistant</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
          >
            Empower Clinical Decisions with{" "}
            <span className="bg-gradient-to-r from-[#06635d] via-teal-500 to-blue-600 bg-clip-text text-transparent">
              CareFlow
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed"
          >
            CareFlow automates clinical documentation, extracts structured history, interprets lab &amp; radiology reports, and provides physicians with real-time evidence-based decision support.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-[#06635d] hover:bg-[#044c47] dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-[#021418] font-semibold text-base transition-all shadow-xl shadow-teal-900/20 hover:scale-102 active:scale-98"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={doctorPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-white dark:bg-[#0b1f24] hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-base transition-all border border-slate-200 dark:border-teal-900/40 shadow-sm"
            >
              <Stethoscope className="w-5 h-5 text-[#06635d] dark:text-teal-400" />
              <span>Doctor Portal Login</span>
            </a>
          </motion.div>

          {/* Quick trust metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500 dark:text-slate-400 pt-2"
          >
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-500" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-500" />
              <span>Evidence-Based RAG</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-500" />
              <span>Zero Clinical Delay</span>
            </div>
          </motion.div>
        </div>

        {/* Animated Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-teal-500/20 via-teal-900/10 to-transparent backdrop-blur-xl border border-teal-500/30 shadow-2xl">
            <div className="bg-[#09181b] dark:bg-[#061518] rounded-xl overflow-hidden border border-teal-900/40 shadow-inner">
              {/* Mock Dashboard Top Control Bar */}
              <div className="bg-[#021418] px-4 py-3 border-b border-teal-900/40 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-teal-300/70 ml-2">
                    CareFlow AI Assistant v2.4 — Live Patient Intake &amp; CDS
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-teal-950 text-teal-300 border border-teal-800">
                    <Activity className="w-3 h-3 mr-1 text-teal-400 animate-pulse" />
                    AI Engine Active
                  </span>
                </div>
              </div>

              {/* Mock Content Layout Grid */}
              <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {/* Card 1: History Collection */}
                <div className="bg-[#0b1f24] rounded-xl p-4 border border-teal-900/40 space-y-3">
                  <div className="flex items-center justify-between text-xs text-teal-400 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Brain className="w-4 h-4 text-teal-300" /> AI Intake Summary
                    </span>
                    <span className="text-teal-500 text-[10px]">98% Confidence</span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300">
                    <p className="font-semibold text-white">Chief Complaint:</p>
                    <p className="text-slate-400 bg-[#06171a] p-2.5 rounded-lg border border-teal-950">
                      &quot;Progressive shortness of breath and pleuritic chest pain for 3 days.&quot;
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="bg-teal-950 text-teal-300 px-2 py-0.5 rounded text-[10px]">Dyspnea</span>
                      <span className="bg-teal-950 text-teal-300 px-2 py-0.5 rounded text-[10px]">Chest Pain</span>
                      <span className="bg-amber-950 text-amber-300 px-2 py-0.5 rounded text-[10px]">Fever 38.2°C</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Lab & Radiology AI */}
                <div className="bg-[#0b1f24] rounded-xl p-4 border border-teal-900/40 space-y-3">
                  <div className="flex items-center justify-between text-xs text-teal-400 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <FileCheck2 className="w-4 h-4 text-teal-300" /> Lab &amp; Imaging OCR
                    </span>
                    <span className="text-emerald-400 text-[10px]">Verified</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center bg-[#06171a] p-2 rounded-lg border border-teal-950">
                      <span className="text-slate-300">WBC Count:</span>
                      <span className="font-semibold text-rose-400">14.2 x10³/µL (High)</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#06171a] p-2 rounded-lg border border-teal-950">
                      <span className="text-slate-300">Chest X-Ray:</span>
                      <span className="font-semibold text-amber-300">RML Consolidation</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#06171a] p-2 rounded-lg border border-teal-950">
                      <span className="text-slate-300">D-Dimer:</span>
                      <span className="font-semibold text-slate-300">0.32 µg/mL (Normal)</span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Clinical Decision Support */}
                <div className="bg-[#0b1f24] rounded-xl p-4 border border-teal-500/30 space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/10 rounded-bl-full pointer-events-none" />
                  <div className="flex items-center justify-between text-xs text-teal-400 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-teal-300" /> Differential Diagnosis
                    </span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-teal-950/80 p-2.5 rounded-lg border border-teal-700/50">
                      <div className="flex justify-between text-white font-semibold mb-1">
                        <span>Community Acquired Pneumonia</span>
                        <span className="text-teal-300 font-mono">87%</span>
                      </div>
                      <div className="w-full bg-teal-950 rounded-full h-1.5">
                        <div className="bg-teal-400 h-1.5 rounded-full w-[87%]" />
                      </div>
                    </div>
                    <div className="bg-[#06171a] p-2 rounded-lg border border-teal-950">
                      <div className="flex justify-between text-slate-300">
                        <span>Acute Bronchitis</span>
                        <span className="text-slate-400 font-mono">12%</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-teal-300/80 pt-1 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-teal-400" />
                      Guided by IDSA/ATS Pneumonia Guidelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
