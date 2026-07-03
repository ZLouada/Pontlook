import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight text-primary-500">Pontlook</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Stop chasing companies. Start talking to companies that already need training.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Platform</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/find-training" className="hover:text-primary-500">Find Training</Link></li>
              <li><Link href="/providers" className="hover:text-primary-500">For Providers</Link></li>
              <li><Link href="#how-it-works" className="hover:text-primary-500">How it Works</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-primary-500">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary-500">Insights & Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/privacy" className="hover:text-primary-500">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-500">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Pontlook Training Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
