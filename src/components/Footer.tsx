import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--bg-base)] border-t border-[var(--border-default)] pt-24 pb-12">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-24 md:flex justify-between items-end gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--fg-heading)] mb-6">
              Stop chasing.<br />Start closing.
            </h2>
            <Link 
              href="/providers" 
              className="inline-flex items-center gap-4 text-xl font-medium text-[var(--fg-default)] hover:text-primary-500 transition-colors group"
            >
              Partner with Pontlook
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-12 md:mt-0">
            <p className="text-lg text-[var(--fg-muted)] max-w-sm">
              The premier corporate training matchmaking platform for the Middle East.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--border-default)] gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-tight text-[var(--fg-heading)]">Pontlook</span>
            <span className="text-sm text-[var(--fg-faint)]">&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm font-medium text-[var(--fg-muted)]">
            <Link href="/find-training" className="hover:text-[var(--fg-heading)] transition-colors">Find Training</Link>
            <Link href="/providers" className="hover:text-[var(--fg-heading)] transition-colors">For Providers</Link>
            <Link href="/privacy" className="hover:text-[var(--fg-heading)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--fg-heading)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
