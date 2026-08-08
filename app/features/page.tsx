import React from "react";
import Metadata from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  FileSpreadsheet,
  FileSearch,
  LayoutDashboard,
  Bot,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { CTA } from "@/components/home/CTA";
import { ChatDemo } from "@/components/features/ChatDemo";
import { AnimatedSection } from "@/components/layout/AnimatedWrapper";

export const metadata = {
  title: "Features",
  description:
    "Arabic voice history taking, laboratory report extraction with PII masking, radiology interpretation, clinical correlation, red flags, and evidence-backed differentials.",
};

export default function FeaturesPage() {
  const doctorPortalUrl =
    process.env.NEXT_PUBLIC_DOCTOR_PORTAL_URL || "https://doctor.careflowai.health";

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="inline-block mb-4 text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
            CareFlow Platform Features
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            The Clinical AI Ecosystem
          </h1>
          <p className="text-slate-300 text-lg">
            Purpose-built medical AI modules designed to automate documentation, unify multi-modal health data, and support evidence-based decisions.
          </p>
        </div>
      </section>

      {/* Feature 1: AI History Collection */}
      <AnimatedSection className="py-20 bg-white dark:bg-[#021418]" id="history-taking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center font-bold">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                AI History Collection
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Replaces rigid paper questionnaires with an empathetic, conversational AI assistant. Patients converse in natural language (voice or text) before seeing the doctor.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Voice &amp; Text Conversation</strong>
                    Support for patient voice intake with real-time speech-to-text transcription.
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Dynamic Adaptive Questions</strong>
                    Asks intelligent follow-up questions tailored to chief complaint severity and medical history.
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Structured History Output</strong>
                    Outputs standardized HPI, Ros, Past Medical History, and Medication lists directly into the doctor dashboard.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl p-6 bg-[#0b1f24] border border-teal-900/40 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-teal-950 pb-3 text-xs text-teal-400 font-semibold">
                  <span>Patient Intake Assistant Demo</span>
                  <span className="bg-teal-950 px-2 py-0.5 rounded text-[10px]">Active Session</span>
                </div>
                <ChatDemo />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature 2: Laboratory Interpretation */}
      <AnimatedSection className="py-20 bg-slate-50 dark:bg-[#061518] border-y border-slate-200 dark:border-teal-950" id="lab-interpretation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl p-6 bg-white dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-teal-950 pb-3 text-xs font-semibold text-slate-600 dark:text-teal-400">
                  <span>Lab OCR &amp; Standardized Panel</span>
                  <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded text-[10px]">Identifiers masked, then read</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center p-2.5 rounded bg-slate-50 dark:bg-[#06171a] border border-slate-100 dark:border-teal-950">
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Hemoglobin A1c</div>
                      <div className="text-[10px] text-slate-400">Reference: &lt; 5.7 %</div>
                    </div>
                    <span className="font-bold text-rose-500 bg-rose-50 dark:bg-rose-950/60 px-2 py-1 rounded">8.4 % (High)</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded bg-slate-50 dark:bg-[#06171a] border border-slate-100 dark:border-teal-950">
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Serum Creatinine</div>
                      <div className="text-[10px] text-slate-400">Reference: 0.7 - 1.3 mg/dL</div>
                    </div>
                    <span className="font-bold text-amber-500 bg-amber-50 dark:bg-amber-950/60 px-2 py-1 rounded">1.6 mg/dL (Elevated)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Laboratory Interpretation
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Eliminate manual data entry from physical paper printouts or scattered lab PDFs. CareFlow OCR extracts lab values and highlights critical alerts automatically.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">High-Accuracy Document OCR</strong>
                    Parses laboratory sheets regardless of formatting, lab layout, or camera orientation.
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Intelligent Summaries &amp; Flags</strong>
                    Automatically categorizes out-of-bound indicators and projects historical progression graphs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature 3: Radiology Interpretation */}
      <AnimatedSection className="py-20 bg-white dark:bg-[#021418]" id="radiology-interpretation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <FileSearch className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Radiology Interpretation
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Empower clinicians with instant AI screening of chest radiographs, CT scans, and MRIs to detect potential abnormalities faster.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Visual Finding Extraction</strong>
                    Highlights focal consolidations, opacities, fractures, or nodules with confidence scoring.
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Clinical Correlation Engine</strong>
                    Cross-references visual imaging findings against patient symptom intake and WBC lab counts.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl p-6 bg-[#0b1f24] border border-teal-900/40 shadow-2xl space-y-3">
                <div className="flex items-center justify-between text-xs text-indigo-300 font-semibold border-b border-teal-950 pb-2">
                  <span>Chest Radiograph (AP View) AI Analysis</span>
                  <span className="text-teal-400 font-mono">radiology #8491</span>
                </div>
                <div className="p-4 rounded-xl bg-[#06171a] border border-teal-950 space-y-2">
                  <div className="flex justify-between text-xs text-slate-200">
                    <span className="font-semibold">Primary Finding:</span>
                    <span className="text-amber-400 font-semibold">Right Middle Lobe Infiltrate</span>
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    Dense airspace opacification noted in the right mid-lung zone consistent with lobar consolidation. Pleural space is clear.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature 4: Clinical Dashboard */}
      <AnimatedSection className="py-20 bg-slate-50 dark:bg-[#061518] border-t border-slate-200 dark:border-teal-950" id="clinical-dashboard">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl p-6 bg-[#0b1f24] border border-teal-900/40 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-teal-950 pb-3 text-xs text-teal-400 font-semibold">
                  <span>Unified Physician Dashboard</span>
                  <span className="text-slate-400">Patient: John Doe (45M)</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-[#06171a] border border-teal-950">
                    <span className="font-bold text-white block mb-1">Ranked Differential Diagnoses:</span>
                    <ol className="list-decimal list-inside space-y-1 text-slate-300">
                      <li>Bacterial Community-Acquired Pneumonia (87%)</li>
                      <li>Acute Bronchitis (12%)</li>
                      <li>Pulmonary Embolism (Low probability)</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center font-bold">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Clinical Dashboard
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Brings together patient history, lab values, radiology reports, and differential diagnoses into a unified, customizable physician workspace.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Chronological Health Timeline</strong>
                    View symptoms, vitals, and diagnostic results along an interactive timeline.
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Evidence-Based Treatment Plans</strong>
                    Suggests guideline-compliant therapy and antibiotic choices tailored to local resistance data.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature 5: AI Physician Assistant */}
      <AnimatedSection className="py-20 bg-white dark:bg-[#021418]" id="physician-assistant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Bot className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                AI Physician Assistant
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                An instant conversational medical copilot. Ask a question in plain language and get an answer drawn only from that patient&apos;s own file, with the exact source snippet and a confidence score. Or request automated SOAP notes.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Literature-Backed Responses</strong>
                    Retrieves peer-reviewed studies and clinical guidelines instantly via medical RAG.
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Instant SOAP Note Drafting</strong>
                    Translates the patient consultation and findings into structured SOAP documentation in seconds.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl p-6 bg-[#0b1f24] border border-teal-900/40 shadow-2xl space-y-4">
                <div className="flex items-center space-x-2 text-xs text-emerald-400 font-semibold border-b border-teal-950 pb-2">
                  <Bot className="w-4 h-4" />
                  <span>Physician Assistant Consultation</span>
                </div>
                <div className="space-y-2 text-xs text-slate-200">
                  <div className="bg-[#06171a] p-3 rounded-lg border border-teal-950">
                    <span className="font-semibold text-teal-400">Doctor Prompt:</span> &quot;Recommend empirical antibiotic regimen for moderate CAP in a patient with a penicillin allergy.&quot;
                  </div>
                  <div className="bg-teal-950/80 p-3 rounded-lg border border-teal-800 text-teal-200 space-y-1">
                    <span className="font-bold text-white block">CareFlow Assistant Answer:</span>
                    <p>Per WHO and NICE guidance, for patients with severe penicillin allergy, recommended outpatient empirical options include respiratory fluoroquinolones (Levofloxacin 750mg QD or Moxifloxacin 400mg QD) or Doxycycline 100mg BID.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTA />
    </div>
  );
}
