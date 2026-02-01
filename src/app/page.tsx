import { Background } from "@/components/background";
import {
  ApiSection,
  CodeBlockWithHeader,
} from "@/components/blocks/apis-block";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";
import { RetroGrid } from "@/components/ui/retro-grid";

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
