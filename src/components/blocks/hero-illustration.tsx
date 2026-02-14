"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Database, Search, User, Mail, Building2, Terminal, List } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { CodeBlock, CodeBlockCode, CodeBlockGroup } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

// --- Sample Data Definitions ---

const ENRICH_PERSON_SAMPLE = {
  id: "person",
  label: "Enrich Person",
  icon: User,
  method: "POST",
  endpoint: "/v1/enrich/person",
  code: `{
  "person_id": "p_abc123xyz",
  "status": "success",
  "data": {
    "id": "p_abc123xyz",
    "first_name": "Alex",
    "last_name": "Johnson",
    "full_name": "Alex Jordan Johnson",
    "job_title": "VP of Engineering",
    "job_level": "Executive",
    "job_function": "Engineering",
    "email_address": "alex.johnson@acme.com",
    "linkedin_url": "linkedin.com/in/alexjjohnson",
    "job_company_name": "Acme Corp",
    "job_company_website": "acme.com",
    "location_name": "San Francisco, CA"
  }
}`
};

const ENRICH_COMPANY_SAMPLE = {
  id: "company",
  label: "Enrich Company",
  icon: Building2,
  method: "POST",
  endpoint: "/v1/enrich/company",
  code: `{
  "status": "success",
  "company_id": "c_acme456xyz",
  "data": {
    "companyName": "Acme Corporation",
    "domain": "acme.com",
    "website": "https://www.acme.com",
    "headquartersCity": "San Francisco",
    "employeeCountRange": "501-1000",
    "revenueRange": "$50M-$100M",
    "industry": "Computer Software",
    "founded": 2015,
    "description": "Leading provider of enterprise SaaS solutions."
  }
}`
};

const SEARCH_DB_SAMPLE = {
  id: "search",
  label: "Search Database",
  icon: Search,
  method: "POST",
  endpoint: "/v1/prospector/search",
  code: `{
  "filters": {
    "job_title": ["VP of Engineering"],
    "location": ["San Francisco, CA"],
    "industry": ["Software"]
  },
  "results": [
    { "name": "Alex Johnson", "company": "Acme Corp" },
    { "name": "Sarah Miller", "company": "TechFlow" }
  ]
}`
};

const VALIDATE_EMAIL_SAMPLE = {
  id: "validate",
  label: "Validate Email",
  icon: Mail,
  method: "POST",
  endpoint: "/v1/validate/email",
  code: `{
  "status": "success",
  "data": {
    "email": "alex.johnson@acme.com",
    "is_valid": true,
    "is_disposable": false,
    "is_role_account": false,
    "smtp_check": "valid",
    "mx_found": true,
    "score": 0.95
  }
}`
};

const PEOPLE_SEARCH_SAMPLE = {
    id: "people_search",
    label: "People Search",
    icon: User,
    method: "POST",
    endpoint: "/v1/prospector/search/name-title",
    code: `{
    "first_name": "John",
    "last_name": "Doe",
    "job_title": "Software Engineer",
    "results": [
        {
            "full_name": "John Doe",
            "title": "Software Engineer",
            "company": "Tech Corp",
            "linkedin": "linkedin.com/in/johndoe"
        }
    ]
}`
};

const COMPANY_SEARCH_SAMPLE = {
    id: "company_search",
    label: "Company Search",
    icon: Search,
    method: "POST",
    endpoint: "/v1/prospector/search",
    code: `{
    "filters": {
        "industry": ["Technology", "SaaS"],
        "headquarters_location": ["United States"],
        "employee_count_min": 100
    },
    "results": [
        {
            "company_name": "Tech Corp",
            "domain": "techcorp.com",
            "industry": "Technology",
            "location": "San Francisco, CA"
        },
        {
            "company_name": "SaaS Inc",
            "domain": "saasinc.io",
            "industry": "SaaS",
            "location": "New York, NY"
        }
    ]
}`
};

const PROSPECTOR_SAMPLE = {
    id: "prospector",
    label: "Prospector",
    icon: Database,
    method: "POST",
    endpoint: "/v1/prospector/search",
    code: `{
    "filters": {
        "industry": ["SaaS", "Fintech"],
        "revenue_min": 1000000,
        "employee_count_min": 50
    },
    "matches": 1250,
    "sample": [
        { "company": "FinTech Co", "domain": "fintech.co" },
        { "company": "SaaS Inc", "domain": "saas.inc" }
    ]
}`
};


// --- Presets for specific pages ---

export type IllustrationPreset = 
  | "default" 
  | "people-enrichment" 
  | "company-enrichment" 
  | "company-search"
  | "validation" 
  | "people-search" 
  | "prospector"
  | "data-extraction";

interface HeroIllustrationProps {
  preset?: IllustrationPreset;
}

export const HeroIllustration = ({ preset = "default" }: HeroIllustrationProps) => {
  const { resolvedTheme } = useTheme();

  // Determine which samples to show based on preset
  let samples = [ENRICH_PERSON_SAMPLE, ENRICH_COMPANY_SAMPLE, SEARCH_DB_SAMPLE, VALIDATE_EMAIL_SAMPLE];

  if (preset === "people-enrichment") {
    samples = [ENRICH_PERSON_SAMPLE, PEOPLE_SEARCH_SAMPLE];
  } else if (preset === "company-enrichment") {
    samples = [ENRICH_COMPANY_SAMPLE, SEARCH_DB_SAMPLE];
  } else if (preset === "company-search") {
    samples = [COMPANY_SEARCH_SAMPLE, ENRICH_COMPANY_SAMPLE];
  } else if (preset === "validation") {
    samples = [VALIDATE_EMAIL_SAMPLE];
  } else if (preset === "people-search") {
    samples = [PEOPLE_SEARCH_SAMPLE, SEARCH_DB_SAMPLE];
  } else if (preset === "prospector") {
    samples = [PROSPECTOR_SAMPLE, SEARCH_DB_SAMPLE];
  } else if (preset === "data-extraction") {
      samples = [SEARCH_DB_SAMPLE, ENRICH_PERSON_SAMPLE];
  }

  const [activeTab, setActiveTab] = useState(samples[0].id);
  const [copied, setCopied] = useState(false);
  
  // Ensure active tab is valid when samples change
  useEffect(() => {
    if (!samples.find(s => s.id === activeTab)) {
        setActiveTab(samples[0].id);
    }
  }, [preset, samples, activeTab]);

  const activeSample = samples.find(s => s.id === activeTab) || samples[0];
  const [displayedCode, setDisplayedCode] = useState("");

  // Typing effect
  useEffect(() => {
    let index = 0;
    const targetCode = activeSample.code;
    setDisplayedCode("");
    
    // Reset immediately for smoother transition
    setDisplayedCode(""); 

    const intervalId = setInterval(() => {
      setDisplayedCode(targetCode.slice(0, index));
      index += 5; // Speed
      if (index > targetCode.length) {
        setDisplayedCode(targetCode);
        clearInterval(intervalId);
      }
    }, 5);

    return () => clearInterval(intervalId);
  }, [activeTab, activeSample.code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-12 flex w-full flex-col items-center justify-center gap-8 lg:mt-12 lg:flex-row lg:items-start">
      {/* Tabs + Code Block */}
      <div className="flex w-full max-w-2xl flex-col gap-4 lg:flex-row lg:items-start">
        {/* Tabs - Only show if more than 1 sample */}
        {samples.length > 1 && (
            <div className="flex shrink-0 flex-col gap-2">
                <div className="grid grid-cols-2 gap-2 p-1 lg:flex lg:flex-col lg:p-0">
                {samples.map((sample) => {
                    const Icon = sample.icon;
                    return (
                    <button
                        key={sample.id}
                        onClick={() => setActiveTab(sample.id)}
                        className={cn(
                        "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-all hover:bg-muted",
                        activeTab === sample.id 
                            ? "bg-muted border-primary/20 text-primary" 
                            : "bg-background border-transparent text-muted-foreground hover:text-foreground"
                        )}
                    >
                        <Icon className="h-4 w-4" />
                        <span className="whitespace-nowrap">{sample.label}</span>
                    </button>
                    );
                })}
                </div>
                {/* Show "And 20+ others" text for all presets with multiple tabs, or even single tabs if we want to imply more */}
                <p className="hidden text-xs text-muted-foreground/70 lg:block lg:pl-3 mt-2">
                    And 20+ other solutions
                </p>
            </div>
        )}

        {/* Code Block */}
        <motion.div 
          key={activeTab} // Animate on tab change
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full min-w-0 flex-1"
        >
          <div className="w-full">
              <CodeBlock className="shadow-lg">
                  <div className="border-border border-b py-2 pr-2 pl-4 flex items-center justify-between bg-card">
                      <div className="flex items-center gap-2">
                          <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
                              {activeSample.method}
                          </div>
                          <span className="text-muted-foreground truncate text-sm font-mono">
                              {activeSample.endpoint}
                          </span>
                      </div>
                      <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={handleCopy}
                      >
                          {copied ? (
                              <Check className="h-4 w-4 text-green-500" />
                          ) : (
                              <Copy className="h-4 w-4" />
                          )}
                      </Button>
                  </div>
                  <div className="h-[320px] overflow-y-auto bg-background/50 backdrop-blur-sm">
                    <CodeBlockCode 
                        code={displayedCode} 
                        language="json"
                        theme={resolvedTheme === "dark" ? "github-dark" : "github-light"}
                        className="p-4 text-xs lg:text-sm bg-transparent"
                    />
                  </div>
              </CodeBlock>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
