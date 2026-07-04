import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = {
  title: "Terms of Service | Pontlook",
  description: "Pontlook's terms of service for using our corporate training matchmaking platform.",
};

export default function TermsPage() {
  return (
    <div className="flex-1 w-full bg-[var(--bg-base)]">
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--fg-heading)] mb-8">
              Terms of Service
            </h1>
            <p className="text-sm text-[var(--fg-faint)] mb-12">
              Last updated: July 2026
            </p>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-[var(--fg-default)]">
              <div className="bg-[var(--bg-subtle)] rounded-2xl p-8 border border-[var(--border-default)]">
                <p className="text-lg font-medium text-[var(--fg-heading)] mb-4">
                  These terms of service are being finalized.
                </p>
                <p>
                  By using Pontlook, you agree to the terms outlined below. These govern both training providers and companies seeking training.
                </p>
                <p className="mt-4">
                  For questions, contact us at{" "}
                  <a href="mailto:hello@pontlook.com" className="text-primary-500 hover:underline">
                    hello@pontlook.com
                  </a>.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[var(--fg-heading)]">Platform Usage</h2>
              <p>
                Pontlook provides a matchmaking service connecting companies with corporate training providers. The platform facilitates introductions — all commercial agreements are between the company and the training provider directly.
              </p>

              <h2 className="text-2xl font-bold text-[var(--fg-heading)]">For Training Providers</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providers pay per qualified lead as outlined in their partnership agreement.</li>
                <li>Lead quality is guaranteed — unqualified leads are replaced at no additional cost.</li>
                <li>Providers are expected to respond to matched opportunities within 48 hours.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[var(--fg-heading)]">For Companies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The assessment and matchmaking service is free for companies seeking training.</li>
                <li>Submitted information is shared only with matched, vetted providers.</li>
                <li>Companies are under no obligation to engage any matched provider.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[var(--fg-heading)]">Limitation of Liability</h2>
              <p>
                Pontlook acts as a matchmaking intermediary. We do not guarantee specific outcomes from training engagements and are not party to agreements between companies and providers.
              </p>

              <h2 className="text-2xl font-bold text-[var(--fg-heading)]">Contact</h2>
              <p>
                For questions about these terms, email{" "}
                <a href="mailto:hello@pontlook.com" className="text-primary-500 hover:underline">
                  hello@pontlook.com
                </a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
