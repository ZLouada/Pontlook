import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ── Reusable TestimonialCard ────────────────────────────────
// Swap in real data by populating the `testimonials` array below.
// Each card accepts: quote, name, title, company, and an optional stat callout.

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  stat?: {
    value: string;
    label: string;
  };
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-[var(--surface-card)] rounded-2xl p-8 border border-[var(--border-default)] shadow-sm hover:shadow-xl dark:hover:shadow-black/20 transition-all flex flex-col h-full">
      <p className="text-lg text-[var(--fg-default)] leading-relaxed italic mb-8 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-[var(--border-default)]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[var(--bg-muted)] border border-[var(--border-default)] flex items-center justify-center font-bold text-[var(--fg-faint)] text-sm">
            {testimonial.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="font-bold text-sm text-[var(--fg-heading)]">{testimonial.name}</p>
            <p className="text-xs text-[var(--fg-muted)]">{testimonial.title}, {testimonial.company}</p>
          </div>
        </div>
        {testimonial.stat && (
          <div className="text-right">
            <p className="text-2xl font-bold text-primary-500">{testimonial.stat.value}</p>
            <p className="text-xs text-[var(--fg-faint)]">{testimonial.stat.label}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Testimonial Data ────────────────────────────────────────
// Replace this array with real testimonials when available.
const testimonials: Testimonial[] = [];

export function Testimonials() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="py-12 md:py-24 bg-[var(--bg-base)] border-b border-[var(--border-default)]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-[var(--fg-heading)] mb-4">
            Trusted By Training Providers &amp; Companies Across the UAE
          </h2>
        </FadeIn>

        {hasTestimonials ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <TestimonialCard testimonial={t} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn delay={0.2}>
            <div className="max-w-2xl mx-auto text-center bg-[var(--bg-subtle)] rounded-2xl p-8 md:p-12 border border-[var(--border-default)]">
              <p className="text-xl text-[var(--fg-default)] leading-relaxed mb-6">
                We&rsquo;re onboarding our first cohort of verified training providers in the UAE.
              </p>
              <Link
                href="/providers"
                className="inline-flex items-center gap-2 text-lg font-semibold text-primary-500 hover:text-primary-600 transition-colors group"
              >
                Reach out if you&rsquo;d like early access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
