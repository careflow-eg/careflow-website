"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, BookOpen, Send, CheckCircle2 } from "lucide-react";

const prompts = [
  {
    q: "Recommend empirical antibiotic regimen for moderate CAP in a patient with penicillin allergy.",
    a: "Per WHO and NICE guidelines, for patients with severe penicillin allergy, recommended outpatient empirical options include respiratory fluoroquinolones (Levofloxacin 750mg QD or Moxifloxacin 400mg QD) or Doxycycline 100mg BID.",
    sources: ["NICE CAP Guideline NG138", "WHO Model List 2023"],
  },
  {
    q: "What is the patient's HbA1c trend over the past 6 months?",
    a: "HbA1c increased from 7.1% (Jan 2026) to 8.4% (Current). Patient's serum creatinine is 1.6 mg/dL. Renal function monitoring is recommended before modifying metformin dose.",
    sources: ["Lab OCR Panel #9812", "Patient File History"],
  },
];

export function AssistantDemo() {
  const [promptIdx, setPromptIdx] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setPromptIdx((prev) => (prev + 1) % prompts.length);
      }, 800);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const currentPrompt = prompts[promptIdx];

  return (
    <div className="rounded-2xl p-6 bg-[#0b1f24] border border-teal-900/40 shadow-2xl space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-teal-950 pb-3 text-xs text-teal-400 font-semibold">
        <div className="flex items-center space-x-2">
          <Bot className="w-4 h-4 text-emerald-400" />
          <span>AI Physician Assistant Consultation</span>
        </div>
        <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded text-[10px]">
          Medical RAG Connected
        </span>
      </div>

      {/* Conversation Window */}
      <div className="space-y-3 min-h-[140px] text-xs">
        {/* Doctor Prompt Box */}
        <motion.div
          key={`q-${promptIdx}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#06171a] p-3 rounded-xl border border-teal-950"
        >
          <div className="flex items-center space-x-1.5 text-teal-400 font-semibold mb-1">
            <Send className="w-3 h-3" />
            <span>Doctor Query:</span>
          </div>
          <p className="text-slate-200 leading-relaxed">&quot;{currentPrompt.q}&quot;</p>
        </motion.div>

        {/* AI Answer Box */}
        <AnimatePresence mode="wait">
          {!isTyping ? (
            <motion.div
              key={`a-${promptIdx}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-teal-950/80 p-3.5 rounded-xl border border-teal-800 text-teal-100 space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span className="flex items-center space-x-1.5 text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CareFlow Assistant Response:</span>
                </span>
                <span className="text-[10px] text-teal-300 font-mono">100% Patient Grounded</span>
              </div>
              <p className="text-xs leading-relaxed">{currentPrompt.a}</p>

              {/* Citations */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {currentPrompt.sources.map((src) => (
                  <span
                    key={src}
                    className="text-[10px] bg-teal-900/80 text-teal-300 border border-teal-700/60 px-2 py-0.5 rounded-md flex items-center space-x-1"
                  >
                    <BookOpen className="w-2.5 h-2.5 text-teal-400" />
                    <span>{src}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="typing-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-teal-950/40 p-3 rounded-xl border border-teal-950 text-teal-300 text-xs flex items-center space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-spin" />
              <span>Scanning patient record &amp; clinical guidelines...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-teal-950">
        <span className="flex items-center space-x-1 text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>SOAP Note Auto-Draft Enabled</span>
        </span>
        <span className="font-mono text-teal-400">Zero Hallucination Shield</span>
      </div>
    </div>
  );
}
