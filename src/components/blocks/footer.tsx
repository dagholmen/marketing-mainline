import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { Globe } from "@/components/blocks/globe";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative bg-background pt-28 md:pt-60 pb-0 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] md:translate-y-[44%] z-0 pointer-events-none w-[900px] h-[900px] md:w-[1400px] md:h-[1400px] opacity-10">
        <Globe />
      </div>

      <div className="container relative z-10 flex flex-col items-center gap-6 md:gap-12 text-center pb-0">
        <div className="space-y-3">
          <h2 className="text-foreground text-5xl md:text-6xl font-semibold tracking-tight">
            Start your free trial today
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl leading-snug text-balance text-xl">
            Accurate, fast, and reliable B2B data enrichment to enhance your
            business data quality and insights.
          </p>
        </div>
        <Button variant="default" size="lg" asChild className="">
          <a
            href="https://app.b2benrich.com/auth/sign-up"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            Get Started
            <ArrowUpRight className="size-4" />
          </a>
        </Button>

        <div className="mt-8 mb-[-20px] md:mb-[-30px] opacity-50">
          <Image
            src="/logo.svg"
            alt="B2B Logo"
            width={700}
            height={200}
            className="mx-auto w-full max-w-xl dark:invert"
          />
        </div>
      </div>
    </footer>
  );
}
