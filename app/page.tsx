import { Hero } from "@/components/home/Hero";
import { PlatformOverview } from "@/components/home/PlatformOverview";
import { KeyFeatures } from "@/components/home/KeyFeatures";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Benefits } from "@/components/home/Benefits";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformOverview />
      <KeyFeatures />
      <HowItWorks />
      <Benefits />
      <CTA />
    </>
  );
}
