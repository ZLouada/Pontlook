import Link from "next/link";
import { FadeIn, FadeInStaggerItem } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Check, Flame, ThermometerSun, Thermometer } from "lucide-react";

export function ProvidersTeaser() {
  return (
    <section className="py-16 md:py-32 bg-[var(--bg-base)] relative overflow-hidden border-b border-[var(--border-default)]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-[var(--surface-card)] border border-[var(--border-default)] rounded-3xl p-6 md:p-12 shadow-2xl shadow-black/5 dark:shadow-black/20">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--fg-heading)] mb-8 md:mb-10">Lead Quality Tiers</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Flame className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold tracking-tight text-[var(--fg-heading)] flex items-center gap-3 mb-2">
                        Hot 
                        <span className="text-xs font-semibold uppercase tracking-wider bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 px-3 py-1 rounded-full">
                          Ready to buy
                        </span>
                      </h4>
                      <p className="text-[var(--fg-muted)] leading-relaxed">Budget approved, timeline set within 30 days, specific pain points identified.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <ThermometerSun className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold tracking-tight text-[var(--fg-heading)] flex items-center gap-3 mb-2">
                        Warm 
                        <span className="text-xs font-semibold uppercase tracking-wider bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-400 px-3 py-1 rounded-full">
                          Evaluating options
                        </span>
                      </h4>
                      <p className="text-[var(--fg-muted)] leading-relaxed">Needs clearly defined, budget pending final approval, exploring partners.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group opacity-75">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Thermometer className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold tracking-tight text-[var(--fg-heading)] flex items-center gap-3 mb-2">
                        Qualified 
                        <span className="text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">
                          Early stage
                        </span>
                      </h4>
                      <p className="text-[var(--fg-muted)] leading-relaxed">Validated company and decision-maker with a recognized future need.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn staggerChildren={0.1}>
              <FadeInStaggerItem>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[var(--fg-heading)] leading-[1.05] mb-6 md:mb-8">
                  Predictable pipeline, <br className="hidden md:block"/>zero retainer risk.
                </h2>
              </FadeInStaggerItem>
              
              <FadeInStaggerItem>
                <p className="text-lg md:text-xl text-[var(--fg-default)] leading-relaxed mb-6">
                  Stop paying thousands per month in agency retainers for unqualified leads. With Pontlook, you only pay for highly-qualified opportunities that match your ideal customer profile.
                </p>
                <p className="text-xl md:text-2xl font-bold text-[var(--fg-heading)] mb-8 md:mb-10">
                  Starting at $150 per matched lead.
                </p>
              </FadeInStaggerItem>
              
              <FadeInStaggerItem>
                <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12">
                  {["Access exclusively to verified GCC companies", "Detailed intelligence before you accept a lead", "100% replacement guarantee on bad data"].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-base md:text-lg text-[var(--fg-default)] font-medium">
                      <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <Button size="lg" asChild className="h-16 px-10 text-lg shadow-xl shadow-primary-500/20 w-full sm:w-auto">
                  <Link href="/providers">For Training Providers</Link>
                </Button>
              </FadeInStaggerItem>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
