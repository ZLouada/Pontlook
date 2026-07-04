import { FadeIn, FadeInStaggerItem } from "@/components/animations/FadeIn";
import { ClipboardCheck, Target, Handshake } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8 text-[var(--bg-base)]" />,
      title: "1. Businesses Submit Needs",
      description: "Companies tell us their workforce challenges, goals, and budget constraints through our guided assessment.",
    },
    {
      icon: <Target className="w-8 h-8 text-[var(--bg-base)]" />,
      title: "2. We Verify & Score",
      description: "Our team validates the decision-maker, ensures budget approval, and scores the opportunity for fit.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-[var(--bg-base)]" />,
      title: "3. You Get the Match",
      description: "Verified opportunities are sent directly to matched training providers. You only pay for qualified leads.",
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-[var(--bg-base)] relative overflow-hidden border-b border-[var(--border-default)]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <FadeIn staggerChildren={0.15} direction="up">
          <FadeInStaggerItem className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--fg-heading)] mb-6">
              How the Matchmaking Works
            </h2>
            <p className="text-xl text-[var(--fg-default)] max-w-2xl mx-auto leading-relaxed">
              A frictionless process designed to eliminate cold outreach and connect you directly with active buyers.
            </p>
          </FadeInStaggerItem>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[3rem] left-[15%] right-[15%] h-px bg-[var(--border-default)] z-0"></div>
            
            {steps.map((step, index) => (
              <FadeInStaggerItem key={index} className="relative z-10 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-[var(--fg-heading)] border-[8px] border-[var(--bg-base)] flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-500 ease-out">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[var(--fg-heading)] mb-4">{step.title}</h3>
                  <p className="text-[var(--fg-muted)] leading-relaxed max-w-sm">{step.description}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
