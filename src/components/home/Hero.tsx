"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Building2, Wallet } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white -z-10" />
      <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary-100/40 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center rounded-full border border-primary-100 bg-primary-50/50 px-3 py-1 text-sm text-primary-500 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2"></span>
                Pontlook's Verified Training Marketplace
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl lg:text-6xl tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Stop chasing companies. Start talking to those that <span className="text-primary-500">already need training.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                We identify businesses experiencing workforce challenges and connect them with the right corporate training providers. No retainers. Just verified opportunities.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="h-12 px-8 text-base shadow-lg shadow-primary-500/20">
                <Link href="/providers">I'm a Training Provider</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-8 text-base">
                <Link href="/find-training">I'm Looking for Training</Link>
              </Button>
            </FadeIn>
          </div>

          {/* Right: Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <FadeIn delay={0.4} direction="left" className="relative w-full max-w-md">
              {/* Main Card */}
              <div className="relative rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-200/50 p-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-500"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        Hot Opportunity
                      </span>
                      <span className="text-xs font-medium text-slate-500">Just verified</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Enterprise Sales Training</h3>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 text-primary-500">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Building2 className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Fintech Scale-up</p>
                      <p className="text-xs">Series B • Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Wallet className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Budget Approved</p>
                      <p className="text-xs">$25k - $40k Range</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm font-medium text-slate-900 mb-2">Verified Pain Points:</p>
                  <ul className="space-y-2">
                    {[
                      "Low conversion on enterprise deals",
                      "Inconsistent sales methodology across 20 reps",
                      "Need closing skills for 6-month sales cycles"
                    ].map((point, i) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (i * 0.2) }}
                        key={i} 
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-12 -top-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-600">92</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Match Score</p>
                  <p className="text-sm font-bold text-slate-900">Excellent Fit</p>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
