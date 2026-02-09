"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FooterPricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Calculate prices based on billing period
  const starterPrice = isAnnual ? Math.round(49 * 10) : 49;
  const growPrice = isAnnual ? Math.round(149 * 10) : 149;

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">Pricing</h2>
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative h-6 w-11 rounded-full transition-colors ${isAnnual ? 'bg-foreground' : 'bg-muted'}`}
              aria-label="Toggle pricing period"
            >
              <span className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-card shadow-sm border border-border transition-transform ${isAnnual ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
            <span className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
              <span className="rounded-full bg-foreground px-2 py-0.5 text-xs font-semibold text-background">
                2 MONTHS FREE
              </span>
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Free Plan */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-semibold">Free</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-sm text-muted-foreground">/ forever</span>
              </div>
            </div>

            <Button variant="outline" className="mb-6 w-full">
              Get Started
            </Button>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">50 credits per month</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">Person enrichment</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">Company enrichment</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">Ideal for testing & small projects</span>
              </li>
            </ul>
          </div>

          {/* Starter Plan */}
          <div className="flex flex-col rounded-2xl border-2 border-foreground bg-card p-6">
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-semibold">Starter</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">${starterPrice}</span>
                <span className="text-sm text-muted-foreground">/ {isAnnual ? 'year' : 'month'}</span>
              </div>
              {isAnnual && (
                <span className="text-xs text-muted-foreground">$49 per month, billed annually</span>
              )}
            </div>

            <Button className="mb-6 w-full">Start Free Trial</Button>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">2,000 credits per month</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">Person & company enrichment</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">Prospector access</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">7-day free trial included</span>
              </li>
            </ul>
          </div>

          {/* Grow Plan */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-semibold">Grow</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">${growPrice}</span>
                <span className="text-sm text-muted-foreground">/ {isAnnual ? 'year' : 'month'}</span>
              </div>
              {isAnnual && (
                <span className="text-xs text-muted-foreground">$149 per month, billed annually</span>
              )}
            </div>

            <Button variant="outline" className="mb-6 w-full">
              Start Free Trial
            </Button>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">10,000 credits per month</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">Person & company enrichment</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">Advanced prospector access</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">7-day free trial included</span>
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-semibold">Enterprise</h3>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-sm text-muted-foreground">pricing</span>
              </div>
            </div>

            <Button variant="outline" className="mb-6 w-full">
              Talk to Us
            </Button>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">Custom credit allocation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">All enrichment features</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#005B8F]" />
                <span className="text-sm">Priority support & SLA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
