import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyDifferent } from "@/components/home/WhyDifferent";
import { Industries } from "@/components/home/Industries";
import { SocialProof } from "@/components/home/SocialProof";
import { ProvidersTeaser } from "@/components/home/ProvidersTeaser";
import { FindTrainingTeaser } from "@/components/home/FindTrainingTeaser";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <WhyDifferent />
      <Industries />
      <SocialProof />
      <ProvidersTeaser />
      <FindTrainingTeaser />
      <FinalCTA />
    </>
  );
}
