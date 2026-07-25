import React from "react";
import Metadata from "next";

export const metadata = {
  title: "Privacy Policy | CareFlow AI",
  description: "CareFlow AI Privacy Policy and Healthcare Data Protection Guidelines.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#021418]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Introduction</h2>
            <p>
              CareFlow AI (&quot;CareFlow&quot;, &quot;we&quot;, &quot;our&quot;) is committed to preserving the privacy, confidentiality, and security of health information processed through our clinical marketing website and healthcare assistant platform.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Data Handling &amp; HIPAA Compliance</h2>
            <p>
              All Protected Health Information (PHI) processed through CareFlow platforms adheres strictly to HIPAA (Health Insurance Portability and Accountability Act) and GDPR (General Data Protection Regulation) data protection standards.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
              <li>Data in transit is encrypted using industry-standard TLS 1.3 encryption.</li>
              <li>Data at rest is secured with AES-256 encryption.</li>
              <li>Patient clinical information is never disclosed to unauthorized third parties or used for commercial AI training.</li>
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
      </section>
    </div>
  );
}
