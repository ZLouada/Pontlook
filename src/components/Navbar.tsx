"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { href: "/find-training", label: "Find Training" },
    { href: "/providers", label: "For Providers" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 z-40 w-full bg-white/80 dark:bg-[var(--bg-base)]/80 backdrop-blur-xl border-b border-slate-200 dark:border-[var(--border-default)] transition-colors duration-300">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 z-50 relative">
            <span className="text-2xl font-bold tracking-tighter text-[var(--fg-heading)]">Pontlook</span>
          </Link>
          
          <div className="flex items-center gap-6 z-50 relative">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--fg-heading)] tracking-wide">
              <Link href="/providers" className="hover:opacity-60 transition-opacity">
                For Providers
              </Link>
              <Link href="/find-training" className="hover:opacity-60 transition-opacity">
                Find Training
              </Link>
            </div>
            
            <ThemeToggle />
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-muted)] hover:bg-[var(--border-default)] transition-colors"
            >
              {isOpen ? <X className="w-5 h-5 text-[var(--fg-heading)]" /> : <Menu className="w-5 h-5 text-[var(--fg-heading)]" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 bg-[var(--bg-base)] flex flex-col pt-32 px-6 lg:px-12 pb-12 overflow-y-auto"
          >
            <div className="container mx-auto max-w-7xl h-full flex flex-col md:flex-row justify-between gap-16">
              
              <div className="flex flex-col gap-6 md:gap-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--fg-heading)] hover:text-primary-500 transition-colors flex items-center group"
                    >
                      {link.label}
                      <ArrowRight className="ml-6 w-10 h-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col gap-12 max-w-sm mt-auto md:mt-0"
              >
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-[var(--fg-faint)] mb-6">Contact</h4>
                  <a href="mailto:hello@pontlook.com" className="text-xl font-medium text-[var(--fg-default)] hover:text-primary-500 transition-colors">
                    hello@pontlook.com
                  </a>
                  <p className="mt-4 text-[var(--fg-muted)]">
                    Dubai, United Arab Emirates
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-[var(--fg-faint)] mb-6">Social</h4>
                  <div className="flex gap-6">
                    <a href="#" className="text-[var(--fg-default)] hover:text-primary-500 transition-colors font-medium">LinkedIn</a>
                    <a href="#" className="text-[var(--fg-default)] hover:text-primary-500 transition-colors font-medium">Twitter</a>
                  </div>
                </div>
              </motion.div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
