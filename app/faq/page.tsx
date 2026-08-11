import React from "react";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTA } from "@/components/home/CTA";
import { AnimatedSection } from "@/components/layout/AnimatedWrapper";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers on how CareFlow works in an Egyptian clinic: Arabic voice intake, laboratory and radiology reading, data protection under Law 151/2020, and what it costs.",
};

export default function FAQPage() {
  const faqItems = [
    {
      question: "What is CareFlow?",
      answer:
        "CareFlow is a clinical AI ecosystem built for Egyptian outpatient clinics. It automates clinical documentation, gathers structured patient history via voice/text intake, performs OCR extraction on lab reports, analyzes radiology imaging, and presents a unified clinical decision support dashboard to doctors.",
    },
    {
      question: "How is patient data protected?",
      answer:
        "CareFlow operates in Egypt, so our data handling is designed around Egypt's Personal Data Protection Law (Law 151/2020). Data in transit is encrypted using TLS 1.3. Uploaded lab documents pass through a masking pipeline that blacks out patient-identifying regions before the image reaches any third-party model. Patient data is never used to train public AI models. We have not yet completed independent security certification, and we do not claim compliance with frameworks we have not been audited against.",
    },
    {
      question: "Which medical specialties are supported?",
      answer:
        "CareFlow is optimized for outpatient and primary care practices including Internal Medicine, Family Practice, Emergency Medicine, Cardiology, Pulmonology, and General Outpatient Clinics. Specialized clinical intake modules adapt dynamically to your clinic's specialty.",
    },
    {
      question: "Can CareFlow integrate with our existing EHR / EMR system?",
      answer:
        "Not today. CareFlow runs alongside your existing records rather than inside them — the dashboard and history summary can be exported or printed. Direct EHR/EMR integration is not on the near-term roadmap: we built for independent clinics, where it is rarely the blocker. If it is a blocker for you, tell us, because that changes the calculus.",
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
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
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
      <AnimatedSection className="py-20 bg-white dark:bg-[#021418]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} />
        </div>
      </AnimatedSection>

      <CTA />
    </div>
  );
}
