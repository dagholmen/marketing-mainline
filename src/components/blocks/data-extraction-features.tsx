"use client";

import { useState } from "react";
import { Check, Copy, Terminal, Globe, Search, Users, type LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { CodeBlockCode } from "@/components/ui/code-block";
import { ArrowRight } from "lucide-react";

const PEOPLE_SEARCH_CODE = `// Search for people using Sales Navigator query
const query = '(keywords:"Software Engineer")';
const response = await fetch(
  \`https://api.b2benrich.com/v1/people/search?query=\${encodeURIComponent(query)}&page_size=25\`,
  {
    method: 'GET',
    headers: {
      'X-API-Key': 'YOUR_API_KEY'
    }
  }
);

const results = await response.json();
// Returns: array of matching profiles`;

const COMPANY_SEARCH_CODE = `# Search companies using Sales Navigator query
import requests

response = requests.get(
    'https://api.b2benrich.com/v1/companies/search',
    params={
        'query': '(keywords:"fintech")',
        'page_size': 25
    },
    headers={'X-API-Key': 'YOUR_API_KEY'}
)

companies = response.json()
# Returns: matching companies with firmographics`;

const EMPLOYEE_LIST_CODE = `# Get employees of a company
curl -X GET \\
  "https://api.b2benrich.com/v1/companies/comp_123/employees?page_size=10" \\
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

export const DataExtractionFeatures = () => {
  return (
    <section className="container">
      <FeatureSection 
        badge="People Search API"
        title="Extract B2B data at scale to power your product features"
        description="Query people and company data through our RESTful API. Filter by job title, industry, location, company size, and more. Get real-time results to build your product features faster."
        features={[
          "Query 500M+ professional profiles via API",
          "Filter by job title, company, location, and more",
          "Access 50M+ companies with firmographics",
          "99% uptime, <500ms average response time"
        ]}
        icon={Search}
        code={PEOPLE_SEARCH_CODE}
        language="javascript"
        link="/products/people-search"
        linkText="View People Search API"
      />

      <FeatureSection 
        badge="Company Search API"
        title="Extract company and people data in real-time"
        description="Query comprehensive company and people data through our API. Get company firmographics, employee lists, insights, funding information, and professional profiles."
        features={[
          "Company technology stack insights",
          "Hiring trends and growth indicators",
          "Funding announcements and news",
          "Company size and industry data"
        ]}
        icon={Globe}
        code={COMPANY_SEARCH_CODE}
        language="python"
        link="/products/company-search"
        linkText="View Company Search API"
        align="right"
      />

      <FeatureSection 
        badge="Employee List API"
        title="Power your product with real-time B2B data"
        description="Extract data with our straightforward RESTful API. No complex setup or maintenance required. Call our endpoints directly from your applications to get the data you need. Ship in hours, not weeks."
        features={[
          "RESTful API for easy integration",
          "Automatic data validation",
          "Consistent response format",
          "Comprehensive API documentation"
        ]}
        icon={Users}
        code={EMPLOYEE_LIST_CODE}
        language="bash"
        link="/products/employee-list"
        linkText="View Employee List API"
      />
    </section>
  );
};
