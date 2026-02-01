import { ApiSection } from "@/components/blocks/apis-block";
import { FAQ } from "@/components/blocks/faq";
import { Hero } from "@/components/blocks/hero";
import { Pricing } from "@/components/blocks/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <ApiSection />
      <Pricing />
      <FAQ />
    </>
  );
}

/*
<Logos />

      <Features />
      <ResourceAllocation />
      <Testimonials />
      */
