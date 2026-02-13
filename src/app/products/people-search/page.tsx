import { SolutionHero } from "@/components/blocks/solution-hero";
import { PeopleSearchFeatures } from "@/components/blocks/people-search-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export default function PeopleSearchPage() {
  return (
    <>
      <SolutionHero 
         badge="SEARCH API"
         title="Find People at Any Company"
         description="Discover employees and decision-makers with precision search. Filter by company, job title, and role to build targeted lists at scale."
         showIllustration={true}
         illustrationPreset="people-search"
      />
      
      <PeopleSearchFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
