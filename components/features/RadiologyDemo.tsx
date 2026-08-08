"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Crosshair, Sparkles, CheckCircle2, ShieldAlert } from "lucide-react";

const scans = [
  {
    id: "xray",
    label: "Chest Radiograph (AP View)",
    finding: "Right Middle Lobe Infiltrate",
    desc: "Dense airspace opacification noted in the right mid-lung zone consistent with lobar consolidation. Pleural space clear.",
    confidence: "94%",
    severity: "High Clinical Correlation",
    targetPos: "top-1/3 right-1/4",
  },
  {
    id: "ct",
    label: "Thoracic CT Scan (Axial)",
    finding: "Subsegmental Ground-Glass Opacities",
    desc: "Bilateral peripheral ground-glass infiltrates with minimal interlobular septal thickening.",
    confidence: "91%",
    severity: "Moderate Severity",
    targetPos: "top-1/2 left-1/3",
  },
  {
    id: "mri",
    label: "Lumbar MRI (T2 Sequence)",
    finding: "L4-L5 Disc Herniation",
    desc: "Posterolateral disc protrusion with mild posterior compression on the nerve root.",
    confidence: "97%",
    severity: "High Precision",
    targetPos: "bottom-1/3 right-1/3",
  },
];

export function RadiologyDemo() {
  const [activeScanIndex, setActiveScanIndex] = useState<number>(0);
  const scan = scans[activeScanIndex];

  return (
    <div className="rounded-2xl p-6 bg-[#0b1f24] border border-teal-900/40 shadow-2xl space-y-4">
      {/* Scan Selector Tabs */}
      <div className="flex items-center justify-between border-b border-teal-950 pb-3">
        <div className="flex space-x-1">
          {scans.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveScanIndex(idx)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeScanIndex === idx
                  ? "bg-teal-950 text-teal-300 border border-teal-800"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/40"
              }`}
            >
              {s.id.toUpperCase()}
            </button>
          ))}
        </div>
        <span className="text-[10px] font-mono text-teal-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-900">
          AI Vision Active
        </span>
      </div>

      {/* Interactive Scan Canvas Simulation */}
      <div className="relative h-44 rounded-xl bg-[#031114] border border-teal-950 overflow-hidden flex items-center justify-center group">
        {/* Animated Scan Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06171a_1px,transparent_1px),linear-gradient(to_bottom,#06171a_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />

        {/* Scan Reticle Focus */}
        <motion.div
          key={scan.id}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`absolute ${scan.targetPos} w-24 h-24 rounded-lg border-2 border-dashed border-teal-400/80 bg-teal-400/10 flex items-center justify-center shadow-[0_0_25px_rgba(45,212,191,0.3)] pointer-events-none`}
        >
          <Crosshair className="w-6 h-6 text-teal-300 animate-spin" style={{ animationDuration: "12s" }} />
          <span className="absolute -top-5 bg-teal-950 text-teal-300 text-[9px] font-mono px-1.5 py-0.5 rounded border border-teal-800">
            Target Identified ({scan.confidence})
          </span>
        </motion.div>

        {/* Subtle Scan Pulse */}
        <div className="text-center text-slate-500 text-xs font-mono z-10 pointer-events-none">
          <Eye className="w-8 h-8 text-teal-500/40 mx-auto mb-1 animate-pulse" />
          <span>{scan.label}</span>
        </div>
      </div>

      {/* AI Finding Card Output */}
      <AnimatePresence mode="wait">
        <motion.div
          key={scan.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="p-4 rounded-xl bg-[#06171a] border border-teal-950 space-y-2"
        >
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-300">Primary AI Finding:</span>
            <span className="font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded text-[11px] flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{scan.finding}</span>
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{scan.desc}</p>
          <div className="pt-1 flex items-center justify-between text-[10px] text-teal-400 font-semibold border-t border-teal-950/80">
            <span>Confidence Score: {scan.confidence}</span>
            <span>{scan.severity}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
