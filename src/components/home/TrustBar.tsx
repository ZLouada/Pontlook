import { FadeIn } from "@/components/animations/FadeIn";

export function TrustBar() {
  return (
    <section className="border-y border-slate-200/60 dark:border-[var(--border-default)] bg-slate-50/50 dark:bg-[var(--bg-subtle)] py-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="none" delay={0.2} className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--fg-faint)] max-w-[200px]">
              Tapping into the <span className="text-slate-700 dark:text-[var(--fg-heading)]">$1.2B</span> GCC Corporate Training Market
            </p>
            <p className="text-[10px] text-[var(--fg-faint)] mt-1 uppercase tracking-widest">(Estimated size)</p>
          </div>
          {/* Logos Placeholders */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 dark:opacity-30 grayscale">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center h-8 w-24">
                <div className="h-4 w-full bg-slate-300 dark:bg-[var(--border-default)] rounded-sm"></div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col text-center md:text-right border-t md:border-t-0 md:border-l border-slate-200/60 dark:border-[var(--border-default)] pt-4 md:pt-0 md:pl-8 max-w-[250px]">
            <p className="text-sm font-medium text-[var(--fg-muted)] italic">
              "[PLACEHOLDER — replace with real founder bio line]"
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
