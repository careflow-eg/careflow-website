"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  {
    role: "ai",
    text: "How long have you experienced this chest tightness, and does it worsen when taking a deep breath?",
  },
  {
    role: "patient",
    text: "It started 3 days ago. Yes, sharp pain when I inhale deeply.",
  },
  {
    role: "ai",
    text: "Understood. Have you had any fever, chills, or productive cough recently?",
  },
];

export function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current <= messages.length) {
        setVisibleMessages(current);
      } else {
        // Reset the conversation loop after a pause
        setVisibleMessages(0);
        current = 0;
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3 text-xs min-h-[160px] flex flex-col justify-end overflow-hidden">
      <AnimatePresence mode="popLayout">
        {messages.slice(0, visibleMessages).map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`p-3 rounded-lg border ${
              msg.role === "ai"
                ? "bg-teal-950/60 border-teal-900/60 text-teal-200"
                : "bg-slate-800/80 border-slate-700 text-slate-200 ml-4"
            }`}
          >
            <span className={`font-bold ${msg.role === "ai" ? "text-teal-400" : "text-slate-300"}`}>
              {msg.role === "ai" ? "CareFlow AI:" : "Patient:"}
            </span>{" "}
            &quot;{msg.text}&quot;
          </motion.div>
        ))}
        {visibleMessages < messages.length && visibleMessages > 0 && (
          <motion.div
            key="typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`p-3 rounded-lg border ${
              messages[visibleMessages].role === "ai"
                ? "bg-teal-950/60 border-teal-900/60 text-teal-200"
                : "bg-slate-800/80 border-slate-700 text-slate-200 ml-4"
            } w-16 h-8 flex items-center justify-center space-x-1`}
          >
            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce opacity-70" style={{ animationDelay: "0ms" }} />
            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce opacity-70" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce opacity-70" style={{ animationDelay: "300ms" }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
