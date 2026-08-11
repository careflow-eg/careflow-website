import React from "react";
import {
  Database,
  ShieldCheck,
  Lock,
  Sparkles,
} from "lucide-react";
import { CTA } from "@/components/home/CTA";

import { PipelineArchitecture } from "@/components/technology/PipelineArchitecture";

export const metadata = {
  title: "Technology",
  description:
    "The architecture behind CareFlow: Arabic speech recognition, medical vision-language models, hybrid retrieval over WHO guidance and reference texts, and evidence-first reasoning.",
};

export default function TechnologyPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="inline-block mb-4 text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
            How CareFlow Works Underneath
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Evidence-Based Medical AI
          </h1>
          <p className="text-slate-300 text-lg">
            Eleven specialised models across thirteen services, tuned for Egyptian Arabic and grounded in published clinical evidence.
          </p>
        </div>
      </section>

      {/* Tech Architecture Overview */}
      <section className="py-20 bg-white dark:bg-[#021418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Architecture Flow Diagram */}
          <PipelineArchitecture />

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
                General-purpose language models invent medical facts. CareFlow constrains its reasoning to retrieved evidence: WHO clinical guidelines, NICE guidance and standard reference texts including Harrison&apos;s, Kumar &amp; Clark, Davidson&apos;s, Macleod&apos;s and the Oxford Textbook of Medicine. Retrieval is hybrid, and a cross-encoder re-ranks results before they reach the reasoning step. Every suggestion carries the evidence it rests on, so you can check it rather than trust it.
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
                PII Masking Before Inference
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Uploaded lab documents pass through a masking pipeline that detects and blacks out patient-identifying regions before the image reaches any third-party model. Our data handling is designed around Egypt&apos;s Personal Data Protection Law (Law 151/2020).
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
                Combines the Arabic voice history, structured laboratory values and the uploaded radiology image into one clinical context, then correlates across all three to produce ranked differentials with the supporting, contradicting and still-missing evidence for each.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
