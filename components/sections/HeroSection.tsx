"use client";

import React from "react";
import Image from "next/image";
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
      className="max-w-2xl relative z-20"
    >
      {/* Mobile-only avatar bubble */}
      <div className="flex sm:hidden items-center space-x-3 mb-5">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-slate-200 shadow-xs bg-slate-100 shrink-0">
          <Image
            src="/DJ.png"
            alt="Devesh Jangid"
            fill
            sizes="56px"
            className="object-cover object-top"
            priority
          />
        </div>
        <div>
          <span className="font-semibold text-slate-900 text-sm block">
            Devesh Jangid
          </span>
          <span className="text-slate-500 text-xs font-mono">
            AI / ML Engineer
          </span>
        </div>
      </div>

      <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6">
        Architecting production ML models & backend pipelines.
      </h1>

      <p className="text-sm sm:text-lg text-slate-600 leading-relaxed mb-7 sm:mb-8 max-w-lg">
        Specialized in applied deep learning, low-latency microservices with FastAPI, and robust Linux & C++ systems foundations.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={onConnect}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-xs sm:text-sm font-medium hover:bg-slate-800 transition shadow-sm active:scale-95"
        >
          <span>Connect for Work</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          onClick={onExplore}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs sm:text-sm font-medium hover:bg-slate-100 transition shadow-xs active:scale-95"
        >
          <span>Background</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}