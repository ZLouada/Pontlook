import { FadeIn } from "@/components/animations/FadeIn";
import { ClipboardCheck, Target, Handshake } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary-500 dark:text-primary-400" />,
      title: "1. Businesses Submit Needs",
      description: "Companies tell us their workforce challenges, goals, and budget constraints through our guided assessment.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary-500 dark:text-primary-400" />,
      title: "2. We Verify & Score",
      description: "Our team validates the decision-maker, ensures budget approval, and scores the opportunity for fit.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary-500 dark:text-primary-400" />,
      title: "3. You Get the Match",
      description: "Verified opportunities are sent directly to matched training providers. You only pay for qualified leads.",
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-[var(--bg-base)]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg-heading)] mb-4">
              How the Matchmaking Works
            </h2>
            <p className="text-lg text-[var(--fg-default)]">
              A frictionless process designed to eliminate cold outreach and connect you directly with active buyers.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary-100 via-primary-300 to-primary-100 dark:from-primary-800/40 dark:via-primary-600/30 dark:to-primary-800/40 z-0"></div>
          
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.2} className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-[var(--bg-elevated)] border-4 border-primary-50 dark:border-primary-800/40 shadow-xl shadow-primary-500/10 dark:shadow-primary-900/20 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--fg-heading)] mb-3">{step.title}</h3>
                <p className="text-[var(--fg-default)] max-w-sm">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
