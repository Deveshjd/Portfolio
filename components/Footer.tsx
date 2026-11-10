"use client";

import React from "react";

interface FooterProps {
  totalSections: number;
  activeSection: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Footer({
  totalSections,
  activeSection,
  onPrev,
  onNext,
}: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-30 px-6 py-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200/60 bg-white/70 backdrop-blur-xs">
      <div className="flex items-center space-x-2">
        <span>Scroll or use <strong>↑ / ↓</strong></span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onPrev}
          disabled={activeSection === 0}
          className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 disabled:opacity-30 transition font-medium text-slate-700"
        >
          Prev
        </button>
        <span className="font-mono text-slate-400">
          {activeSection + 1} / {totalSections}
        </span>
        <button
          onClick={onNext}
          disabled={activeSection === totalSections - 1}
          className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 disabled:opacity-30 transition font-medium text-slate-700"
        >
          Next
        </button>
      </div>
    </footer>
  );
}