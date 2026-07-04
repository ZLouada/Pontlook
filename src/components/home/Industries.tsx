"use client";

import { motion } from "framer-motion";

export function Industries() {
  const industries = [
    "Government & Public Sector",
    "Banking & Finance",
    "Oil & Gas",
    "Healthcare",
    "Real Estate & Construction",
    "Technology & Telecomm",
    "Logistics & Supply Chain",
    "Retail & E-commerce"
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedIndustries = [...industries, ...industries, ...industries];

  return (
    <section className="py-12 md:py-24 bg-[var(--bg-subtle)] border-y border-[var(--border-default)] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-8 md:mb-12">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-[var(--fg-faint)]">
          Serving High-Growth Middle East Industries
        </h2>
      </div>
      
      <div className="relative w-full overflow-hidden flex">
        {/* Gradient Masks for smooth fade at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[var(--bg-subtle)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[var(--bg-subtle)] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap gap-6 shrink-0"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {duplicatedIndustries.map((industry, index) => (
            <div 
              key={index}
              className="inline-flex items-center rounded-full bg-[var(--surface-card)] px-8 py-4 text-sm md:text-base font-medium text-[var(--fg-heading)] border border-[var(--border-default)] hover:border-primary-500 hover:text-primary-500 transition-colors cursor-default"
            >
              {industry}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
