"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onExplore: () => void;
  onConnect: () => void;
}

export default function HeroSection({ onExplore, onConnect }: HeroSectionProps) {
  return (
    <motion.div
      key="hero"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl"
    >
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-mono font-medium mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Available for AI / ML Roles</span>
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
        Architecting production ML models & backend pipelines.
      </h1>
      <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
        Specialized in applied deep learning, low-latency microservices with FastAPI, and robust Linux & C++ systems foundations.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={onConnect}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition shadow-sm"
        >
          <span>Connect for Work</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          onClick={onExplore}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-100 transition shadow-xs"
        >
          <span>Background</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}