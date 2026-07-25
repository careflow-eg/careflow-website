import React from "react";
import Metadata from "next";

export const metadata = {
  title: "Terms of Service | CareFlow AI",
  description: "Terms of Service for CareFlow AI marketing website and platform.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#021418]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using the CareFlow website and clinical decision support platform, you agree to be bound by these Terms of Service.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Medical Disclaimer</h2>
            <p>
              CareFlow is an artificial intelligence clinical assistant provided for educational, documentation support, and administrative efficiency purposes to licensed medical professionals. CareFlow does not replace independent clinical judgment, medical diagnosis, or treatment decisions. Licensed physicians remain solely responsible for patient care.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Intellectual Property</h2>
            <p>
              All website content, visual design tokens, software code, algorithms, and CareFlow brand assets are the exclusive property of CareFlow AI.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Contact Information</h2>
            <p>
              If you have questions regarding these terms, please contact:{" "}
              <a href="mailto:info@careflowai.health" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                info@careflowai.health
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
