import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary-foreground flex flex-col items-center gap-14">
      <div className="container space-y-3 text-center">
        <h2 className="text-primary-foreground text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Start your free trial today
        </h2>
        <p className="text-primary-foreground mx-auto max-w-xl leading-snug text-balance">
          Accurate, fast, and reliable B2B data enrichment to enhance your
          business data quality and insights.
        </p>
      </div>
      <Button variant="outline" size="lg" asChild className="">
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

      <div className="mt-10 w-full overflow-hidden md:mt-14 lg:mt-20">
        <Image
          src="/logo.svg"
          alt="B2B Logo"
          width={700}
          height={200}
          className="mx-auto w-full max-w-3xl translate-y-1/4 invert dark:invert-0"
        />
      </div>
    </footer>
  );
}
