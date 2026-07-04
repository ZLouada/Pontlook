import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-white dark:bg-[var(--bg-base)] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-primary-50/30 dark:bg-primary-900/10" />
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--fg-heading)] mb-6 tracking-tight">
            Ready to scale your training business?
          </h2>
          <p className="text-xl text-[var(--fg-default)] mb-10 max-w-2xl mx-auto">
            Stop chasing. Start closing. Join the Pontlook's premier matchmaking platform for corporate training.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="h-14 px-8 text-base shadow-xl shadow-primary-500/20">
              <Link href="/providers">Partner With Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base">
              <Link href="/find-training">I Need Training</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
