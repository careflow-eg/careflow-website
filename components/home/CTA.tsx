"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Stethoscope, ShieldCheck } from "lucide-react";

export function CTA() {
  const doctorPortalUrl =
    process.env.NEXT_PUBLIC_DOCTOR_PORTAL_URL || "https://doctor.careflowai.health";

  return (
    <section className="py-20 bg-[#021418] relative overflow-hidden border-t border-teal-900/40">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-950/80 border border-teal-800 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Ready for Immediate Deployment</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Ready to Supercharge Your Practice with CareFlow AI?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Join forward-thinking clinics using CareFlow to eliminate clinical documentation burden, accelerate diagnostic intake, and deliver evidence-backed care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#021418] font-bold text-base transition-all shadow-xl shadow-teal-500/20"
            >
              <span>Schedule a 1-on-1 Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={doctorPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-[#0b1f24] hover:bg-slate-800 text-white font-semibold text-base transition-all border border-teal-800/60"
            >
              <Stethoscope className="w-5 h-5 text-teal-400" />
              <span>Access Doctor Portal</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
