import React from "react";
import Link from "next/link";
import { ShieldCheck, EyeOff, Lock, ServerCog, FileCheck2, AlertTriangle } from "lucide-react";
import { CTA } from "@/components/home/CTA";
import { AnimatedSection, AnimatedCard } from "@/components/layout/AnimatedWrapper";

export const metadata = {
  title: "Security and Data Protection",
  description:
    "How CareFlow protects patient data: identifying details masked before any third-party model, TLS 1.3 in transit, no training on patient data, designed around Egypt's Law 151/2020.",
  alternates: { canonical: "/security" },
};

const PILLARS = [
  {
    icon: EyeOff,
    title: "Identifying details are removed before inference",
    body:
      "When a laboratory document is uploaded, a layout model locates every block of text on the page and a second model decides whether each block is patient-identifying or clinical. Identifying blocks are blacked out. Only the masked image is then sent for reading. The patient's name never reaches a third-party model.",
    proof:
      "Verified on a real CBC report: all six patient identifier fields came back empty while all thirteen clinical values extracted correctly.",
  },
  {
    icon: Lock,
    title: "Encrypted in transit",
    body:
      "All traffic between the clinic, our services and the models we call is encrypted with TLS 1.3. Audio, documents and images are stored in object storage rather than in the database, so records stay small and access stays scoped.",
  },
  {
    icon: ServerCog,
    title: "Access is scoped and authenticated",
    body:
      "Every request carries a signed token. A doctor reaches their own patients and nobody else's. Roles are enforced centrally at the gateway rather than in each service, so there is one place to audit rather than nine.",
  },
  {
    icon: FileCheck2,
    title: "Your patients' data is not training data",
    body:
      "We do not use patient information to train public AI models, and we do not sell or share it. It exists to serve the clinic that produced it.",
  },
];

export default function SecurityPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="inline-block mb-4 text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
            Security &amp; Data Protection
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Your patient&apos;s name never reaches the model
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Masking happens before anything is read, not after. Here is exactly how it works, and
            what we have and have not yet done.
          </p>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-[#021418]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {PILLARS.map(({ icon: Icon, title, body, proof }, idx) => (
            <AnimatedCard
              key={title}
              delay={idx * 0.15}
              className="p-7 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.05)] group transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-2.5">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-400 transition-colors">{title}</h2>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{body}</p>
                  {proof && (
                    <p className="text-sm text-[#06635d] dark:text-teal-400 font-semibold leading-relaxed">
                      {proof}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedSection>

      {/* What we have not done — stated plainly */}
      <AnimatedSection className="py-16 bg-slate-50 dark:bg-[#06171a] border-y border-slate-200 dark:border-teal-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                What we have not done yet
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Other vendors list certifications here. We would rather tell you where we actually are.
              </p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            {[
              "We have not completed an independent security certification. We do not claim compliance with any framework we have not been audited against.",
              "We are not HIPAA certified, and HIPAA is United States law. We operate in Egypt, so our handling is designed around Egypt's Personal Data Protection Law (Law 151/2020).",
              "We do not yet integrate with hospital record systems over FHIR or HL7. CareFlow is built for clinics that keep no electronic record system at all.",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <section className="py-16 bg-white dark:bg-[#021418] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <ShieldCheck className="w-8 h-8 text-teal-500 mx-auto" />
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Questions we have not answered here
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            If your clinic has a specific requirement, ask us directly and we will tell you plainly
            whether we meet it today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#06635d] hover:bg-[#044c47] dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-[#021418] font-semibold text-sm transition-all"
            >
              Ask a security question
            </Link>
            <Link
              href="/privacy"
              className="px-6 py-3 rounded-xl border border-slate-200 dark:border-teal-900/40 text-slate-800 dark:text-slate-100 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-[#0b1f24] transition-all"
            >
              Read the privacy policy
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
