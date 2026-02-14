import { SolutionHero } from "@/components/blocks/solution-hero";
import { PeopleSearchFeatures } from "@/components/blocks/people-search-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export default function CompanySearchPage() {
  return (
    <>
      <SolutionHero 
         badge="COMPANY SEARCH API"
         title="Find Companies by Criteria"
         description="Search for companies based on industry, location, size, and technology. Build targeted lists of accounts for your sales and marketing teams."
         showIllustration={true}
         illustrationPreset="company-search"
      />
      
      <PeopleSearchFeatures /> {/* Using shared search features component for now */}

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
