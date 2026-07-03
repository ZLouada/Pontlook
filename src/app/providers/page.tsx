"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Shield, BarChart3, Users, DollarSign } from "lucide-react";
import Link from "next/link";

export default function ProvidersPage() {
  return (
    <div className="flex-1 w-full bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-20 border-b border-slate-200/60">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary-50 to-transparent"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              Now accepting applications for Q3 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto">
              A predictable pipeline of <span className="text-primary-500">budget-approved</span> training opportunities.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              We connect top-tier training providers with Pontlook companies actively seeking to solve workforce challenges. Pay only for qualified leads. Zero retainers.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary-500/20" asChild>
              <Link href="#apply">Apply to Partner Network</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Stop paying for clicks. Start paying for conversations.</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 p-5 rounded-2xl bg-red-50/50 border border-red-100">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <span className="text-red-600 font-bold">X</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">The Old Way</h4>
                      <p className="text-slate-600 text-sm mt-1">Paying $5,000/mo to agencies for unverified leads, generic cold outreach that damages your brand, and unpredictable referral cycles.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-2xl bg-primary-50/50 border border-primary-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">The Pontlook Platform Way</h4>
                      <p className="text-slate-600 text-sm mt-1">Receive detailed briefs from companies that have a confirmed need, approved budget, and are ready to evaluate vendors this week.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <FadeIn delay={0.1}>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <TrendingUp className="w-8 h-8 text-primary-500 mb-4" />
                  <h4 className="font-bold text-slate-900 text-3xl mb-1">85%</h4>
                  <p className="text-sm text-slate-600">Lead-to-meeting rate for "Hot" tier opportunities.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 mt-8">
                  <Shield className="w-8 h-8 text-primary-500 mb-4" />
                  <h4 className="font-bold text-slate-900 text-3xl mb-1">100%</h4>
                  <p className="text-sm text-slate-600">Replacement guarantee on any unqualified lead.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <Users className="w-8 h-8 text-primary-500 mb-4" />
                  <h4 className="font-bold text-slate-900 text-3xl mb-1">3 Max</h4>
                  <p className="text-sm text-slate-600">Providers competing per opportunity. High win rates.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 mt-8">
                  <DollarSign className="w-8 h-8 text-primary-500 mb-4" />
                  <h4 className="font-bold text-slate-900 text-3xl mb-1">Zero</h4>
                  <p className="text-sm text-slate-600">Monthly retainers or platform access fees.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Model */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Performance-Based Pricing</h2>
            <p className="text-lg text-slate-300">No retainers. No subscriptions. You only pay when you accept a verified opportunity.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Tier 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 mb-6">
                  Qualified
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-slate-400"> / lead</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Verified company & contact</li>
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Acknowledged training need</li>
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Early-stage exploration</li>
                </ul>
              </div>
            </FadeIn>
            
            {/* Tier 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-800 rounded-2xl p-8 border-2 border-primary-500 relative transform md:-translate-y-4 shadow-2xl shadow-primary-500/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400 mb-6">
                  Warm
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$350</span>
                  <span className="text-slate-400"> / lead</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0" /> Everything in Qualified</li>
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0" /> Needs explicitly defined</li>
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0" /> Actively evaluating partners</li>
                </ul>
              </div>
            </FadeIn>

            {/* Tier 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 mb-6">
                  Hot
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$750</span>
                  <span className="text-slate-400"> / lead</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" /> Everything in Warm</li>
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" /> Budget fully approved</li>
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" /> Decision timeline &lt; 30 days</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Application */}
      <section id="apply" className="py-24 bg-white text-center">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Join the Network</h2>
            <p className="text-slate-600 mb-10 max-w-xl mx-auto">
              We maintain strict quality control. We only accept providers with proven track records, excellent references, and capacity to take on enterprise clients in the Pontlook region.
            </p>
            <form className="max-w-md mx-auto space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                <input type="text" className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none" placeholder="Acme Training" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Business Email</label>
                <input type="email" className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Primary Training Focus</label>
                <select className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-white">
                  <option>Leadership & Management</option>
                  <option>Sales & Revenue</option>
                  <option>Technology & AI</option>
                  <option>Compliance & Safety</option>
                  <option>Soft Skills & Communication</option>
                </select>
              </div>
              <Button type="button" className="w-full mt-4 h-12" onClick={(e) => { e.preventDefault(); alert("Application submitted for review (Demo)"); }}>
                Submit Application
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
