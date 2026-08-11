"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileText, CheckCircle2, Scan } from "lucide-react";

const labValues = [
  { name: "Hemoglobin A1c", ref: "< 5.7 %", val: "8.4 %", status: "High", badgeBg: "bg-rose-950/80 text-rose-400 border-rose-800" },
  { name: "Serum Creatinine", ref: "0.7 - 1.3 mg/dL", val: "1.6 mg/dL", status: "Elevated", badgeBg: "bg-amber-950/80 text-amber-400 border-amber-800" },
  { name: "WBC Count", ref: "4.5 - 11.0 x10^3/µL", val: "14.2 x10^3/µL", status: "High", badgeBg: "bg-rose-950/80 text-rose-400 border-rose-800" },
  { name: "Fasting Blood Glucose", ref: "70 - 99 mg/dL", val: "142 mg/dL", status: "Elevated", badgeBg: "bg-amber-950/80 text-amber-400 border-amber-800" },
];

export function LabDemo() {
  const [scanStep, setScanStep] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev < labValues.length) {
          return prev + 1;
        } else {
          // Pause at full view, then restart
          setTimeout(() => setScanStep(0), 2000);
          return prev;
        }
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl p-6 bg-[#0b1f24] border border-teal-900/40 shadow-2xl space-y-4 relative overflow-hidden group">
      {/* Laser scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent z-20 pointer-events-none shadow-[0_0_15px_#2dd4bf]"
        animate={{
          top: ["10%", "90%", "10%"],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="flex items-center justify-between border-b border-teal-950 pb-3 text-xs font-semibold text-teal-400">
        <div className="flex items-center space-x-2">
          <Scan className="w-4 h-4 text-teal-400 animate-pulse" />
          <span>Lab OCR &amp; Standardized Panel</span>
        </div>
        <span className="bg-teal-950 text-teal-300 border border-teal-800/60 px-2.5 py-1 rounded-full text-[10px] flex items-center space-x-1">
          <ShieldCheck className="w-3 h-3 text-teal-400" />
          <span>PII Masked &amp; Verified</span>
        </span>
      </div>

      <div className="space-y-2.5 text-xs">
        <AnimatePresence>
          {labValues.slice(0, scanStep).map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -15, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex justify-between items-center p-3 rounded-xl bg-[#06171a] border border-teal-950 hover:border-teal-800/50 transition-colors"
            >
              <div>
                <div className="font-semibold text-white flex items-center space-x-1.5">
                  <span>{item.name}</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Reference: {item.ref}</div>
              </div>
              <span className={`font-bold px-2.5 py-1 rounded-lg border ${item.badgeBg}`}>
                {item.val} ({item.status})
              </span>
            </motion.div>
          ))}
        </AnimatePresence>

        {scanStep === 0 && (
          <div className="py-8 text-center text-slate-400 text-xs flex flex-col items-center justify-center space-y-2">
            <FileText className="w-6 h-6 text-teal-500 animate-bounce" />
            <span>Parsing OCR Document &amp; Masking Identifiers...</span>
          </div>
        )}
      </div>

      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-teal-950">
        <span className="flex items-center space-x-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
          <span>4 Out-of-Bound Indicators Extracted</span>
        </span>
        <span className="font-mono text-teal-400">Accuracy: 99.4%</span>
      </div>
    </div>
  );
}
