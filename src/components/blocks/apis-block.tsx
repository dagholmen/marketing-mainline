"use client";

import { useTheme } from "next-themes";

export function ApiSection() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="py-20 lg:py-20">
      <div className="container">
        <div className="mb-12 flex items-start justify-between">
          <div className="text-start">
            <h2>
              API Documentation
            </h2>
            <p className="text-muted-foreground mt-4">
              Integrate B2B data enrichment into your applications
            </p>
          </div>
        </div>

        <div className="w-full h-[1800px] border border-border rounded-lg overflow-hidden shadow-lg bg-background">
          <iframe
            src="https://docs.b2benrich.com/api/person"
            className="w-full h-full"
            title="B2B Enrich API Documentation"
          />
        </div>
      </div>
    </section>
  );
}
