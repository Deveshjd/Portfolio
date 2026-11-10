"use client";

import React from "react";
import { FileText } from "lucide-react";

interface HeaderProps {
  sections: { id: string; label: string }[];
  activeSection: number;
  onSelectSection: (index: number) => void;
  onOpenResume: () => void;
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Header({
  sections,
  activeSection,
  onSelectSection,
  onOpenResume,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-white/75 border-b border-slate-200/60">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm">
          DJ
        </div>
        <div>
          <span className="font-semibold tracking-tight text-slate-900 text-sm block leading-tight">
            Devesh Jangid
          </span>
          <span className="text-slate-400 text-xs font-mono">
            AI Engineer
          </span>
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-1 bg-slate-100/90 p-1 rounded-full border border-slate-200 text-xs font-medium">
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            onClick={() => onSelectSection(idx)}
            className={`px-3 py-1 rounded-full transition-all duration-200 ${
              activeSection === idx
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {sec.label}
          </button>
        ))}
      </nav>

      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/Deveshjd"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
          title="GitHub Profile"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <button
          onClick={onOpenResume}
          className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-sm"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Resume</span>
        </button>
      </div>
    </header>
  );
}