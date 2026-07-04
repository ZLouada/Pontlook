import { FadeIn } from "@/components/animations/FadeIn";

export function SocialProof() {
  const metrics = [
    { value: "48h", label: "To First Match", subLabel: "Based on Pontlook platform data" },
    { value: "85%", label: "Book a Meeting", subLabel: "Based on Pontlook platform data" },
    { value: "$2.5M+", label: "Pipeline Generated", subLabel: "Current projected pipeline" },
    { value: "120+", label: "Active Companies", subLabel: "Companies onboarded to date" },
  ];

  return (
    <section className="py-20 bg-primary-900 dark:bg-[var(--bg-muted)] text-white relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-primary-800 dark:divide-[var(--border-default)]">
          {metrics.map((metric, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-primary-200 dark:text-primary-400 uppercase tracking-wider mb-1">{metric.label}</div>
                {metric.subLabel && <div className="text-xs text-primary-400 dark:text-[var(--fg-faint)] opacity-80">{metric.subLabel}</div>}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
