import { SolutionHero } from "@/components/blocks/solution-hero";
import { ProspectorFeatures } from "@/components/blocks/prospector-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export default function ProspectorPage() {
  return (
    <>
      <SolutionHero 
         badge="PROSPECTOR API"
         title="Advanced B2B Prospecting"
         description="Build highly targeted lead lists with 30+ filters including technology, revenue, and intent signals. Power your lead generation with precision data."
         showIllustration={true}
         illustrationPreset="prospector"
      />
      
      <ProspectorFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
