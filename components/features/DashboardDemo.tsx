"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Stethoscope, Clock, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";

const differentials = [
  { disease: "Bacterial Community-Acquired Pneumonia", prob: 87, status: "High Risk", color: "bg-teal-400" },
  { disease: "Acute Bronchitis", prob: 12, status: "Moderate", color: "bg-amber-400" },
  { disease: "Pulmonary Embolism", prob: 1, status: "Low Probability", color: "bg-slate-500" },
];

const timelineEvents = [
  { time: "09:30 AM", title: "Voice Intake Completed", desc: "Chest tightness (3 days), sharp pain on deep inspiration." },
  { time: "09:35 AM", title: "Lab OCR Parsed", desc: "Hemoglobin A1c 8.4%, WBC 14.2 x10^3/µL (Elevated)." },
  { time: "09:40 AM", title: "Radiology Screening", desc: "Right Middle Lobe Infiltrate flagged on X-Ray." },
];

export function DashboardDemo() {
  const [activeTab, setActiveTab] = useState<"differentials" | "timeline">("differentials");

  return (
    <div className="rounded-2xl p-6 bg-[#0b1f24] border border-teal-900/40 shadow-2xl space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-teal-950 pb-3">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-teal-400" />
          <span className="text-xs font-bold text-white">Unified Physician Workspace</span>
        </div>
        <span className="text-[10px] text-slate-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-900 font-mono">
          Patient: John Doe (45M)
        </span>
      </div>

      {/* Tab Controls */}
      <div className="flex space-x-2 border-b border-teal-950/60 pb-2">
        <button
          onClick={() => setActiveTab("differentials")}
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
            activeTab === "differentials"
              ? "bg-teal-950 text-teal-300 border border-teal-800"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Ranked Differentials
        </button>
        <button
          onClick={() => setActiveTab("timeline")}
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
            activeTab === "timeline"
              ? "bg-teal-950 text-teal-300 border border-teal-800"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Health Timeline
        </button>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "differentials" ? (
          <motion.div
            key="differentials"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {differentials.map((item, idx) => (
              <div key={item.disease} className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-200">{item.disease}</span>
                  <span className="text-teal-400 font-bold">{item.prob}%</span>
                </div>
                <div className="w-full bg-[#06171a] h-2 rounded-full overflow-hidden border border-teal-950">
                  <motion.div
                    className={`h-full ${item.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.prob}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="timeline"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-2.5"
          >
            {timelineEvents.map((evt, idx) => (
              <motion.div
                key={evt.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-2.5 rounded-xl bg-[#06171a] border border-teal-950 flex items-start space-x-2.5 text-xs"
              >
                <div className="p-1 rounded bg-teal-950 text-teal-400 shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white">{evt.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{evt.time}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-0.5">{evt.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-teal-950">
        <span className="flex items-center space-x-1 text-teal-400 font-medium">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>Doctor CDS Ready</span>
        </span>
        <span className="text-slate-400">3 Data Modalities Synced</span>
      </div>
    </div>
  );
}
