import React from "react";
import Metadata from "next";
import Link from "next/link";
import {
  Building2,
  Stethoscope,
  HeartPulse,
  Users,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { CTA } from "@/components/home/CTA";

export const metadata = {
  title: "Clinical Solutions & Specialties",
  description:
    "Tailored CareFlow AI solutions for Private Clinics, Physicians, Internal Medicine, Family Practice, and Emergency Medicine.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: "Private Clinics & Polyclinics",
      description:
        "Streamline outpatient operations, shorten wait times, and eliminate documentation backlogs across multi-specialty clinics.",
      features: [
        "Patient pre-intake before arrival",
        "Unified multi-physician dashboards",
        "EHR & Practice Management compatibility",
      ],
    },
    {
      icon: Stethoscope,
      title: "Solo & Group Physicians",
      description:
        "Reclaim your personal time and eliminate after-hours documentation charting with AI-assisted intake and SOAP notes.",
      features: [
        "Instant voice-to-structured history",
        "Automated lab & imaging summary",
        "Customizable clinical templates",
      ],
    },
    {
      icon: HeartPulse,
      title: "Internal Medicine",
      description:
        "Manage complex multi-system chronic conditions with longitudinal lab tracking and evidence-based diagnostic support.",
      features: [
        "Multi-year lab trend charts",
        "Comorbidity risk scoring",
        "Polypharmacy interaction checks",
      ],
    },
    {
      icon: Users,
      title: "Family & General Medicine",
      description:
        "Deliver personalized continuous care for patients of all ages while speeding up routine clinical checkups.",
      features: [
        "Comprehensive preventive care tracking",
        "Pediatric & geriatric history templates",
        "Multilingual intake options",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Emergency Care & Urgent Care",
      description:
        "Accelerate triage and acute decision-making when every minute counts in urgent clinical settings.",
      features: [
        "Rapid triage symptom intake",
        "Instant radiology prelim insights",
        "Critical red-flag risk alerts",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
            Tailored Healthcare Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Designed for Every Clinical Practice
          </h1>
          <p className="text-slate-300 text-lg">
            Whether you operate an independent private clinic or a high-volume outpatient practice, CareFlow adapts to your specialty requirements.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white dark:bg-[#021418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-8 bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#06635d] dark:bg-teal-500 text-white dark:text-[#021418] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-slate-200 dark:border-teal-950 space-y-2">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200 dark:border-teal-950">
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-2 text-xs font-bold text-[#06635d] dark:text-teal-400 hover:underline"
                    >
                      <span>Get solution overview for your clinic</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
