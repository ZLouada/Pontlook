import { FadeIn } from "@/components/animations/FadeIn";

export function TrustBar() {
  return (
    <section className="border-y border-slate-200/60 bg-slate-50/50 py-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="none" delay={0.2} className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 max-w-[200px]">
              Tapping into the <span className="text-slate-700">$1.2B</span> Middle East Corporate Training Market
            </p>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">(Estimated size)</p>
          </div>
          {/* We'll use CSS shapes to mimic logos for now to keep it clean */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos Placeholders */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center h-8 w-24">
                <div className="h-4 w-full bg-slate-300 rounded-sm"></div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
