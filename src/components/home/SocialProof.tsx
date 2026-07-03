import { FadeIn } from "@/components/animations/FadeIn";

export function SocialProof() {
  const stats = [
    { value: "48h", label: "Average Match Time" },
    { value: "85%", label: "Lead-to-Meeting Rate" },
    { value: "$2.5M+", label: "Verified Budget Pipeline" },
    { value: "120+", label: "Active Pontlook Companies" },
  ];

  return (
    <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-primary-800">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</span>
                <span className="text-sm font-medium text-primary-200 uppercase tracking-wider">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
