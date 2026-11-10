"use client";

import React from "react";

interface StepIndicatorProps {
  sections: { id: string; label: string }[];
  activeSection: number;
  onSelectSection: (index: number) => void;
}

export default function StepIndicator({
  sections,
  activeSection,
  onSelectSection,
}: StepIndicatorProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-3">
      {sections.map((sec, idx) => (
        <button
          key={sec.id}
          onClick={() => onSelectSection(idx)}
          className="group flex items-center justify-end space-x-2 focus:outline-none"
        >
          <span className="text-[11px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
            {sec.label}
          </span>
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeSection === idx
                ? "bg-slate-900 scale-125 ring-4 ring-slate-200"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        </button>
      ))}
    </div>
  );
}