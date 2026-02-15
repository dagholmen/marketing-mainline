"use client";

import { useState } from "react";
import { Check, Copy, Terminal, Globe, Search, type LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { CodeBlockCode } from "@/components/ui/code-block";
import { ArrowRight } from "lucide-react";

const PEOPLE_CODE = `// Enrich a person profile
const response = await fetch(
  'https://api.b2benrich.com/v1/people/enrich?li_profile_url=' + 
  encodeURIComponent('https://linkedin.com/in/johndoe'),
  {
    method: 'GET',
    headers: {
      'X-API-Key': 'YOUR_API_KEY'
    }
  }
);

const data = await response.json();
// Returns: full_name, email, job_title, company, skills, etc.`;

const COMPANY_CODE = `# Enrich a company profile
import requests

response = requests.get(
    'https://api.b2benrich.com/v1/companies/enrich',
    params={'li_company_url': 'https://linkedin.com/company/acme'},
    headers={'X-API-Key': 'YOUR_API_KEY'}
)

data = response.json()
# Returns: company size, industry, funding, employees, etc.`;

const FIND_CODE = `# Find a person by name and company
curl -X GET \\
  "https://api.b2benrich.com/v1/people/find?full_name=John%20Doe&company_name=ACME%20Corp" \\
  -H "X-API-Key: YOUR_API_KEY"`;

interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  code: string;
  language: string;
  badge: string;
  link: string;
  linkText: string;
  align?: "left" | "right";
}

const FeatureSection = ({
  title,
  description,
  features,
  icon: Icon,
  code,
  language,
  badge,
  link,
  linkText,
  align = "left",
}: FeatureSectionProps) => {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-16 lg:py-24 border-b border-border/40 last:border-0">
      {/* Text Content */}
      <div className={`lg:col-span-5 flex flex-col gap-8 ${align === "right" ? "lg:order-last" : ""}`}>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="size-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{badge}</span>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold tracking-tight text-foreground">{title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {description}
            </p>
          </div>

          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>

          <Button asChild variant="outline" className="mt-4">
            <a href={link}>
              {linkText} <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Code Block */}
      <div className="lg:col-span-7">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="flex items-center justify-between gap-2 px-4 py-2 border-b bg-card">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary">
                GET
              </span>
              <span className="text-xs text-muted-foreground font-mono">Example Request</span>
            </div>
          </div>
          
          <div className="relative group">
            <div className="overflow-auto bg-background p-4">
              <CodeBlockCode 
                code={code}
                language={language}
                theme={resolvedTheme === "dark" ? "github-dark" : "github-light"}
                className="text-xs md:text-sm font-mono"
              />
            </div>
            <span className="absolute top-2 right-3 text-[11px] font-mono text-muted-foreground/60 pointer-events-none uppercase">
              {language}
            </span>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 size-8 p-2 opacity-0 group-hover:opacity-100 inline-flex items-center justify-center rounded-md border bg-background shadow-sm hover:bg-accent transition-all"
            >
              {copied ? (
                <Check className="size-4 text-green-600" />
              ) : (
                <Copy className="size-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DataEnrichmentFeatures = () => {
  return (
    <section className="container">
      <FeatureSection 
        badge="People Enrichment API"
        title="Enrich people profiles with comprehensive professional data"
        description="Get full profile data from any LinkedIn URL. Returns verified emails, work history, skills, education, and company information. Perfect for enriching user profiles, building contact databases, or powering AI agents."
        features={[
          "Verified email addresses with deliverability checks",
          "Complete work history and current role",
          "Skills, certifications, and education",
          "Company information and firmographics"
        ]}
        icon={Terminal}
        code={PEOPLE_CODE}
        language="javascript"
        link="/products/people-enrichment"
        linkText="View People Enrichment API"
      />

      <FeatureSection 
        badge="Company Enrichment API"
        title="Enrich company profiles with detailed firmographic data"
        description="Get comprehensive company information from LinkedIn company pages. Returns company size, industry, funding, headquarters, and key decision-makers. Ideal for account-based marketing, sales intelligence, and market research."
        features={[
          "Company size, industry, and location",
          "Funding information and growth stage",
          "Technology stack and tools used",
          "Key employees and decision-makers"
        ]}
        icon={Globe}
        code={COMPANY_CODE}
        language="python"
        link="/products/company-enrichment"
        linkText="View Company Enrichment API"
        align="right"
      />

      <FeatureSection 
        badge="Find People API"
        title="Find specific people by name and company"
        description="Quickly locate people in our database by name and optional company. Returns LinkedIn profile URL and unique identifier. Perfect for lead qualification, contact verification, and building prospect lists."
        features={[
          "Search by full name and company",
          "Returns LinkedIn profile URL",
          "Fast lookup with high accuracy",
          "Perfect for lead qualification workflows"
        ]}
        icon={Search}
        code={FIND_CODE}
        language="bash"
        link="/products/find-people"
        linkText="View Find People API"
      />
    </section>
  );
};
