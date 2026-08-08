import React from "react";
import Link from "next/link";
import { HelpCircle, ShieldCheck, Wallet, RefreshCw } from "lucide-react";
import { PricingTiers } from "@/components/pricing/PricingTiers";
import { CTA } from "@/components/home/CTA";

export const metadata = {
  title: "Pricing",
  description:
    "Simple per-doctor pricing for Egyptian clinics. From $19 a month with patient encounters included. No setup fee, no contract, first month free.",
  alternates: { canonical: "/pricing" },
};

const FAQ = [
  {
    q: "What counts as one encounter?",
    a: "One patient visit processed end to end — the history taken by voice, any laboratory report or radiology image read, and the clinical dashboard produced. Opening the same patient's file again later does not count again.",
  },
  {
    q: "What happens if I go over my allowance?",
    a: "Nothing stops working. Additional encounters are charged at $0.25 each on your next invoice. If you regularly exceed your allowance we will tell you, because moving up a plan will usually cost you less.",
  },
  {
    q: "Do I need to install anything or connect my records system?",
    a: "No. CareFlow works on a tablet or phone you already own, and it does not need an electronic record system to connect to. Most of the clinics we serve keep paper records, which is exactly what CareFlow is designed for.",
  },
  {
    q: "Is the first month really free?",
    a: "Yes, on the Starter and Practice plans. No card is required to begin and you can stop at any point during the month without being charged.",
  },
  {
    q: "Can I change or cancel my plan?",
    a: "Change or cancel from within the portal at any time. There is no contract, no notice period and no cancellation fee. A change takes effect on your next billing date.",
  },
  {
    q: "How do you protect my patients' information?",
    a: "Uploaded laboratory documents pass through a masking step that removes patient-identifying regions before the document reaches any third-party model. Data in transit is encrypted with TLS 1.3, and patient information is never used to train public AI models. Our handling is designed around Egypt's Personal Data Protection Law (Law 151/2020).",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="inline-block mb-4 text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Less than one consultation fee a month
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            One price per doctor, patient encounters included, and no contract. Start free for a
            month and stop whenever you like.
          </p>
        </div>
      </section>

      {/* Tiers, note and comparison */}
      <section className="py-16 bg-white dark:bg-[#021418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTiers />
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="py-12 bg-slate-50 dark:bg-[#06171a] border-y border-slate-200 dark:border-teal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Wallet, title: "No setup fee", desc: "Nothing to pay before you begin, and no implementation project." },
            { icon: RefreshCw, title: "No contract", desc: "Monthly billing. Change plan or cancel from the portal at any time." },
            { icon: ShieldCheck, title: "Patient data masked", desc: "Identifying details are removed before any document reaches a third-party model." },
            { icon: HelpCircle, title: "Support in Arabic", desc: "Help from people who understand how an Egyptian clinic actually runs." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-white dark:bg-[#021418]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
            Questions about pricing
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10">
            If something here is unclear, ask us directly — we would rather answer than have you guess.
          </p>
          <div className="space-y-4">
            {FAQ.map(({ q, a }) => (
              <div
                key={q}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40"
              >
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-slate-600 dark:text-slate-400">
            Still deciding?{" "}
            <Link href="/contact" className="text-[#06635d] dark:text-teal-400 font-semibold hover:underline">
              Book a demonstration in your clinic
            </Link>{" "}
            and see it run on a real patient.
          </p>
        </div>
      </section>

      <CTA />
    </div>
  );
}
