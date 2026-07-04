import { FadeIn, FadeInStaggerItem } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, DollarSign, Users } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[var(--bg-base)] pt-32 pb-24 border-b border-[var(--border-default)]">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-primary-50/40 to-transparent dark:from-primary-900/10 blur-3xl opacity-50" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-blue-50/40 to-transparent dark:from-blue-900/10 blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Column: Typography */}
        <div className="flex-1 lg:max-w-2xl">
          <FadeIn staggerChildren={0.15} delay={0.2} direction="none">
            <FadeInStaggerItem>
              <div className="inline-flex items-center rounded-full border border-primary-200 dark:border-primary-800/50 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 text-sm text-primary-600 dark:text-primary-400 mb-8 font-medium">
                <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
                The UAE & Middle East Training Marketplace
              </div>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem>
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-[var(--fg-heading)] leading-[1.05] mb-8">
                Stop chasing companies. <br className="hidden md:block" />
                <span className="text-primary-500">Start talking to buyers.</span>
              </h1>
            </FadeInStaggerItem>

            <FadeInStaggerItem>
              <p className="text-xl md:text-2xl text-[var(--fg-default)] leading-relaxed mb-12 max-w-xl">
                We identify companies experiencing workforce challenges and connect them with the right corporate training providers.
              </p>
            </FadeInStaggerItem>

            <FadeInStaggerItem>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-primary-500/20 group" asChild>
                  <Link href="/providers">
                    For Training Providers
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto bg-[var(--surface-card)]" asChild>
                  <Link href="/find-training">
                    I Need Training
                  </Link>
                </Button>
              </div>
            </FadeInStaggerItem>
          </FadeIn>
        </div>

        {/* Right Column: Hero Visual (Hot Opportunity Card) */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none">
          <FadeIn parallaxOffset={-40} delay={0.4} direction="up" className="relative">
            
            <div className="bg-[var(--surface-card)] border border-[var(--border-default)] rounded-2xl p-8 shadow-2xl shadow-black/5 dark:shadow-black/20">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[var(--border-default)]">
                <div className="inline-flex items-center rounded-full bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 px-3 py-1 text-sm font-semibold text-red-600 dark:text-red-400">
                  <span className="flex h-2 w-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                  Hot Opportunity
                </div>
                <span className="text-sm font-medium text-[var(--fg-faint)]">Just verified</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--fg-heading)] mb-2">Leadership Development Program</h3>
                  <div className="flex items-center gap-2 text-[var(--fg-muted)]">
                    <BriefcaseBusiness className="w-4 h-4" />
                    <span>Technology & AI Sector (Series C)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="bg-[var(--bg-subtle)] rounded-xl p-4 border border-[var(--border-default)]">
                    <div className="flex items-center gap-2 text-[var(--fg-faint)] text-sm mb-1">
                      <DollarSign className="w-4 h-4" />
                      Budget
                    </div>
                    <div className="font-semibold text-[var(--fg-heading)]">Approved</div>
                  </div>
                  <div className="bg-[var(--bg-subtle)] rounded-xl p-4 border border-[var(--border-default)]">
                    <div className="flex items-center gap-2 text-[var(--fg-faint)] text-sm mb-1">
                      <Users className="w-4 h-4" />
                      Audience
                    </div>
                    <div className="font-semibold text-[var(--fg-heading)]">25 Managers</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--fg-heading)] mb-2">Verified Pain Points:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-[var(--fg-muted)] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      Recently promoted managers struggling with delegation
                    </li>
                    <li className="flex items-start gap-2 text-[var(--fg-muted)] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      High turnover in engineering teams
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--surface-card)] rounded-xl p-4 shadow-xl border border-[var(--border-default)] flex items-center gap-4 hidden sm:flex">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="font-bold text-blue-600 dark:text-blue-400">92%</span>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-faint)]">Match Score</div>
                <div className="font-bold text-[var(--fg-heading)]">Excellent Fit</div>
              </div>
            </div>
            
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
}
