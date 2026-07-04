import { FadeIn, FadeInStaggerItem } from "@/components/animations/FadeIn";
import { Search, FileCheck2, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhyDifferent() {
  const differentiators = [
    {
      icon: <FileCheck2 className="w-6 h-6" />,
      title: "Verified Business Pain",
      description: "We don't sell contact lists. We deliver companies that have explicitly stated a training challenge they need solved this quarter.",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Validated Decision-Makers",
      description: "Every opportunity includes direct access to the HR Director, CHRO, or L&D Manager who holds the budget.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "No Retainers",
      description: "Pay only for the qualified leads you receive. No monthly fees, no long-term contracts, no unpredictable agency costs.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Middle East Market Intelligence",
      description: "Specialized strictly in the Middle East region. We understand the local localization requirements and cultural context.",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-[var(--bg-subtle)] relative overflow-hidden border-b border-[var(--border-default)]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          <div className="lg:w-1/3">
            <FadeIn direction="right" delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[var(--fg-heading)] leading-[1.1] mb-6">
                Why Training Providers Choose Us
              </h2>
              <p className="text-lg md:text-xl text-[var(--fg-muted)] leading-relaxed mb-10">
                We replace unpredictable referral dependency with a scalable, guaranteed pipeline of high-intent buyers.
              </p>
              
              <Link 
                href="/providers" 
                className="inline-flex items-center gap-3 text-lg font-semibold text-[var(--fg-heading)] hover:text-primary-500 transition-colors group"
              >
                View our methodology
                <div className="w-10 h-10 rounded-full bg-[var(--border-default)] flex items-center justify-center group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </FadeIn>
          </div>

          <div className="lg:w-2/3">
            <FadeIn staggerChildren={0.1} delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                {differentiators.map((diff, index) => (
                  <FadeInStaggerItem key={index}>
                    <div className="bg-[var(--surface-card)] rounded-2xl p-8 border border-[var(--border-default)] shadow-sm hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-300 group h-full flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-[var(--bg-muted)] text-[var(--fg-heading)] flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                        {diff.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--fg-heading)] mb-4">{diff.title}</h3>
                      <p className="text-[var(--fg-muted)] leading-relaxed mt-auto">{diff.description}</p>
                    </div>
                  </FadeInStaggerItem>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
