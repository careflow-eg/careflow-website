import React from "react";
import Metadata from "next";
import Image from "next/image";
import {
  HeartPulse,
  Target,
  Eye,
  Award,
  Users,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { CTA } from "@/components/home/CTA";

export const metadata = {
  title: "About CareFlow AI | Mission & Vision",
  description:
    "Learn about CareFlow's mission to eliminate administrative burnout for physicians and improve patient outcomes through clinical AI intelligence.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
            About CareFlow AI
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Empowering Doctors. Elevating Care.
          </h1>
          <p className="text-slate-300 text-lg">
            We build clinical AI technology that restores the doctor-patient connection by automating documentation and diagnostic data aggregation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-[#021418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                CareFlow was created with a clear objective: to free board-certified physicians and clinical teams from the crushing burden of electronic health record paperwork. By automating patient history intake, lab report parsing, and imaging highlights, we give doctors their time back.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  <span>Eliminate clinical documentation overhead</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  <span>Accelerate outpatient clinical intake &amp; triage</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  <span>Ground clinical decisions in evidence-based guidelines</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Our Vision
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                We envision a healthcare system where technology operates seamlessly in the background — connecting patient symptoms, laboratory findings, and diagnostic imaging into a single intelligent workspace that supports physicians without intruding on the human therapeutic relationship.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-teal-50 dark:bg-[#06171a] border border-teal-200 dark:border-teal-900/40">
              <div className="text-3xl font-extrabold text-[#06635d] dark:text-teal-400">100k+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase mt-1">Patient Intakes</div>
            </div>
            <div className="p-6 rounded-2xl bg-teal-50 dark:bg-[#06171a] border border-teal-200 dark:border-teal-900/40">
              <div className="text-3xl font-extrabold text-[#06635d] dark:text-teal-400">50%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase mt-1">Time Saved per Visit</div>
            </div>
            <div className="p-6 rounded-2xl bg-teal-50 dark:bg-[#06171a] border border-teal-200 dark:border-teal-900/40">
              <div className="text-3xl font-extrabold text-[#06635d] dark:text-teal-400">99.2%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase mt-1">Lab OCR Accuracy</div>
            </div>
            <div className="p-6 rounded-2xl bg-teal-50 dark:bg-[#06171a] border border-teal-200 dark:border-teal-900/40">
              <div className="text-3xl font-extrabold text-[#06635d] dark:text-teal-400">100%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase mt-1">HIPAA Compliant</div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
