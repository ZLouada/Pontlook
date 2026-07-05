import Link from "next/link";
import { FadeIn, FadeInStaggerItem } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Target, CheckCircle2 } from "lucide-react";

export function FindTrainingTeaser() {
  return (
    <section className="py-16 md:py-32 bg-[var(--bg-muted)] relative overflow-hidden border-b border-[var(--border-default)]">
      
      {/* Background elements for depth */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-primary-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div>
            <FadeIn staggerChildren={0.1}>
              <FadeInStaggerItem>
                <div className="inline-flex items-center rounded-full border border-primary-200 dark:border-primary-800/50 bg-primary-50 dark:bg-primary-900/30 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-400 mb-8 uppercase tracking-widest">
                  For Companies
                </div>
              </FadeInStaggerItem>
              
              <FadeInStaggerItem>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[var(--fg-heading)] leading-[1.05] mb-6 md:mb-8">
                  Find the right training partner in 48 hours.
                </h2>
              </FadeInStaggerItem>
              
              <FadeInStaggerItem>
                <p className="text-lg md:text-xl text-[var(--fg-default)] leading-relaxed mb-8 md:mb-10 max-w-lg">
                  Stop searching blindly and reviewing endless proposals. Tell us your workforce challenges, budget, and timeline. 
                </p>
              </FadeInStaggerItem>
              
              <FadeInStaggerItem>
                <Button size="lg" asChild className="h-16 px-10 text-lg shadow-xl shadow-primary-500/20 group w-full sm:w-auto">
                  <Link href="/find-training">
                    Start Free Assessment
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
                <p className="mt-6 text-sm font-medium text-[var(--fg-muted)]">
                  100% free for companies seeking training. Takes 3 minutes.
                </p>
              </FadeInStaggerItem>
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="left" delay={0.2}>
              <div className="grid gap-6">
                
                <div className="bg-[var(--surface-card)] rounded-2xl p-6 md:p-8 border border-[var(--border-default)] shadow-sm hover:shadow-xl dark:hover:shadow-black/20 transition-shadow">
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-[var(--fg-heading)] mb-2">1. Define Your Needs</h4>
                      <p className="text-[var(--fg-muted)] leading-relaxed text-sm md:text-base">Use our guided assessment to map out your specific pain points, audience size, and target outcomes.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--surface-card)] rounded-2xl p-6 md:p-8 border border-[var(--border-default)] shadow-sm hover:shadow-xl dark:hover:shadow-black/20 transition-shadow ml-0 md:ml-8">
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-[var(--fg-heading)] mb-2">2. We Match You</h4>
                      <p className="text-[var(--fg-muted)] leading-relaxed text-sm md:text-base">Our algorithm and curation team pair you with up to 3 specialized providers in the GCC who match your criteria perfectly.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--surface-card)] rounded-2xl p-6 md:p-8 border border-[var(--border-default)] shadow-sm hover:shadow-xl dark:hover:shadow-black/20 transition-shadow ml-0 md:ml-16">
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-[var(--fg-heading)] mb-2">3. Meet & Decide</h4>
                      <p className="text-[var(--fg-muted)] leading-relaxed text-sm md:text-base">Receive detailed briefs from the matched providers. You choose who you want to talk to.</p>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
