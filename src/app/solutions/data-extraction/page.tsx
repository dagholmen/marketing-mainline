import { SolutionHero } from "@/components/blocks/solution-hero";
import { EnrichmentData } from "@/components/blocks/enrichment-data";
import { DataExtractionFeatures } from "@/components/blocks/data-extraction-features";
import { DiscoveryRelatedProducts } from "@/components/blocks/discovery-related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export default function DataExtractionPage() {
  return (
    <>
      <SolutionHero 
         badge="B2B DATA API"
         title="Extract B2B people and company data with our data extraction API"
         description="Build your product features with reliable B2B data extraction. Query 500M+ professional profiles and 50M+ companies through our simple RESTful API. Real-time data, always fresh."
         showIllustration={true}
         illustrationPreset="data-extraction"
      />
      
      <div className="px-0 md:px-8 lg:px-12">
        <EnrichmentData />
      </div>

      <DataExtractionFeatures />

      <DiscoveryRelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
