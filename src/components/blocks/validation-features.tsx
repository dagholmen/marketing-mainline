"use client";

import { useState } from "react";
import { Check, Copy, Mail, Phone, type LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { CodeBlockCode } from "@/components/ui/code-block";
import { ArrowRight } from "lucide-react";

const VALIDATE_EMAIL_CODE = `curl --request POST \\
  --url https://api.b2benrich.com/v1/validate/email \\
  --header 'Content-Type: application/json' \\
  --header 'X-Api-Key: YOUR_API_KEY' \\
  --data '{
  "email": "john.doe@gmail.com"
}'`;

const VALIDATE_PHONE_CODE = `curl --request POST \\
  --url https://api.b2benrich.com/v1/validate/phone \\
  --header 'Content-Type: application/json' \\
  --header 'X-Api-Key: YOUR_API_KEY' \\
  --data '{
  "phone": "+14159929960"
}'`;

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
                POST
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

export const ValidationFeatures = () => {
  return (
    <section className="container">
      <FeatureSection 
        badge="Email Validation"
        title="Validate email addresses for deliverability and risk"
        description="Check deliverability, quality, risk, sender details, domain info, and breach history for any email address. Ensure your contact lists are clean and reliable."
        features={[
          "Verify SMTP and MX records",
          "Detect disposable, role, and free emails",
          "Check domain age and risk status",
          "Identify breached email addresses"
        ]}
        icon={Mail}
        code={VALIDATE_EMAIL_CODE}
        language="bash"
        link="https://docs.b2benrich.com/api/validation#validate-an-email-address-1-credit"
        linkText="View Documentation"
      />

      <FeatureSection 
        badge="Phone Validation"
        title="Validate phone numbers for carrier and location data"
        description="Get carrier details, location, line type (mobile/landline/VoIP), and risk analysis for phone numbers globally. Improve SMS delivery and prevent fraud."
        features={[
          "Identify carrier and line type",
          "Check validity and active status",
          "Detect VoIP and disposable numbers",
          "Get location and timezone data"
        ]}
        icon={Phone}
        code={VALIDATE_PHONE_CODE}
        language="bash"
        link="https://docs.b2benrich.com/api/validation#validate-a-phone-number-1-credit"
        linkText="View Documentation"
        align="right"
      />
    </section>
  );
};
