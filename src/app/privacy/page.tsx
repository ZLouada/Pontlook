import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = {
  title: "Privacy Policy | Pontlook",
  description: "Pontlook's privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="flex-1 w-full bg-[var(--bg-base)]">
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--fg-heading)] mb-8">
              Privacy Policy
            </h1>
            <p className="text-sm text-[var(--fg-faint)] mb-12">
              Last updated: July 2026
            </p>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-[var(--fg-default)]">
              <div className="bg-[var(--bg-subtle)] rounded-2xl p-8 border border-[var(--border-default)]">
                <p className="text-lg font-medium text-[var(--fg-heading)] mb-4">
                  This privacy policy is being finalized.
                </p>
                <p>
                  Pontlook is committed to protecting your personal data. We collect only the information necessary to match companies with training providers and never sell your data to third parties.
                </p>
                <p className="mt-4">
                  For questions about how we handle your data, contact us at{" "}
                  <a href="mailto:hello@pontlook.com" className="text-primary-500 hover:underline">
                    hello@pontlook.com
                  </a>.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[var(--fg-heading)]">Information We Collect</h2>
              <p>When you use Pontlook, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Company information (name, industry, size)</li>
                <li>Training needs and requirements submitted through our assessment forms</li>
                <li>Usage data and analytics to improve our platform</li>
              </ul>

              <h2 className="text-2xl font-bold text-[var(--fg-heading)]">How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Match companies with relevant training providers</li>
                <li>Communicate about matched opportunities</li>
                <li>Improve our matchmaking algorithms and platform experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-[var(--fg-heading)]">Data Sharing</h2>
              <p>
                We share your training requirements with matched providers only after verifying the opportunity. We never sell personal data to third parties for marketing purposes.
              </p>

              <h2 className="text-2xl font-bold text-[var(--fg-heading)]">Contact</h2>
              <p>
                For privacy-related inquiries, email{" "}
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
