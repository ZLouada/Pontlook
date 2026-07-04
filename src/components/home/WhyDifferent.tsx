import { FadeIn } from "@/components/animations/FadeIn";
import { Search, FileCheck2, UserCheck, ShieldCheck } from "lucide-react";

export function WhyDifferent() {
  const differentiators = [
    {
      icon: <FileCheck2 className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
      title: "Verified Business Pain",
      description: "We don't sell contact lists. We deliver companies that have explicitly stated a training challenge they need solved this quarter.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
      title: "Validated Decision-Makers",
      description: "Every opportunity includes direct access to the HR Director, CHRO, or L&D Manager who holds the budget.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
      title: "No Retainers",
      description: "Pay only for the qualified leads you receive. No monthly fees, no long-term contracts, no unpredictable agency costs.",
    },
    {
      icon: <Search className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
      title: "Middle East Market Intelligence",
      description: "Specialized strictly in the Middle East region. We understand the local localization requirements and cultural context.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[var(--bg-subtle)] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-[var(--border-default)] to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg-heading)] mb-4">
              Why Training Providers Choose Us
            </h2>
            <p className="text-lg text-[var(--fg-default)]">
              We replace unpredictable referral dependency with a scalable, guaranteed pipeline.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {differentiators.map((diff, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-[var(--surface-card)] rounded-2xl p-8 border border-slate-200 dark:border-[var(--border-default)] shadow-sm hover:shadow-md dark:hover:shadow-black/20 transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-6">
                  {diff.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--fg-heading)] mb-3">{diff.title}</h3>
                <p className="text-[var(--fg-default)] leading-relaxed">{diff.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
