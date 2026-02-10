"use client";

import { useState } from "react";

import { Check, ArrowRight, Terminal, Globe, Shield, Search, Copy, Fingerprint, Building2 } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { CodeBlockCode } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

const PERSON_ENRICHMENT_CODE = `curl -X POST https://api.b2benrich.com/v1/enrich/cached/person/linkedin-to-person \\
  -H "X-Api-Key: your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "https://www.linkedin.com/in/example"
  }'`;

const COMPANY_ENRICHMENT_CODE = `curl -X POST https://api.b2benrich.com/v1/enrich/cached/org/domain-to-org \\
  -H "X-Api-Key: your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "example.com"
  }'`;

const PROSPECTOR_CODE = `curl -X POST https://api.b2benrich.com/v1/prospector/search \\
  -H "X-Api-Key: your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "org_company_name": "Google",
    "per_job_title": "Software Engineer",
    "org_headquarters_city": "San Francisco",
    "page": 1
  }'`;

const PERSON_RESPONSE = `{
  "person_id": "per_abc123",
  "status": "success",
  "data": {
    "full_name": "John Doe",
    "first_name": "John",
    "last_name": "Doe",
    "linkedin_url": "https://www.linkedin.com/in/example",
    "job_title": "Senior Product Manager",
    "job_org_linkedin_url": "https://www.linkedin.com/company/example",
    "linkedin_headline": "Product Leader | Tech Enthusiast",
    "city": "San Francisco",
    "state_name": "California",
    "country_name": "United States",
    "email_address": "john@example.com",
    "cell_phone": "+1-415-555-0123"
  }
}`;

const COMPANY_RESPONSE = `{
  "status": "success",
  "org_id": "org_xyz789",
  "data": {
    "company_name": "Example Corp",
    "domain": "example.com",
    "website": "https://www.example.com",
    "linkedin_url": "linkedin.com/company/example",
    "headquarters_city": "San Francisco",
    "headquarters_state_name": "California",
    "headquarters_country_name": "United States",
    "employee_count_range": "501-1000",
    "revenue_range": "$50M-$100M",
    "industry_linkedin": "Computer Software",
    "about_us": "Leading provider of enterprise software solutions",
    "founded": 2015
  }
}`;

const PROSPECTOR_RESPONSE = `{
  "status": "success",
  "total": 847,
  "page": 1,
  "results": [
    {
      "person_id": "per_abc123",
      "full_name": "Sarah Chen",
      "job_title": "Software Engineer",
      "company_name": "Google",
      "city": "San Francisco",
      "linkedin_url": "linkedin.com/in/sarahchen"
    },
    {
      "person_id": "per_def456",
      "full_name": "Michael Johnson",
      "job_title": "Senior Software Engineer",
      "company_name": "Google",
      "city": "San Francisco",
      "linkedin_url": "linkedin.com/in/mjohnson"
    }
  ]
}`;

export function ApiSection() {
  const [activeTab, setActiveTab] = useState<"person" | "company" | "prospector">("person");
  const [copiedRequest, setCopiedRequest] = useState(false);
  const [copiedResponse, setCopiedResponse] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleCopyRequest = () => {
    const code = activeTab === "person" 
      ? PERSON_ENRICHMENT_CODE 
      : activeTab === "company" 
        ? COMPANY_ENRICHMENT_CODE 
        : PROSPECTOR_CODE;
    navigator.clipboard.writeText(code);
    setCopiedRequest(true);
    setTimeout(() => setCopiedRequest(false), 2000);
  };

  const handleCopyResponse = () => {
    const code = activeTab === "person" 
      ? PERSON_RESPONSE 
      : activeTab === "company" 
        ? COMPANY_RESPONSE 
        : PROSPECTOR_RESPONSE;
    navigator.clipboard.writeText(code);
    setCopiedResponse(true);
    setTimeout(() => setCopiedResponse(false), 2000);
  };

  return (
    <section className="pt-20 lg:pt-24 bg-background">
      <div className="container">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-start max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Developer-First API
            </h2>
            <p className="text-muted-foreground mt-4 text-lg text-balance">
              Integrate enterprise-grade B2B enrichment into your stack with a few lines of code.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <a href="https://docs.b2benrich.com/api/" target="_blank" rel="noreferrer">
              Read the Docs <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Feature Description & Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex gap-2 p-1 bg-background border rounded-lg w-fit">
              <button
                onClick={() => setActiveTab("person")}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  activeTab === "person" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Person Enrichment
              </button>
              <button
                onClick={() => setActiveTab("company")}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  activeTab === "company" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Company Enrichment
              </button>
              <button
                onClick={() => setActiveTab("prospector")}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  activeTab === "prospector" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Prospector
              </button>
            </div>

            <div className="space-y-6">
              {activeTab === "person" ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                  <div className="space-y-4">
                    <h3>Enrich People</h3>
                    <p className="text-muted-foreground">
                      Turn incomplete contact info into full professional profiles. 
                      Perfect for lead scoring, personalization, and recruitment.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Terminal className="size-4 text-primary" />
                      </div>
                      <span className="font-medium">LinkedIn URL → Person Data</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Terminal className="size-4 text-primary" />
                      </div>
                      <span className="font-medium">Email → LinkedIn Profile</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Terminal className="size-4 text-primary" />
                      </div>
                      <span className="font-medium">Phone → LinkedIn Profile</span>
                    </div>
                  </div>
                </div>
              ) : activeTab === "company" ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                  <div className="space-y-4">
                    <h3>Enrich Companies</h3>
                    <p className="text-muted-foreground">
                      Get detailed firmographic data from domains or LinkedIn URLs.
                      Ideal for account segmentation and territory planning.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Globe className="size-4 text-primary" />
                      </div>
                      <span className="font-medium">Domain → Organization Data</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Globe className="size-4 text-primary" />
                      </div>
                      <span className="font-medium">LinkedIn URL → Organization Data</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                  <div className="space-y-4">
                    <h3>Prospector Search</h3>
                    <p className="text-muted-foreground">
                      Find your ideal customers with precision filters. Search by job title, company, location, industry, and tech stack.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Search className="size-4 text-primary" />
                      </div>
                      <span className="font-medium">Job Title & Company Search</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Search className="size-4 text-primary" />
                      </div>
                      <span className="font-medium">Location & Industry Filters</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Search className="size-4 text-primary" />
                      </div>
                      <span className="font-medium">Technographic Search</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t">
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 text-primary" />
                    RESTful JSON API
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 text-primary" />
                    Cached Responses
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 text-primary" />
                    Bulk Operations
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 text-primary" />
                    Simple Auth
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Code Blocks */}
          <div className="lg:col-span-7 space-y-4">
            {/* Request Code Block */}
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between gap-2 px-4 py-2 border-b bg-card">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-sky-600/10 text-sky-600 dark:bg-sky-600/20">
                    POST
                  </span>
                  <span className="text-xs text-muted-foreground truncate font-mono">
                    {activeTab === "person" 
                      ? "/v1/enrich/cached/person/linkedin-to-person"
                      : activeTab === "company"
                        ? "/v1/enrich/cached/org/domain-to-org"
                        : "/v1/prospector/search"
                    }
                  </span>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="relative group">
                <div className="overflow-auto max-h-[240px] bg-background">
                  <CodeBlockCode 
                    code={
                      activeTab === "person" 
                        ? PERSON_ENRICHMENT_CODE 
                        : activeTab === "company" 
                          ? COMPANY_ENRICHMENT_CODE 
                          : PROSPECTOR_CODE
                    }
                    language="bash"
                    theme={resolvedTheme === "dark" ? "github-dark" : "github-light"}
                    className="text-xs"
                  />
                </div>
                <span className="absolute top-2 right-3 text-[11px] font-mono text-muted-foreground/60 transition-opacity group-hover:opacity-0 pointer-events-none">
                  shell
                </span>
                <button
                  onClick={handleCopyRequest}
                  className="absolute top-2 right-2 size-7 p-1.5 opacity-0 group-hover:opacity-100 inline-flex items-center justify-center rounded-md border bg-background shadow-sm hover:bg-accent transition-all"
                >
                  {copiedRequest ? (
                    <Check className="size-3.5 text-green-600" />
                  ) : (
                    <Copy className="size-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Response Code Block */}
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between gap-2 px-4 py-2 border-b bg-card">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-green-600/10 text-green-600 dark:bg-green-600/20">
                    200
                  </span>
                  <span className="text-xs text-muted-foreground truncate">
                    Example Response
                  </span>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="relative group">
                <div className="overflow-auto max-h-[240px] bg-background">
                  <CodeBlockCode 
                    code={
                      activeTab === "person" 
                        ? PERSON_RESPONSE 
                        : activeTab === "company" 
                          ? COMPANY_RESPONSE 
                          : PROSPECTOR_RESPONSE
                    }
                    language="json"
                    theme={resolvedTheme === "dark" ? "github-dark" : "github-light"}
                    className="text-xs"
                  />
                </div>
                <span className="absolute top-2 right-3 text-[11px] font-mono text-muted-foreground/60 transition-opacity group-hover:opacity-0 pointer-events-none">
                  json
                </span>
                <button
                  onClick={handleCopyResponse}
                  className="absolute top-2 right-2 size-7 p-1.5 opacity-0 group-hover:opacity-100 inline-flex items-center justify-center rounded-md border bg-background shadow-sm hover:bg-accent transition-all"
                >
                  {copiedResponse ? (
                    <Check className="size-3.5 text-green-600" />
                  ) : (
                    <Copy className="size-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance Cards */}
        {/* <div className="pt-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Secure & Compliant Data
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {/* SOC 2 Type II */}
            {/* <div className="group flex flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:bg-card">
              <div className="mb-3 flex items-center gap-3">
                <Fingerprint className="h-8 w-8 text-foreground/80 transition-colors group-hover:text-primary" />
                <h3 className="mb-0">SOC 2 Type II</h3>
              </div>
              
              <p className="text-muted-foreground text-sm">
                We are SOC 2 Type II compliant, validating our security controls and data protection practices.{" "}
                <a href="#" className="font-medium text-primary hover:underline">
                  Request our SOC 2
                </a>
              </p>
            </div> */}

            {/* GDPR */}
            {/* <div className="group flex flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:bg-card">
              <div className="mb-3 flex items-center gap-3">
                <Shield className="h-8 w-8 text-foreground/80 transition-colors group-hover:text-primary" />
                <h3 className="mb-0">GDPR</h3>
              </div>
              
              <p className="text-muted-foreground text-sm">
                We comply with the EU's General Data Protection Regulation, respecting data privacy rights of European citizens.
              </p>
            </div> */}

            {/* CCPA */}
            {/* <div className="group flex flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:bg-card">
              <div className="mb-3 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-foreground/80 transition-colors group-hover:text-primary" />
                <h3 className="mb-0">CCPA</h3>
              </div>
              
              <p className="text-muted-foreground text-sm">
                We adhere to the California Consumer Privacy Act, protecting the privacy rights of California residents.
              </p>
            </div>
          </div>
        </div> */}

        {/* Full API Documentation Iframe */}
        <div className="pt-10">
          <div className="w-full h-[533px] border border-border rounded-lg overflow-hidden shadow-lg bg-background relative group">
            <iframe
              src="https://docs.b2benrich.com/api/"
              className="w-full h-full pointer-events-none transition-all duration-300 group-hover:blur-sm"
              title="B2B Enrich API Documentation"
            />
            
            {/* Overlay Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/20 backdrop-blur-[2px]">
              <Button asChild size="lg" className="shadow-lg">
                <a href="https://docs.b2benrich.com/api/" target="_blank" rel="noreferrer">
                  Open Docs in New Window <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>
          {/* Mobile-only fallback button since hover doesn't work well on touch devices */}
          <div className="flex justify-center mt-6 lg:hidden">
            <Button asChild size="lg">
              <a href="https://docs.b2benrich.com/api/" target="_blank" rel="noreferrer">
                Open Docs in New Window <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
