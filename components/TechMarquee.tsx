"use client";

import React from "react";
import { motion } from "framer-motion";

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

interface MarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

function MarqueeRow({ items, direction = "left", speed = 25 }: MarqueeRowProps) {
  // Duplicate array so it creates a seamless infinite loop
  const duplicated = [...items, ...items, ...items];

  const initialX = direction === "left" ? "0%" : "-50%";
  const animateX = direction === "left" ? "-50%" : "0%";

  return (
    <div className="relative flex overflow-hidden w-full group py-1">
      <motion.div
        className="flex space-x-3 shrink-0"
        initial={{ x: initialX }}
        animate={{ x: animateX }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        // Pauses animation on hover
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicated.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-slate-700 bg-white/90 border border-slate-200/90 shadow-xs hover:border-slate-400 hover:text-slate-900 transition-colors cursor-default whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2 shrink-0 group-hover:bg-slate-500 transition-colors" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden mt-6 pt-4 border-t border-slate-200/70">
      {/* Side gradient masks for smooth fade-in and fade-out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10" />

      <div className="space-y-2">
        <MarqueeRow items={ROW_1} direction="left" speed={28} />
        <MarqueeRow items={ROW_2} direction="right" speed={32} />
      </div>
    </div>
  );
}