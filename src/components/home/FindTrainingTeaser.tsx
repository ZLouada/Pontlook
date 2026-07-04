import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FindTrainingTeaser() {
  return (
    <section className="py-24 bg-slate-900 dark:bg-[var(--bg-subtle)] relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Find the right training partner in 48 hours.
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Stop searching blindly. Tell us your workforce challenges, budget, and timeline. We'll match you with 3 verified training providers that specialize in your exact needs.
          </p>
          
          <Button size="lg" asChild className="h-14 px-8 text-lg bg-primary-500 hover:bg-primary-400 text-white shadow-xl shadow-primary-500/20 group">
            <Link href="/find-training">
              Start Free Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <p className="mt-6 text-sm text-slate-400">
            100% free for companies seeking training. Takes 3 minutes.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
