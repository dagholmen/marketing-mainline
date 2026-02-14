import { ArrowRight } from "lucide-react";

import { HeroIllustration } from "@/components/blocks/hero-illustration";
import { HeroStats } from "@/components/blocks/hero-stats";
import { Button } from "@/components/ui/button";
import { GlimmeringMap } from "@/components/ui/glimmering-map";

// Import type from hero-illustration
type IllustrationPreset = "default" | "people-enrichment" | "company-enrichment" | "company-search" | "validation" | "people-search" | "prospector" | "data-extraction";

interface SolutionHeroProps {
  badge: string;
  title: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  showStats?: boolean;
  showIllustration?: boolean;
  illustrationPreset?: IllustrationPreset; // New prop
}

export const SolutionHero = ({
  badge,
  title,
  description,
  primaryCtaText = "See the Docs",
  primaryCtaLink = "https://docs.b2benrich.com",
  secondaryCtaText = "Sign Up",
  secondaryCtaLink = "https://app.b2benrich.com",
  showStats = false,
  showIllustration = true,
  illustrationPreset = "default", // Default to default
}: SolutionHeroProps) => {
  return (
    <section className="relative py-16 lg:py-32 lg:pt-28 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none md:top-48 lg:top-100 lg:scale-130">
        <GlimmeringMap className="h-full w-full object-cover" />
      </div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 text-center">
        {/* Main content */}
        <div className="max-w-4xl z-10 relative">
          <div className="mb-6 inline-flex rounded-full border border-border bg-card/50 backdrop-blur-sm px-6 py-2 shadow-sm">
            <span className="text-foreground text-sm font-semibold md:text-sm">{badge}</span>
          </div>
          
          <h1 className="text-foreground text-5xl tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="text-muted-foreground text-md mt-5 md:text-lg lg:text-xl text-balance">
            {description}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="default" className="" asChild>
              <a href={primaryCtaLink} className="truncate">
                {primaryCtaText}
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a href={secondaryCtaLink} className="truncate">
                {secondaryCtaText}
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {showIllustration && (
        <div className="container mt-0">
           <HeroIllustration preset={illustrationPreset} />
        </div>
      )}

      {showStats && (
        <div className="container mt-10">
          <HeroStats />
        </div>
      )}
    </section>
  );
};
