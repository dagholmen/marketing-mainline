import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/blocks/hero-illustration";

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-35 overflow-hidden">
      <div className="container flex flex-col items-center justify-center gap-8 text-center">
        {/* Main content */}
        <div className="max-w-3xl z-10 relative">
          <h1 className="text-foreground text-3xl tracking-tight md:text-4xl lg:text-5xl">
            B2B Data Enrichment
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            B2B Data Enrichment platform to enhance your business data accuracy
            and insights.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="default" className="" asChild>
              <a href="https://docs.b2benrich.com" className="truncate">
                See the Docs
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a href="https://app.b2benrich.com" className="truncate">
                Sign Up
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mt-0">
         <HeroIllustration />
      </div>

    </section>
  );
};
