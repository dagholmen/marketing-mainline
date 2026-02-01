import { ApiSection } from "@/components/blocks/apis-block";
import { Hero } from "@/components/blocks/hero";
import { PatternSeparator } from "@/components/blocks/pattern-separator";

export default function Home() {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-12">
        <Hero />
      </div>

      <PatternSeparator heightClassName="h-[170px]" />
      <div className="px-4 md:px-8 lg:px-12">
        <ApiSection />
      </div>
    </>
  );
}

/*
<Logos />
      <FAQ />
      <Features />
      <ResourceAllocation />
      <Testimonials />
      */
