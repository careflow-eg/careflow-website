import React from "react";
import Metadata from "next";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTA } from "@/components/home/CTA";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | CareFlow AI",
  description:
    "Find answers to common questions regarding CareFlow AI platform capabilities, HIPAA compliance, EHR integration, and multi-language support.",
};

export default function FAQPage() {
  const faqItems = [
    {
      question: "What is CareFlow?",
      answer:
        "CareFlow is a connected AI Clinical Assistant platform designed for medical clinics and physicians. It automates clinical documentation, gathers structured patient history via voice/text intake, performs OCR extraction on lab reports, analyzes radiology imaging, and presents a unified clinical decision support dashboard to doctors.",
    },
    {
      question: "Is patient data secure and HIPAA compliant?",
      answer:
        "Yes, absolutely. CareFlow enforces enterprise-grade security compliance including HIPAA and GDPR standards. All data in transit is encrypted using TLS 1.3, and data at rest is protected with AES-256 encryption. Patient data is processed within strict HIPAA boundaries and is never used to train public LLM models.",
    },
    {
      question: "Which medical specialties are supported?",
      answer:
        "CareFlow is optimized for outpatient and primary care practices including Internal Medicine, Family Practice, Emergency Medicine, Cardiology, Pulmonology, and General Outpatient Clinics. Specialized clinical intake modules adapt dynamically to your clinic's specialty.",
    },
    {
      question: "Can CareFlow integrate with our existing EHR / EMR system?",
      answer:
        "Yes. CareFlow provides seamless integration options via FHIR (Fast Healthcare Interoperability Resources) APIs, REST webhooks, and EHR connectors, allowing SOAP notes and lab summaries to be pushed directly into your electronic health records.",
    },
    {
      question: "Is Arabic language supported for patient intake?",
      answer:
        "Yes! CareFlow's AI history intake engine supports natural multi-lingual patient conversations in both English and Arabic (including dialectal variations), translating patient responses into structured medical English for the physician's dashboard.",
    },
    {
      question: "Does CareFlow replace doctor clinical judgment?",
      answer:
        "No. CareFlow functions strictly as an intelligent clinical assistant operating on a 'Human-in-the-Loop' model. The physician maintains full authority and oversight over every medical decision, diagnosis, and prescription.",
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-block mb-4 text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
            Platform Help Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-lg">
            Got questions about CareFlow AI? Here are answers to common inquiries from physicians, clinic managers, and health IT leads.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-20 bg-white dark:bg-[#021418]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTA />
    </div>
  );
}
