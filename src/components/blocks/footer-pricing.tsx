import { Server, Lock, Users, Globe, TrendingUp, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FooterPricing() {
  return (
    <section id="pricing" className="bg-secondary-foreground py-16 md:py-24">
      <div className="container">
        <h2 className="text-primary-foreground mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Start free. Scale confidently.
        </h2>
      </div>

      <div className="border-border/20 grid gap-px border-y md:grid-cols-2">
        {/* Free Plan */}
        <div className="bg-secondary-foreground relative flex flex-col p-8 md:p-10">
          <h3 className="text-primary-foreground mb-2 text-2xl font-bold md:text-3xl">
            Free
          </h3>
          <div className="mb-8 flex items-baseline gap-1">
            <span className="text-primary-foreground text-4xl font-bold">
              $0
            </span>
            <span className="text-primary-foreground/70">/ forever</span>
          </div>

          <ul className="mb-8 flex-1 space-y-4">
            <li className="flex items-start gap-3">
              <Server className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                50 credits per month
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                Person enrichment
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                Company enrichment
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                Ideal for testing & small projects
              </span>
            </li>
          </ul>

          <Button
            size="lg"
            variant="secondary"
            className="w-full font-semibold"
          >
            Get Started
          </Button>
        </div>

        {/* Starter Plan */}
        <div className="bg-secondary-foreground border-border/20 relative flex flex-col border-t p-8 md:border-t-0 md:border-l md:p-10">
          <h3 className="text-primary-foreground mb-2 text-2xl font-bold md:text-3xl">
            Starter
          </h3>
          <div className="mb-8 flex items-baseline gap-1">
            <span className="text-primary-foreground text-4xl font-bold">
              $49
            </span>
            <span className="text-primary-foreground/70">/ month</span>
          </div>

          <ul className="mb-8 flex-1 space-y-4">
            <li className="flex items-start gap-3">
              <Server className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                2,000 credits per month
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                Person & company enrichment
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                Prospector access
              </span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                7-day free trial included
              </span>
            </li>
          </ul>

          <Button size="lg" className="w-full font-semibold">
            Start Free Trial
          </Button>
        </div>

        {/* Grow Plan (Most Popular) */}
        <div className="bg-secondary-foreground border-border/20 relative flex flex-col border-t p-8 md:border-t md:p-10">
          <div className="absolute top-0 right-0 bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
            Most popular
          </div>

          <h3 className="text-primary-foreground mb-2 text-2xl font-bold md:text-3xl">
            Grow
          </h3>
          <div className="mb-8 flex items-baseline gap-1">
            <span className="text-primary-foreground text-4xl font-bold">
              $149
            </span>
            <span className="text-primary-foreground/70">/ month</span>
          </div>

          <ul className="mb-8 flex-1 space-y-4">
            <li className="flex items-start gap-3">
              <Server className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                10,000 credits per month
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                Person & company enrichment
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                Advanced prospector access
              </span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                7-day free trial included
              </span>
            </li>
          </ul>

          <Button size="lg" className="w-full font-semibold">
            Start Free Trial
          </Button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-secondary-foreground border-border/20 relative flex flex-col border-t p-8 md:border-l md:p-10">
          <h3 className="text-primary-foreground mb-2 text-2xl font-bold md:text-3xl">
            Enterprise
          </h3>
          <div className="mb-8 flex items-baseline gap-1">
            <span className="text-primary-foreground text-4xl font-bold">
              Custom
            </span>
            <span className="text-primary-foreground/70">pricing</span>
          </div>

          <ul className="mb-8 flex-1 space-y-4">
            <li className="flex items-start gap-3">
              <Server className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                Custom credit allocation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                All enrichment features
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                Dedicated account manager
              </span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp className="text-primary-foreground/70 mt-1 size-5 shrink-0" />
              <span className="text-primary-foreground/70">
                Priority support & SLA
              </span>
            </li>
          </ul>

          <Button
            size="lg"
            variant="secondary"
            className="w-full font-semibold"
          >
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
}
