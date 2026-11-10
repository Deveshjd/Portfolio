"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PortraitCutoutProps {
  visible: boolean;
}

export default function PortraitCutout({ visible }: PortraitCutoutProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 70, scale: 0.92, transition: { duration: 0.4 } }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-4 md:right-16 lg:right-28 bottom-0 z-10 pointer-events-none hidden sm:block w-72 md:w-96 lg:w-[440px] max-h-[85vh]"
        >
          <div className="relative w-full h-[78vh] flex items-end justify-center">
            <Image
              src="/DJ.png"
              alt="Devesh Jangid"
              width={440}
              height={650}
              priority
              className="object-contain max-h-[75vh] w-auto drop-shadow-xl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}