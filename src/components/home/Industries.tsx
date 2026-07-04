import { FadeIn } from "@/components/animations/FadeIn";

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

  return (
    <section className="py-24 bg-white dark:bg-[var(--bg-base)] border-b border-slate-100 dark:border-[var(--border-default)]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[var(--fg-heading)] mb-8">
            Serving High-Growth Middle East Industries
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className="inline-flex items-center rounded-full bg-slate-50 dark:bg-[var(--bg-muted)] px-4 py-2 text-sm font-medium text-[var(--fg-default)] border border-slate-200 dark:border-[var(--border-default)] hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
