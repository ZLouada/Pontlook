import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-[var(--border-default)] bg-slate-50 dark:bg-[var(--bg-subtle)] py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight text-primary-500">Pontlook</span>
            </Link>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-xs">
              Stop chasing companies. Start talking to companies that already need training.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--fg-heading)] mb-4">Platform</h3>
            <ul className="space-y-3 text-sm text-[var(--fg-default)]">
              <li><Link href="/find-training" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Find Training</Link></li>
              <li><Link href="/providers" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">For Providers</Link></li>
              <li><Link href="#how-it-works" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">How it Works</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--fg-heading)] mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-[var(--fg-default)]">
              <li><Link href="/about" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Insights &amp; Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--fg-heading)] mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-[var(--fg-default)]">
              <li><Link href="/privacy" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-[var(--border-default)] text-center text-sm text-[var(--fg-faint)]">
          &copy; {new Date().getFullYear()} Pontlook Training Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
