import { SolutionHero } from "@/components/blocks/solution-hero";
import { CompanyEnrichmentFeatures } from "@/components/blocks/company-enrichment-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export default function CompanyEnrichmentPage() {
  return (
    <>
      <SolutionHero 
         badge="ORGANIZATION API"
         title="Enrich Organization Data"
         description="Enhance company profiles with firmographic data. Turn domains and LinkedIn URLs into comprehensive company insights including revenue, headcount, and tech stack."
         showIllustration={true}
         illustrationPreset="company-enrichment"
      />
      
      <CompanyEnrichmentFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
