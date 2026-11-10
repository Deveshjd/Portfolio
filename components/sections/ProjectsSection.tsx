"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Multilingual DeepFake Audio Detection",
    description:
      "Signal processing and spectral analysis pipeline exposing synthetic audio manipulation across five distinct languages with FastAPI service endpoints.",
    tags: ["FastAPI", "Audio Processing", "Python"],
    link: "https://github.com/Deveshjd",
  },
  {
    title: "API Anomaly & Intrusion Detection",
    description:
      "Microservice traffic filter evaluating request patterns in real time to isolate automated fuzzing, injection patterns, and unauthorized query spikes.",
    tags: ["Python", "REST API", "Security"],
    link: "https://github.com/Deveshjd",
  },
  {
    title: "CNN Digit Classifier (98.76% Accuracy)",
    description:
      "Custom convolutional neural network trained on handwritten digits with customized kernel filters, dropout regularizers, and efficient inference throughput.",
    tags: ["PyTorch / CNN", "Computer Vision"],
    link: "https://github.com/Deveshjd",
  },
  {
    title: "POSIX Socket HTTP Server",
    description:
      "Full-stack HTTP server engineered in raw C++ featuring thread pooling, custom XOR encryption handlers, and URL parameter decoding.",
    tags: ["C++", "Sockets", "Concurrency"],
    link: "https://github.com/Deveshjd",
  },
];

export default function ProjectsSection() {
  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-4xl"
    >
      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
        03 / Selected Implementations
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition group block"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-slate-900 text-sm group-hover:text-slate-700 transition">
                {project.title}
              </h3>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition shrink-0 ml-2" />
            </div>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 font-mono text-[10px] text-slate-600">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-slate-100 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}