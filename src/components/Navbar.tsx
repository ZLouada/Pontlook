import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-[var(--border-default)] bg-white/80 dark:bg-[var(--bg-base)]/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-primary-500">Pontlook</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--fg-default)]">
            <Link href="/providers" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              For Providers
            </Link>
            <Link href="#how-it-works" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              How it Works
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/find-training" className="hidden sm:block text-sm font-medium text-[var(--fg-default)] hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            Find Training
          </Link>
          <Button asChild size="sm">
            <Link href="/providers">Partner With Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
