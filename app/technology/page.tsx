import React from "react";
import Metadata from "next";
import {
  Brain,
  Database,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";
import { CTA } from "@/components/home/CTA";

export const metadata = {
  title: "AI Technology & Medical RAG Architecture",
  description:
    "Discover the AI architecture powering CareFlow: Clinical LLMs, Retrieval-Augmented Generation (RAG), Evidence-Based Reasoning, and Human-in-the-Loop Safety.",
};

export default function TechnologyPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
            CareFlow AI Core Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Evidence-Based Medical AI
          </h1>
          <p className="text-slate-300 text-lg">
            Grounded in peer-reviewed clinical guidelines, domain-tuned LLMs, and multi-modal document extraction.
          </p>
        </div>
      </section>

      {/* Tech Architecture Overview */}
      <section className="py-20 bg-white dark:bg-[#021418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Architecture Flow Diagram */}
          <div className="rounded-3xl p-8 bg-slate-900 text-white border border-teal-900/60 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                Pipeline Architecture
              </span>
              <h2 className="text-2xl font-extrabold text-white">
                Multi-Stage Clinical Intelligence Engine
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <Brain className="w-6 h-6 text-teal-400 mx-auto" />
                <div className="font-bold text-sm">1. Intake AI</div>
                <div className="text-[11px] text-slate-400">Conversational Symptom Extraction</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <Layers className="w-6 h-6 text-blue-400 mx-auto" />
                <div className="font-bold text-sm">2. Lab OCR</div>
                <div className="text-[11px] text-slate-400">Standardized Lab Panel Structuring</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <Cpu className="w-6 h-6 text-indigo-400 mx-auto" />
                <div className="font-bold text-sm">3. Radiology AI</div>
                <div className="text-[11px] text-slate-400">Visual Findings &amp; Image Highlights</div>
              </div>
              <div className="p-4 rounded-xl bg-teal-950 border border-teal-600 space-y-2">
                <Database className="w-6 h-6 text-teal-300 mx-auto" />
                <div className="font-bold text-sm text-teal-300">4. Medical RAG</div>
                <div className="text-[11px] text-teal-400">Guideline Retrieval &amp; Correlation</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto" />
                <div className="font-bold text-sm">5. Doctor CDS</div>
                <div className="text-[11px] text-slate-400">Unified Clinical Dashboard</div>
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center font-bold">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Medical RAG (Retrieval-Augmented Generation)
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Standard LLMs are prone to hallucinating medical facts. CareFlow eliminates hallucination risk by enforcing strict Retrieval-Augmented Generation against validated clinical guidelines (IDSA, ACC, ADA, NCCN). Every suggestion cites exact clinical literature.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Human-in-the-Loop Safety Safeguards
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                CareFlow does not prescribe, diagnose, or act autonomously. It functions exclusively as a physician assistant. The licensed healthcare provider retains complete control to review, edit, approve, or reject all AI outputs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                HIPAA &amp; Zero Data Retention Security
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                All patient data in transit is encrypted with TLS 1.3, and at rest with AES-256. Patient data is never used to train public LLM models or stored outside compliant clinical boundaries.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Multi-Modal Diagnostic Fusion
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Combines textual voice intake transcripts, structured lab values, and radiological DICOM images into a single unified clinical context for comprehensive differential diagnosis reasoning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
