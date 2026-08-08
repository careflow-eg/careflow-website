import React from "react";
import Metadata from "next";
import { AnimatedSection } from "@/components/layout/AnimatedWrapper";

export const metadata = {
  title: "Privacy Policy",
  description: "How CareFlow handles patient data, designed around Egypt's Personal Data Protection Law (Law 151/2020), including PII masking before third-party inference.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <AnimatedSection className="py-16 bg-white dark:bg-[#021418]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Introduction</h2>
            <p>
              CareFlow AI (&quot;CareFlow&quot;, &quot;we&quot;, &quot;our&quot;) is committed to preserving the privacy, confidentiality, and security of health information processed through our clinical marketing website and healthcare assistant platform.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Data Handling &amp; Regulatory Alignment</h2>
            <p>
              CareFlow operates in Egypt. Our handling of patient data is designed around Egypt&apos;s Personal Data Protection Law (Law 151/2020), with reference to GDPR principles where they are stricter. We do not claim certification under any framework we have not been audited against.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
              <li>Data in transit is encrypted using TLS 1.3.</li>
              <li>Uploaded lab documents pass through a masking pipeline that removes patient-identifying regions before the image is sent to any third-party model.</li>
              <li>Patient clinical information is never sold, disclosed to unauthorised third parties, or used to train public AI models.</li>
              <li>Formal independent security certification is on our roadmap and has not yet been completed.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Information Collected</h2>
            <p>
              We collect information provided directly when you fill out contact demo forms, including your full name, professional email address, clinic name, phone number, and inquiry message details.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Contact Us</h2>
            <p>
              For privacy or compliance inquiries, please contact our Data Protection Officer at:{" "}
              <a href="mailto:info@careflowai.health" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                info@careflowai.health
              </a>.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
