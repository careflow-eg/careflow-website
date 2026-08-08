"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Layers, Cpu, Database, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "1. Intake AI",
    desc: "Conversational Symptom Extraction",
    color: "text-teal-400",
    bgColor: "bg-teal-400/10",
    borderColor: "border-teal-500/20",
    hoverBorder: "hover:border-teal-400/50",
    shadow: "hover:shadow-[0_0_20px_rgba(45,212,191,0.2)]",
  },
  {
    icon: Layers,
    title: "2. Lab OCR",
    desc: "Standardized Lab Panel Structuring",
    color: "text-teal-300",
    bgColor: "bg-teal-300/10",
    borderColor: "border-teal-400/20",
    hoverBorder: "hover:border-teal-300/50",
    shadow: "hover:shadow-[0_0_20px_rgba(94,234,212,0.2)]",
  },
  {
    icon: Cpu,
    title: "3. Radiology AI",
    desc: "Visual Findings & Image Highlights",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-600/20",
    hoverBorder: "hover:border-teal-500/50",
    shadow: "hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]",
  },
  {
    icon: Database,
    title: "4. Medical RAG",
    desc: "Guideline Retrieval & Correlation",
    color: "text-teal-300",
    bgColor: "bg-teal-950",
    borderColor: "border-teal-600",
    hoverBorder: "hover:border-teal-400",
    shadow: "hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]",
  },
  {
    icon: ShieldCheck,
    title: "5. Doctor CDS",
    desc: "Unified Clinical Dashboard",
    color: "text-teal-400",
    bgColor: "bg-teal-400/10",
    borderColor: "border-teal-500/20",
    hoverBorder: "hover:border-teal-400/50",
    shadow: "hover:shadow-[0_0_20px_rgba(45,212,191,0.2)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export const PipelineArchitecture = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-3xl p-8 bg-slate-900 text-white border border-teal-900/60 shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 group-hover:scale-110" />

      <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 relative z-10">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-block mb-4 text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-400/10 px-3 py-1 rounded-full"
        >
          Pipeline Architecture
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-2xl sm:text-3xl font-extrabold text-white"
        >
          Multi-Stage Clinical Intelligence Engine
        </motion.h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch text-center relative z-10"
      >
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-5 rounded-2xl ${step.bgColor} border ${step.borderColor} ${step.hoverBorder} ${step.shadow} transition-all duration-300 space-y-3 flex flex-col justify-center`}
            >
              <div className="mx-auto p-3 rounded-xl bg-slate-900/50">
                <Icon className={`w-8 h-8 ${step.color}`} />
              </div>
              <div className={`font-bold text-sm ${idx === 3 ? "text-teal-300" : "text-white"}`}>
                {step.title}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
