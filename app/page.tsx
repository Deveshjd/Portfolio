"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import StepIndicator from "../components/StepIndicator";
import PortraitCutout from "../components/PortraitCutout";
import ResumeModal from "../components/ResumeModal";

import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ConnectSection from "../components/sections/ConnectSection";

const SECTIONS = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "About" },
  { id: "skills", label: "Toolkit" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const isScrollingRef = useRef<boolean>(false);
  const touchStartY = useRef<number | null>(null);

  // Mouse wheel listener (Desktop)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) return;
      const target = document.activeElement as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;

      if (e.deltaY > 30) {
        isScrollingRef.current = true;
        setActiveSection((prev) => Math.min(prev + 1, SECTIONS.length - 1));
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      } else if (e.deltaY < -30) {
        isScrollingRef.current = true;
        setActiveSection((prev) => Math.max(prev - 1, 0));
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Touch swipe listener (Mobile)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null || isScrollingRef.current) return;

      const target = document.activeElement as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY.current - touchEndY;

      // 40px threshold prevents small taps or accidental touches from triggering navigation
      if (Math.abs(diffY) > 40) {
        isScrollingRef.current = true;
        if (diffY > 0) {
          // Swiped up -> next section
          setActiveSection((prev) => Math.min(prev + 1, SECTIONS.length - 1));
        } else {
          // Swiped down -> previous section
          setActiveSection((prev) => Math.max(prev - 1, 0));
        }
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 550);
      }

      touchStartY.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = document.activeElement as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        setActiveSection((prev) => Math.min(prev + 1, SECTIONS.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        setActiveSection((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-screen h-dvh overflow-hidden bg-slate-50 text-slate-900 font-sans selection:bg-slate-200 touch-none">
      {/* Header */}
      <Header
        sections={SECTIONS}
        activeSection={activeSection}
        onSelectSection={(idx) => setActiveSection(idx)}
        onOpenResume={() => setShowResumeModal(true)}
      />

      {/* Side Dots (Hidden on small mobile screens to prevent clutter) */}
      <div className="hidden sm:block">
        <StepIndicator
          sections={SECTIONS}
          activeSection={activeSection}
          onSelectSection={(idx) => setActiveSection(idx)}
        />
      </div>

      {/* Main Presentation Stage */}
      <main className="w-full h-full relative flex items-center justify-center px-6 md:px-16 lg:px-24">
        {/* Cutout Photo Layer: Pinned for desktop Hero (0) & About (1) */}
        <PortraitCutout visible={activeSection <= 1} />

        {/* Section Router */}
        <div className="w-full max-w-5xl z-20">
          <AnimatePresence mode="wait">
            {activeSection === 0 && (
              <HeroSection
                key="hero"
                onExplore={() => setActiveSection(1)}
                onConnect={() => setActiveSection(4)}
              />
            )}
            {activeSection === 1 && <AboutSection key="about" />}
            {activeSection === 2 && <SkillsSection key="skills" />}
            {activeSection === 3 && <ProjectsSection key="projects" />}
            {activeSection === 4 && <ConnectSection key="connect" />}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <Footer
        totalSections={SECTIONS.length}
        activeSection={activeSection}
        onPrev={() => setActiveSection((prev) => Math.max(prev - 1, 0))}
        onNext={() => setActiveSection((prev) => Math.min(prev + 1, SECTIONS.length - 1))}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />
    </div>
  );
}