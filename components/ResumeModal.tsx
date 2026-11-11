"use client";

import React from "react";
import { X, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-slate-900 text-lg">Curriculum Vitae</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          Academic credentials, coursework in AI & Data Science, machine learning projects, and systems development.
        </p>
        <div className="flex space-x-3">
          <a
            href="/Devesh Jangid - AI Engineer Resume.pdf"
            download="Devesh_Jangid_Resume.pdf"
            className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800 transition"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
