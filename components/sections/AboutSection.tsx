"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="max-w-xl"
    >
      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
        01 / Foundation
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">
        First-principles engineering for real-world intelligence.
      </h2>
      <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
        <p>
          I bridge foundational machine learning mathematics with practical backend system delivery. Rather than relying purely on black-box wrappers, I focus on architecture internals, latency profiles, and clean data contracts.
        </p>
        <p>
          From training CNNs and processing multilingual audio signals to writing socket servers in C++, I treat model deployment and data engineering as interconnected systems.
        </p>
      </div>
      <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
        <div>
          <span className="block text-2xl font-bold text-slate-900 font-mono">9.5</span>
          <span className="text-xs text-slate-500">Academic CGPA</span>
        </div>
        <div>
          <span className="block text-2xl font-bold text-slate-900 font-mono">Linux & C++</span>
          <span className="text-xs text-slate-500">Core Systems Tooling</span>
        </div>
      </div>
    </motion.div>
  );
}