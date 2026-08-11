"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Minus, ArrowRight, Info } from "lucide-react";

type Tier = {
  name: string;
  price: number;
  unit: string;
  quota: string;
  blurb: string;
  featured?: boolean;
  cta: string;
  /** Where the tier button goes. Defaults to the contact form. */
  href?: string;
  includes: string[];
};

/**
 * Figures below are the same ones published in the CareFlow business
 * documentation (CAREFLOW-MASTER.md). Do not edit here in isolation.
 */
const TIERS: Tier[] = [
  {
    name: "Starter",
    price: 19,
    unit: "per doctor / month",
    quota: "60 patient encounters included",
    blurb: "For a doctor trying CareFlow, or a lighter clinic list.",
    cta: "Start free for a month",
    includes: [
      "Egyptian Arabic voice history taking",
      "Laboratory report reading with PII masking",
      "Radiology image interpretation",
      "Clinical dashboard with red flags",
      "Patient answers in Arabic, you read it in English",
    ],
  },
  {
    name: "Practice",
    price: 49,
    unit: "per doctor / month",
    quota: "200 patient encounters included",
    blurb: "For a full-time private practice. Most doctors belong here.",
    featured: true,
    cta: "Start free for a month",
    includes: [
      "Everything in Starter",
      "Evidence-backed differential diagnoses",
      "AI assistant grounded in the patient's file",
      "Visit notes, referral letters, insurance reports",
      "Priority support in Arabic",
    ],
  },
  {
    name: "Clinic",
    price: 149,
    unit: "per doctor / month",
    quota: "750 pooled encounters included",
    blurb: "For a practice sharing premises, staff and a patient list.",
    cta: "See it for a practice",
    href: "/for-clinics",
    includes: [
      "Everything in Practice",
      "Allowance pooled across all doctors",
      "One patient register shared by the practice",
      "An administrator account for the practice",
      "Onboarding help as you add doctors",
    ],
  },
];

const COMPARISON: { label: string; values: (boolean | string)[]; note?: string }[] = [
  { label: "Arabic voice history taking", values: [true, true, true] },
  { label: "Laboratory report extraction", values: [true, true, true] },
  { label: "Radiology interpretation (X-ray, CT, MRI)", values: [true, true, true] },
  { label: "PII masked before any third-party model", values: [true, true, true] },
  { label: "Clinical dashboard and red flags", values: [true, true, true] },
  { label: "Ranked differentials with evidence shown", values: [false, true, true] },
  { label: "AI assistant grounded in the patient file", values: [false, true, true] },
  { label: "Document generation", values: [false, true, true] },
  { label: "Practice administrator account", values: [false, false, true] },
  { label: "Shared patient register", values: [false, false, true] },
  { label: "Doctors included", values: ["1", "1", "up to 5"] },
  { label: "Encounters included", values: ["60", "200", "750 pooled"] },
  { label: "Additional encounters", values: ["$0.25", "$0.25", "$0.25"], note: "charged only if you exceed the allowance" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function PricingTiers() {
  return (
    <>
      {/* ── Tier cards ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-start">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className={[
              "relative rounded-2xl p-7 flex flex-col h-full transition-all duration-300 group",
              tier.featured
                ? "bg-[#06635d] dark:bg-[#06635d] text-white shadow-2xl shadow-teal-900/25 lg:-mt-4 lg:pb-10 ring-1 ring-teal-400/40 hover:shadow-[0_0_40px_rgba(45,212,191,0.3)] hover:scale-[1.02] z-10"
                : "bg-white dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:border-teal-400/50",
            ].join(" ")}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-7 inline-flex items-center px-3 py-1 rounded-full bg-teal-300 text-[#04302c] text-[11px] font-bold uppercase tracking-wider">
                Most doctors choose this
              </span>
            )}

            <h2
              className={`text-sm font-bold uppercase tracking-wider ${
                tier.featured ? "text-teal-200" : "text-[#237a7b] dark:text-teal-400"
              }`}
            >
              {tier.name}
            </h2>

            <div className="mt-4 flex items-baseline gap-1.5">
              <span
                className={`text-5xl font-extrabold tracking-tight ${
                  tier.featured ? "text-white" : "text-slate-900 dark:text-white"
                }`}
              >
                ${tier.price}
              </span>
              <span className={tier.featured ? "text-teal-200 text-sm" : "text-slate-500 dark:text-slate-400 text-sm"}>
                {tier.unit}
              </span>
            </div>

            <p
              className={`mt-3 text-sm font-semibold ${
                tier.featured ? "text-teal-100" : "text-slate-800 dark:text-slate-200"
              }`}
            >
              {tier.quota}
            </p>
            <p className={`mt-1.5 text-sm ${tier.featured ? "text-teal-200/90" : "text-slate-500 dark:text-slate-400"}`}>
              {tier.blurb}
            </p>

            <ul className="mt-6 space-y-2.5 flex-1">
              {tier.includes.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm">
                  <Check
                    className={`w-4 h-4 mt-0.5 shrink-0 ${tier.featured ? "text-teal-300" : "text-teal-500"}`}
                  />
                  <span className={tier.featured ? "text-teal-50" : "text-slate-600 dark:text-slate-300"}>
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={tier.href ?? "/contact"}
              className={[
                "mt-7 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-sm transition-all active:scale-98",
                tier.featured
                  ? "bg-white text-[#06635d] hover:bg-teal-50"
                  : "bg-[#06635d] text-white hover:bg-[#044c47] dark:bg-teal-500 dark:text-[#021418] dark:hover:bg-teal-400",
              ].join(" ")}
            >
              <span>{tier.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ── Honest note on overage ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="mt-10 rounded-2xl bg-slate-50 dark:bg-[#06171a] border border-slate-200 dark:border-teal-900/40 p-6 sm:p-7"
      >
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white">Why there is an encounter allowance</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every encounter runs speech recognition, document reading and clinical reasoning on real
              hardware, so each one has a real cost to us. Rather than hide that in a higher flat price
              that light users would subsidise, we include a generous allowance in each plan and charge{" "}
              <strong className="text-slate-900 dark:text-white">$0.25</strong> for encounters beyond it.
              Most doctors never reach their allowance.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              No setup fee. No contract. No annual lock-in. Cancel any month.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Comparison table ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease }}
        className="mt-16"
      >
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">
          Compare the plans
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-teal-900/40">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-[#06171a]">
                <th className="text-left font-bold text-slate-900 dark:text-white px-5 py-4 w-[42%]">
                  What you get
                </th>
                {TIERS.map((t) => (
                  <th
                    key={t.name}
                    className={`px-5 py-4 font-bold ${
                      t.featured ? "text-[#06635d] dark:text-teal-400" : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, ri) => (
                <tr
                  key={row.label}
                  className={[
                    ri % 2 ? "bg-white dark:bg-[#0b1f24]" : "bg-slate-50/60 dark:bg-[#08191d]",
                    "hover:bg-slate-100 dark:hover:bg-[#0c272d] transition-colors"
                  ].join(" ")}
                >
                  <td className="px-5 py-3.5 text-slate-700 dark:text-slate-300">
                    {row.label}
                    {row.note && (
                      <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5">{row.note}</span>
                    )}
                  </td>
                  {row.values.map((v, vi) => (
                    <td key={vi} className="px-5 py-3.5 text-center">
                      {typeof v === "boolean" ? (
                        v ? (
                          <Check className="w-4 h-4 text-teal-500 mx-auto" aria-label="Included" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" aria-label="Not included" />
                        )
                      ) : (
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </>
  );
}
