import { SolutionHero } from "@/components/blocks/solution-hero";
import { EnrichmentData } from "@/components/blocks/enrichment-data";
import { DataEnrichmentFeatures } from "@/components/blocks/data-enrichment-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export default function DataEnrichmentPage() {
  return (
    <>
      <SolutionHero 
         badge="B2B DATA API"
         title="Data enrichment API for product builders"
         description="Enhance your application data with rich profile information, company insights, and verified contact data. Reliable, high-quality B2B people & company data at scale through a simple RESTful API."
         showIllustration={true}
         illustrationPreset="people-enrichment"
      />
      
      <div className="px-0 md:px-8 lg:px-12">
        <EnrichmentData />
      </div>

      <DataEnrichmentFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
