"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GlobalLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we've already loaded this session to avoid annoying the user on every route
    if (sessionStorage.getItem("pontlook_loaded")) {
      setIsLoading(false);
      return;
    }

    const duration = 1500; // 1.5 seconds loading sequence
    const interval = 30; // update every 30ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const easeProgress = 1 - Math.pow(1 - currentStep / steps, 3); // easeOutCubic
      setProgress(Math.min(Math.round(easeProgress * 100), 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("pontlook_loaded", "true");
        }, 400); // Wait a beat at 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg-base)] text-[var(--fg-heading)]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-sm font-medium tracking-widest uppercase text-primary-500">
              Pontlook
            </div>
            <div className="text-6xl md:text-8xl font-bold tabular-nums tracking-tighter">
              {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
