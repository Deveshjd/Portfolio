"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Database, Terminal } from "lucide-react";

const ROW_1 = [
  "Python",
  "PyTorch",
  "FastAPI",
  "NumPy",
  "Pandas",
  "Scikit-Learn",
  "CNNs",
  "Computer Vision",
  "REST APIs",
];

const ROW_2 = [
  "C++",
  "Linux / Fedora",
  "POSIX Sockets",
  "MySQL",
  "Git & GitHub",
  "Postman",
  "Signal Processing",
  "Docker",
  "DeepFake Detection",
];

export default function SkillsSection() {
  return (
    <motion.div
      key="skills"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-4xl"
    >
      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
        02 / Technical Toolkit
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
        Core Technologies
      </h2>

      {/* 3 Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-3">
            <Cpu className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-slate-900 text-sm mb-1">
            Machine Learning & AI
          </h3>
          <p className="text-xs text-slate-500 mb-3 leading-relaxed">
            Supervised learning, deep learning architectures, and signal analysis.
          </p>
          <div className="flex flex-wrap gap-1 font-mono text-[11px] text-slate-700">
            {["Python", "PyTorch", "NumPy", "Pandas", "Scikit-Learn", "CNNs"].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-slate-100 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-3">
            <Database className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-slate-900 text-sm mb-1">
            Backend & APIs
          </h3>
          <p className="text-xs text-slate-500 mb-3 leading-relaxed">
            Asynchronous web services, relational schemas, and socket communication.
          </p>
          <div className="flex flex-wrap gap-1 font-mono text-[11px] text-slate-700">
            {["FastAPI", "RESTful APIs", "MySQL", "C++", "Java Servlets"].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-slate-100 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-3">
            <Terminal className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-slate-900 text-sm mb-1">
            DevOps & Systems
          </h3>
          <p className="text-xs text-slate-500 mb-3 leading-relaxed">
            Unix command line environment, version tracking, and automated workflows.
          </p>
          <div className="flex flex-wrap gap-1 font-mono text-[11px] text-slate-700">
            {["Linux / Fedora", "Git", "GitHub", "Postman", "VS Code"].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-slate-100 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Moving Tech Marquee Strips */}
      <div className="relative w-full overflow-hidden mt-5 pt-3 border-t border-slate-200/70">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="space-y-1.5">
          <div className="relative flex overflow-hidden w-full py-0.5">
            <motion.div
              className="flex space-x-2.5 shrink-0"
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 26 }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[...ROW_1, ...ROW_1, ...ROW_1].map((item, idx) => (
                <span
                  key={`r1-${item}-${idx}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 bg-white/90 border border-slate-200/90 shadow-2xs hover:border-slate-400 hover:text-slate-900 transition-colors cursor-default whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2 shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="relative flex overflow-hidden w-full py-0.5">
            <motion.div
              className="flex space-x-2.5 shrink-0"
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[...ROW_2, ...ROW_2, ...ROW_2].map((item, idx) => (
                <span
                  key={`r2-${item}-${idx}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 bg-white/90 border border-slate-200/90 shadow-2xs hover:border-slate-400 hover:text-slate-900 transition-colors cursor-default whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2 shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}