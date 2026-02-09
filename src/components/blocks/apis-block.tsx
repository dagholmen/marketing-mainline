"use client";

import { useState } from "react";
import { Check, ArrowRight, Terminal, Globe, Shield, Zap, Search, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock, CodeBlockCode, CodeBlockGroup } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

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
    <section className="py-20 lg:py-24 bg-background">
      <div className="container">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-start max-w-2xl">
            <h2>
              Developer-First API
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
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
          <div className="lg:col-span-7 space-y-6">
            {/* Request Code Block */}
            <div className="w-full">
              <CodeBlock className="shadow-lg">
                <CodeBlockGroup className="border-border border-b py-2 pr-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
                      POST
                    </div>
                    <span className="text-muted-foreground truncate text-sm">
                      {activeTab === "person" 
                        ? "/v1/enrich/cached/person/linkedin-to-person"
                        : activeTab === "company"
                          ? "/v1/enrich/cached/org/domain-to-org"
                          : "/v1/prospector/search"
                      }
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={handleCopyRequest}
                  >
                    {copiedRequest ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </CodeBlockGroup>
                <div className="max-h-[300px] overflow-y-auto bg-white dark:bg-background">
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
                    className="p-4 text-xs lg:text-sm bg-transparent"
                  />
                </div>
              </CodeBlock>
            </div>

            {/* Response Code Block */}
            <div className="w-full">
              <CodeBlock className="shadow-lg">
                <CodeBlockGroup className="border-border border-b py-2 pr-2 pl-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500/10 text-green-600 dark:text-green-400 rounded px-2 py-1 text-xs font-medium">
                      200 OK
                    </div>
                    <span className="text-muted-foreground truncate text-sm">
                      Example Response
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={handleCopyResponse}
                  >
                    {copiedResponse ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </CodeBlockGroup>
                <div className="max-h-[300px] overflow-y-auto bg-white dark:bg-background">
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
                    className="p-4 text-xs lg:text-sm bg-transparent"
                  />
                </div>
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Full API Documentation Iframe */}
        <div className="pt-16">
          <div className="w-full h-[800px] border border-border rounded-lg overflow-hidden shadow-lg bg-background">
            <iframe
              src="https://docs.b2benrich.com/api/"
              className="w-full h-full"
              title="B2B Enrich API Documentation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
