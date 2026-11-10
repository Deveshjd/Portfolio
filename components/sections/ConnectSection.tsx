"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check } from "lucide-react";

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75c-.97 0-1.76.78-1.76 1.75s.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

export default function ConnectSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Hidden bot trap
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jangiddevesh01@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please feel free to email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      key="connect"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-xl"
    >
      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
        04 / Next Step
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
        Let’s build together.
      </h2>
      <p className="text-slate-600 text-xs sm:text-sm mb-4">
        Open for ML engineering internships, research roles, or technical collaborations.
      </p>

      {/* Quick Action Badges */}
      <div className="flex items-center space-x-2 mb-4">
        {/* Safe LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/devesh-jangid-1a8758409/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-white text-slate-800 hover:bg-slate-900 hover:text-white text-xs font-medium transition-colors shadow-2xs group"
        >
          <LinkedinIcon className="w-3.5 h-3.5 fill-current text-slate-700 group-hover:text-white transition-colors" />
          <span>LinkedIn</span>
        </a>

        {/* Copy Email Button */}
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 transition shadow-2xs"
        >
          {copiedEmail ? (
            <Check className="w-3.5 h-3.5 text-slate-900" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-slate-500" />
          )}
          <span>{copiedEmail ? "Copied" : "Copy Email"}</span>
        </button>
      </div>

      {/* Submission Success State or Form */}
      {submitted ? (
        <div className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-xs">
          <div className="flex items-center space-x-2.5 mb-1.5">
            <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <h4 className="font-semibold text-sm text-slate-900 tracking-tight">
              Inquiry Dispatched
            </h4>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed pl-7">
            Thank you for reaching out. The message has been routed to my inbox, and I will follow up shortly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-3 bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs"
        >
          {/* Honeypot Trap - Invisible to humans, catches bots */}
          <input
            type="text"
            name="website_source"
            value={formState.honeypot}
            onChange={(e) =>
              setFormState({ ...formState, honeypot: e.target.value })
            }
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Your Name
              </label>
              <input
                required
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                placeholder="Dr. Evelyn Reed"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                required
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                placeholder="evelyn@lab.org"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              required
              rows={3}
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              placeholder="Project overview, timelines, or role scope..."
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center space-x-2 px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition shadow-sm disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
}