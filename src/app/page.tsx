import { ApiSection } from "@/components/blocks/apis-block";
import { EnrichmentData } from "@/components/blocks/enrichment-data";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { Hero } from "@/components/blocks/hero";
import { HowCreditsWork } from "@/components/blocks/how-credits-work";
import { PatternSeparator } from "@/components/blocks/pattern-separator";

export default function Home() {
  return (
    <>
      <div className="px-0 md:px-8 lg:px-12">
        <Hero />
      </div>

      <div className="px-0 md:px-8 lg:px-12">
        <EnrichmentData />
      </div>

      <div className="px-0">
        <ApiSection />
      </div>

      <FooterPricing />

      <HowCreditsWork />
    </>
  );
}

/*
<Logos />
      <FAQ />
      <Features />
      <ResourceAllocation />
      <Testimonials />
      */
