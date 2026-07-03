import { FadeIn } from "@/components/animations/FadeIn";

export function Industries() {
  const industries = [
    "Government & Public Sector",
    "Banking & Finance",
    "Oil & Gas",
    "Healthcare",
    "Real Estate & Construction",
    "Technology & Telecomm",
    "Logistics & Supply Chain",
    "Retail & E-commerce"
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Serving High-Growth Pontlook Industries
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className="inline-flex items-center rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
