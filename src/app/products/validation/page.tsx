import { SolutionHero } from "@/components/blocks/solution-hero";
import { ValidationFeatures } from "@/components/blocks/validation-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export default function ValidationPage() {
  return (
    <>
      <SolutionHero 
         badge="VALIDATION API"
         title="Validate Emails and Phones"
         description="Clean your data with real-time validation. Check email deliverability and phone number validity to improve campaign performance and reduce bounce rates."
         showIllustration={true}
         illustrationPreset="validation"
      />
      
      <ValidationFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
