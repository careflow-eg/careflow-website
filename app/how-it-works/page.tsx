import React from "react";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CTA } from "@/components/home/CTA";
import { ShieldCheck, Cpu, Database } from "lucide-react";

export const metadata = {
  title: "How It Works",
  description:
    "From the waiting room to the consultation: how CareFlow takes the history, reads the laboratory report and the scan, and assembles one evidence-backed dashboard.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="inline-block mb-4 text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
            Platform Workflow
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            From Patient Intake to Clinical Action
          </h1>
          <p className="text-slate-300 text-lg">
            CareFlow automatically bridges the gap between patient reporting, diagnostic data, and physician decision-making.
          </p>
        </div>
      </section>

      {/* Embedded Main How It Works Step Component */}
      <HowItWorks />

      {/* Tech Architecture Pillars */}
      <section className="py-16 bg-slate-50 dark:bg-[#061518] border-t border-slate-200 dark:border-teal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Behind the Scenes: Architectural Resilience
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Built with privacy-first clinical NLP pipelines and verified medical knowledge bases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 space-y-3">
              <Cpu className="w-8 h-8 text-[#06635d] dark:text-teal-400" />
              <h3 className="font-bold text-slate-900 dark:text-white">Multi-Modal AI Ingestion</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Processes unstructured audio streams, paper lab PDFs, and radiology images concurrently without manual intervention.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 space-y-3">
              <Database className="w-8 h-8 text-[#06635d] dark:text-teal-400" />
              <h3 className="font-bold text-slate-900 dark:text-white">Clinical Guidelines RAG</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Retrieves up-to-date treatment guidelines (WHO, NICE and standard reference texts) to ground all differential diagnoses and recommendations.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#06635d] dark:text-teal-400" />
              <h3 className="font-bold text-slate-900 dark:text-white">Human-in-the-Loop Control</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The physician maintains full authority over every prescription and diagnosis. AI acts strictly as an assistant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
