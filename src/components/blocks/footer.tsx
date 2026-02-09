import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Globe } from "@/components/blocks/globe";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black flex flex-col items-center gap-14 pt-20 pb-0">
      <div className="container space-y-3 text-center">
        <h2 className="text-foreground text-6xl md:text-7xl font-semibold tracking-tight">
          Start your free trial today
        </h2>
        <p className="text-foreground mx-auto max-w-2xl leading-snug text-balance text-xl">
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

      <div className="container pt-8 md:pt-16 px-4 md:px-2">
        <div className="mb-4 md:mb-8 mx-auto max-w-[90%] md:max-w-[500px] text-center">
          <Image
            src="/logo.svg"
            alt="B2B Logo"
            width={700}
            height={200}
            className="w-full max-w-3xl dark:invert"
          />
        </div>
        <div className="relative h-[250px] md:h-[500px] overflow-hidden -mx-4 md:mx-0 md:-mt-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe className="!relative !inset-auto w-[400px] h-[400px] md:w-[1000px] md:h-[1000px] md:!max-w-none md:!max-h-none translate-y-20 md:translate-y-60 !mx-auto pointer-events-none" />
          </div>
        </div>
      </div>
    </footer>
  );
}
