import { SolutionHero } from "@/components/blocks/solution-hero";
import { PeopleEnrichmentFeatures } from "@/components/blocks/people-enrichment-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export default function PeopleEnrichmentPage() {
  return (
    <>
      <SolutionHero 
         badge="PERSON API"
         title="Enrich and Resolve Person Data"
         description="Turn LinkedIn URLs, emails, and phone numbers into complete professional profiles. Get verified contact data, work history, and skills in real-time."
         showIllustration={true}
         illustrationPreset="people-enrichment" 
      />
      
      <PeopleEnrichmentFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
