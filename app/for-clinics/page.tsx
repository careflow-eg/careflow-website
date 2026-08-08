import React from "react";
import Link from "next/link";
import {
  Users,
  Wallet,
  FolderOpen,
  Clock3,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { CTA } from "@/components/home/CTA";
import { AnimatedSection, AnimatedCard } from "@/components/layout/AnimatedWrapper";

export const metadata = {
  title: "For Clinics",
  description:
    "CareFlow for a practice of up to five doctors: $149 a month with 750 encounters pooled across the whole clinic, one shared patient register, and nothing to install.",
  alternates: { canonical: "/for-clinics" },
};

/**
 * Every figure below comes from CAREFLOW-MASTER.md (pricing + measured blocks).
 * Do not edit here in isolation — change the master and carry it through.
 */
const CLINIC_PRICE = 149;
const CLINIC_SEATS = 5;
const CLINIC_QUOTA = 750;
const PRACTICE_PRICE = 49;
const OVERAGE = 0.25;

const perDoctor = (CLINIC_PRICE / CLINIC_SEATS).toFixed(2); // 29.80
const perEncounter = (CLINIC_PRICE / CLINIC_QUOTA).toFixed(2); // 0.20
const fiveSeats = PRACTICE_PRICE * CLINIC_SEATS; // 245
const exampleOverage = 100 * OVERAGE; // 25
const seatTotal = fiveSeats + exampleOverage; // 270
const saving = seatTotal - CLINIC_PRICE; // 121

/** A real clinic's load is uneven. That is the whole argument for pooling. */
const LOADS = [
  { doctor: "Doctor A", visits: 300, seat: "100 over allowance" },
  { doctor: "Doctor B", visits: 180, seat: "20 unused" },
  { doctor: "Doctor C", visits: 120, seat: "80 unused" },
  { doctor: "Doctor D", visits: 90, seat: "110 unused" },
  { doctor: "Doctor E", visits: 60, seat: "140 unused" },
];

const SHARED = [
  {
    icon: FolderOpen,
    title: "One patient register, not five",
    body: "A patient registered at the front desk is one record for the whole practice. Whichever doctor sees them next finds the same file, with the same history, laboratory results and scans already attached. Nobody re-enters anything and nobody ends up with two files for one person.",
  },
  {
    icon: Users,
    title: "Each doctor's visits stay their own",
    body: "The register is shared; the consultations are not. Every encounter belongs to the doctor who opened it, and that is what their dashboard shows. A shared patient list does not mean a shared caseload.",
  },
  {
    icon: Wallet,
    title: "One allowance for the whole practice",
    body: `All ${CLINIC_QUOTA} encounters sit in one pool. The doctor with the long Tuesday list draws on the same allowance as the doctor who works two mornings a week, and neither of them has to think about it.`,
  },
];

const DAY = [
  {
    time: "In the waiting room",
    title: "The patient tells their story",
    body: "On a tablet at reception or on their own phone, the patient answers in Egyptian Arabic and it arrives structured in English. This happens while they wait, not while the doctor sits opposite them.",
  },
  {
    time: "About sixteen seconds",
    title: "The scan is read",
    body: "Reception uploads a radiology image as a photograph or a PDF. On a real brain MRI our model returned the modality, the body part and the location of the lesion in 16.32 seconds.",
  },
  {
    time: "Under a minute",
    title: "The laboratory report is read",
    body: "A full report runs the whole pipeline — identifying details masked out, then every value, unit and flag extracted — in 52.72 seconds. On a real blood count that was thirteen results, correct.",
  },
  {
    time: "Before the door opens",
    title: "The dashboard is waiting",
    body: "History, results and imaging correlated into one screen with the red flags at the top, in 5.58 seconds. The doctor starts the consultation already knowing what came in.",
  },
];

const LIMITS = [
  "There is no clinic-wide reporting yet. Each doctor sees their own patients and their own encounters; there is no practice dashboard showing volumes across all five.",
  "CareFlow does not connect to any electronic record, billing or scheduling system. It is built for practices that keep paper, which is most of them.",
  "The patient register is shared across everyone in the practice by design. If you need each doctor's patient list kept separate from the others, CareFlow is not set up for that today.",
  "CareFlow does not prescribe and does not diagnose. It hands the doctor a prepared file, and every clinical decision stays theirs.",
];

export default function ForClinicsPage() {
  return (
    <div className="pt-28 pb-20">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#021418] border-b border-teal-900/40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="inline-block mb-4 text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
            For Clinics
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Five doctors, one register, ${perDoctor} each
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            ${CLINIC_PRICE} a month covers up to {CLINIC_SEATS} doctors and {CLINIC_QUOTA} patient
            encounters shared between them — just under {Math.round(Number(perEncounter) * 100)}{" "}
            cents a visit. Nothing to install and no records system to connect.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#021418] font-semibold text-sm transition-all inline-flex items-center gap-2"
            >
              Talk to us about your practice <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl border border-teal-900/60 text-slate-100 font-semibold text-sm hover:bg-[#0b1f24] transition-all"
            >
              See all plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── The arithmetic ────────────────────────────────────────── */}
      <AnimatedSection className="py-20 bg-white dark:bg-[#021418]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-10">
            <span className="inline-block text-xs font-bold text-[#06635d] dark:text-teal-400 uppercase tracking-widest bg-teal-50 dark:bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-200 dark:border-teal-900">
              Why pooling matters
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              No clinic has five equally busy doctors
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              That is the problem with buying five separate seats. One doctor runs past their
              allowance and pays for it while four others leave theirs unspent. Here is a practice
              seeing {CLINIC_QUOTA} patients in a month, split the way real clinics actually split.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-teal-900/40">
            <table className="w-full text-sm min-w-[540px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-[#0b1f24] text-left">
                  <th className="py-3.5 px-5 font-bold text-slate-900 dark:text-white">Doctor</th>
                  <th className="py-3.5 px-5 font-bold text-slate-900 dark:text-white">
                    Patients this month
                  </th>
                  <th className="py-3.5 px-5 font-bold text-slate-900 dark:text-white">
                    On five separate seats
                  </th>
                  <th className="py-3.5 px-5 font-bold text-slate-900 dark:text-white">
                    On one Clinic plan
                  </th>
                </tr>
              </thead>
              <tbody>
                {LOADS.map((r) => {
                  const over = r.seat.includes("over");
                  return (
                    <tr
                      key={r.doctor}
                      className="border-t border-slate-200 dark:border-teal-900/40"
                    >
                      <td className="py-3.5 px-5 font-semibold text-slate-800 dark:text-slate-100">
                        {r.doctor}
                      </td>
                      <td className="py-3.5 px-5 text-slate-600 dark:text-slate-300">{r.visits}</td>
                      <td
                        className={`py-3.5 px-5 ${
                          over
                            ? "text-amber-700 dark:text-amber-400 font-semibold"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {r.seat}
                      </td>
                      <td className="py-3.5 px-5 text-[#06635d] dark:text-teal-400 font-semibold">
                        Covered
                      </td>
                    </tr>
                  );
                })}
                <tr className="border-t-2 border-slate-300 dark:border-teal-800 bg-slate-50 dark:bg-[#0b1f24]">
                  <td className="py-4 px-5 font-extrabold text-slate-900 dark:text-white">
                    Monthly bill
                  </td>
                  <td className="py-4 px-5 font-bold text-slate-700 dark:text-slate-200">
                    {CLINIC_QUOTA}
                  </td>
                  <td className="py-4 px-5 font-extrabold text-slate-900 dark:text-white">
                    ${seatTotal}
                    <span className="block text-[11px] font-normal text-slate-500 dark:text-slate-400">
                      ${fiveSeats} in seats + ${exampleOverage} overage
                    </span>
                  </td>
                  <td className="py-4 px-5 font-extrabold text-[#06635d] dark:text-teal-400">
                    ${CLINIC_PRICE}
                    <span className="block text-[11px] font-normal text-slate-500 dark:text-slate-400">
                      nothing over, nothing wasted
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900">
            <p className="text-slate-800 dark:text-slate-100 leading-relaxed">
              <span className="font-extrabold text-[#06635d] dark:text-teal-300">
                ${saving} a month
              </span>{" "}
              — ${(saving * 12).toLocaleString("en-US")} a year — for the identical amount of work,
              and 350 encounters that
              would otherwise have expired unused stay available to the doctors who need them.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ── What the practice shares ──────────────────────────────── */}
      <AnimatedSection className="py-20 bg-slate-50 dark:bg-[#06171a] border-y border-slate-200 dark:border-teal-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              What the practice shares, and what it does not
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Worth being precise about, because it decides whether CareFlow fits how your clinic
              already works.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SHARED.map(({ icon: Icon, title, body }, idx) => (
              <AnimatedCard
                key={title}
                delay={idx * 0.15}
                className="p-7 rounded-2xl bg-white dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 space-y-3 hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] group"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-100 dark:bg-teal-950 text-[#06635d] dark:text-teal-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-400 transition-colors">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{body}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── A visit, end to end ───────────────────────────────────── */}
      <AnimatedSection className="py-20 bg-white dark:bg-[#021418]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-10">
            <span className="inline-block text-xs font-bold text-[#06635d] dark:text-teal-400 uppercase tracking-widest bg-teal-50 dark:bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-200 dark:border-teal-900">
              A visit, end to end
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              The waiting room does the work
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Every timing below was measured against our live services, not estimated.
            </p>
          </div>

          <div className="space-y-4">
            {DAY.map((s, i) => (
              <AnimatedCard
                key={s.title}
                delay={i * 0.15}
                className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-slate-50 dark:bg-[#0b1f24] border border-slate-200 dark:border-teal-900/40 hover:border-teal-400/30 group"
              >
                <div className="sm:w-52 shrink-0 flex sm:flex-col items-center sm:items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#06635d] dark:bg-teal-500 text-white dark:text-[#021418] flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06635d] dark:text-teal-400 uppercase tracking-wide">
                    <Clock3 className="w-3.5 h-3.5" />
                    {s.time}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-4 p-6 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900">
            <ShieldCheck className="w-6 h-6 text-[#06635d] dark:text-teal-400 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              Identifying details are blacked out of a laboratory document before it reaches any
              model, not after. On a real blood count all six patient identifier fields came back
              empty while all thirteen clinical values extracted correctly.{" "}
              <Link
                href="/security"
                className="text-[#06635d] dark:text-teal-400 font-semibold hover:underline"
              >
                How that works
              </Link>
              .
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Before you buy ────────────────────────────────────────── */}
      <AnimatedSection className="py-16 bg-slate-50 dark:bg-[#06171a] border-y border-slate-200 dark:border-teal-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Before you buy
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Four things a practice should know, and would find out in week one anyway.
              </p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            {LIMITS.map((t) => (
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

      <CTA />
    </div>
  );
}
