import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Check, Flame, ThermometerSun, Thermometer } from "lucide-react";

export function ProvidersTeaser() {
  return (
    <section className="py-24 bg-white dark:bg-[var(--bg-base)] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <FadeIn direction="right">
              <div className="bg-slate-50 dark:bg-[var(--bg-muted)] border border-slate-200 dark:border-[var(--border-default)] rounded-2xl p-8 relative">
                <h3 className="text-xl font-bold text-[var(--fg-heading)] mb-6">Lead Quality Tiers</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--fg-heading)] flex items-center gap-2">
                        Hot <span className="text-xs font-normal bg-[var(--surface-card)] border border-[var(--border-default)] px-2 py-0.5 rounded-full text-[var(--fg-muted)]">Ready to buy</span>
                      </h4>
                      <p className="text-sm text-[var(--fg-default)] mt-1">Budget approved, timeline set within 30 days, specific pain points identified.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                      <ThermometerSun className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--fg-heading)] flex items-center gap-2">
                        Warm <span className="text-xs font-normal bg-[var(--surface-card)] border border-[var(--border-default)] px-2 py-0.5 rounded-full text-[var(--fg-muted)]">Evaluating options</span>
                      </h4>
                      <p className="text-sm text-[var(--fg-default)] mt-1">Needs clearly defined, budget pending final approval, exploring partners.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 opacity-75">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      <Thermometer className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--fg-heading)] flex items-center gap-2">
                        Qualified <span className="text-xs font-normal bg-[var(--surface-card)] border border-[var(--border-default)] px-2 py-0.5 rounded-full text-[var(--fg-muted)]">Early stage</span>
                      </h4>
                      <p className="text-sm text-[var(--fg-default)] mt-1">Validated company and decision-maker with a recognized future need.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 max-w-xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg-heading)] mb-6">
                Predictable pipeline, <br className="hidden md:block"/>zero retainer risk.
              </h2>
              <p className="text-lg text-[var(--fg-default)] mb-8">
                Stop paying $5,000/mo agency retainers for unqualified leads. With Pontlook, you only pay for highly-qualified opportunities that match your ideal customer profile. Starting at $150 per matched lead.
              </p>
              
              <ul className="space-y-4 mb-8">
                {["Access exclusively to Pontlook verified companies", "Detailed intelligence before you accept a lead", "100% replacement guarantee on bad data"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--fg-default)]">
                    <div className="w-6 h-6 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" asChild className="h-12 px-8">
                <Link href="/providers">View Partner Requirements</Link>
              </Button>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
