import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight } from "lucide-react";

export function BlogPreview() {
  const posts = [
    {
      category: "Market Intelligence",
      title: "State of Corporate Training in the UAE: 2026 Outlook",
      description: "Analyzing the shift towards specialized soft-skills and AI adoption across Dubai and Abu Dhabi enterprises.",
      href: "#",
    },
    {
      category: "Sales & Business Development",
      title: "Why Cold Emailing HR Directors No Longer Works",
      description: "Data from 10,000 outreach campaigns shows a 0.2% conversion rate. Here's what top providers do instead.",
      href: "#",
    },
    {
      category: "HR & Learning Insights",
      title: "Measuring ROI on Leadership Training",
      description: "A framework for L&D managers to prove the business impact of mid-level management coaching.",
      href: "#",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Market Insights</h2>
            <p className="text-slate-600 dark:text-slate-300">Data-backed intelligence for the UAE corporate training industry.</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="none">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
              View all articles <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Link href={post.href} className="group block h-full bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/60 hover:shadow-md transition-all">
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {post.description}
                </p>
                <div className="flex items-center text-sm font-medium text-primary-600 mt-auto">
                  Read article <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
