"use client";

import {
  CodeBlock,
  CodeBlockCode,
  CodeBlockGroup,
} from "@/components/ui/code-block";
import { Button } from "@/components/ui/button";
import { DashedLine } from "@/components/dashed-line";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const API_ENDPOINTS = [
  {
    category: "Prospector",
    endpoints: [
      {
        method: "POST",
        path: "/v1/prospector/search",
        title: "Search Database",
        description: "Search the prospector database with predefined filters.",
        code: {
          curl: `curl -X POST https://api.b2benrich.com/v1/prospector/search \\
  -H "X-Api-Key: your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "org_company_name": "Google",
    "per_job_title": "Software Engineer",
    "org_headquarters_city": "San Francisco",
    "page": 1,
    "include_total": true
  }'`,
          node: `const axios = require('axios');

const response = await axios.post(
  'https://api.b2benrich.com/v1/prospector/search',
  {
    org_company_name: "Google",
    per_job_title: "Software Engineer",
    org_headquarters_city: "San Francisco",
    page: 1,
    include_total: true
  },
  {
    headers: {
      'X-Api-Key': 'your_api_key_here',
      'Content-Type': 'application/json'
    }
  }
);`,
          python: `import requests

response = requests.post(
    'https://api.b2benrich.com/v1/prospector/search',
    headers={
        'X-Api-Key': 'your_api_key_here',
        'Content-Type': 'application/json'
    },
    json={
        'org_company_name': 'Google',
        'per_job_title': 'Software Engineer',
        'org_headquarters_city': 'San Francisco',
        'page': 1,
        'include_total': True
    }
)`,
        },
      },
    ],
  },
  {
    category: "Organization Enrichment",
    endpoints: [
      {
        method: "POST",
        path: "/v1/enrich/cached/org/linkedin-to-org",
        title: "LinkedIn to Organization",
        description: "Enrich organization data from a LinkedIn company URL.",
        code: {
          curl: `curl -X POST https://api.b2benrich.com/v1/enrich/cached/org/linkedin-to-org \\
  -H "X-Api-Key: your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "https://www.linkedin.com/company/google"
  }'`,
          node: `const axios = require('axios');

const response = await axios.post(
  'https://api.b2benrich.com/v1/enrich/cached/org/linkedin-to-org',
  {
    input: "https://www.linkedin.com/company/google"
  },
  {
    headers: {
      'X-Api-Key': 'your_api_key_here',
      'Content-Type': 'application/json'
    }
  }
);`,
          python: `import requests

response = requests.post(
    'https://api.b2benrich.com/v1/enrich/cached/org/linkedin-to-org',
    headers={
        'X-Api-Key': 'your_api_key_here',
        'Content-Type': 'application/json'
    },
    json={
        'input': 'https://www.linkedin.com/company/google'
    }
)`,
        },
      },
      {
        method: "POST",
        path: "/v1/enrich/cached/org/domain-to-org",
        title: "Domain to Organization",
        description: "Enrich organization data from a company domain.",
        code: {
          curl: `curl -X POST https://api.b2benrich.com/v1/enrich/cached/org/domain-to-org \\
  -H "X-Api-Key: your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "google.com"
  }'`,
          node: `const axios = require('axios');

const response = await axios.post(
  'https://api.b2benrich.com/v1/enrich/cached/org/domain-to-org',
  {
    input: "google.com"
  },
  {
    headers: {
      'X-Api-Key': 'your_api_key_here',
      'Content-Type': 'application/json'
    }
  }
);`,
          python: `import requests

response = requests.post(
    'https://api.b2benrich.com/v1/enrich/cached/org/domain-to-org',
    headers={
        'X-Api-Key': 'your_api_key_here',
        'Content-Type': 'application/json'
    },
    json={
        'input': 'google.com'
    }
)`,
        },
      },
    ],
  },
  {
    category: "Person Enrichment",
    endpoints: [
      {
        method: "POST",
        path: "/v1/enrich/cached/person/linkedin-to-person",
        title: "LinkedIn to Person",
        description: "Enrich person data from a LinkedIn profile URL.",
        code: {
          curl: `curl -X POST https://api.b2benrich.com/v1/enrich/cached/person/linkedin-to-person \\
  -H "X-Api-Key: your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "https://www.linkedin.com/in/satyanadella"
  }'`,
          node: `const axios = require('axios');

const response = await axios.post(
  'https://api.b2benrich.com/v1/enrich/cached/person/linkedin-to-person',
  {
    input: "https://www.linkedin.com/in/satyanadella"
  },
  {
    headers: {
      'X-Api-Key': 'your_api_key_here',
      'Content-Type': 'application/json'
    }
  }
);`,
          python: `import requests

response = requests.post(
    'https://api.b2benrich.com/v1/enrich/cached/person/linkedin-to-person',
    headers={
        'X-Api-Key': 'your_api_key_here',
        'Content-Type': 'application/json'
    },
    json={
        'input': 'https://www.linkedin.com/in/satyanadella'
    }
)`,
        },
      },
      {
        method: "POST",
        path: "/v1/enrich/cached/person/email-to-linkedin",
        title: "Email to LinkedIn",
        description: "Get LinkedIn profile URLs from an email address.",
        code: {
          curl: `curl -X POST https://api.b2benrich.com/v1/enrich/cached/person/email-to-linkedin \\
  -H "X-Api-Key: your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "john.doe@gmail.com"
  }'`,
          node: `const axios = require('axios');

const response = await axios.post(
  'https://api.b2benrich.com/v1/enrich/cached/person/email-to-linkedin',
  {
    input: "john.doe@gmail.com"
  },
  {
    headers: {
      'X-Api-Key': 'your_api_key_here',
      'Content-Type': 'application/json'
    }
  }
);`,
          python: `import requests

response = requests.post(
    'https://api.b2benrich.com/v1/enrich/cached/person/email-to-linkedin',
    headers={
        'X-Api-Key': 'your_api_key_here',
        'Content-Type': 'application/json'
    },
    json={
        'input': 'john.doe@gmail.com'
    }
)`,
        },
      },
    ],
  },
];

export function CodeBlockWithHeader() {
  const [copied, setCopied] = useState(false);

  const code = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-[450px]">
      <CodeBlock>
        <CodeBlockGroup className="border-border border-b py-2 pr-2 pl-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
              React
            </div>
            <span className="text-muted-foreground text-sm">counter.tsx</span>
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
        </CodeBlockGroup>
        <CodeBlockCode code={code} language="tsx" />
      </CodeBlock>
    </div>
  );
}

export function ApiSection() {
  const [selectedLanguage, setSelectedLanguage] = useState<
    "curl" | "node" | "python"
  >("curl");

  const languages = [
    { id: "curl", label: "cURL", icon: ">" },
    { id: "node", label: "Node.js", icon: "/languages/node.png" },
    { id: "python", label: "Python", icon: "/languages/python.png" },
  ] as const;

  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        <div className="mb-12 flex items-start justify-between">
          <div className="text-start">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              API Documentation
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Integrate B2B data enrichment into your applications
            </p>
          </div>

          <div className="flex gap-2">
            {languages.map((lang) => (
              <Button
                key={lang.id}
                variant={selectedLanguage === lang.id ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setSelectedLanguage(lang.id as "curl" | "node" | "python")
                }
                className="gap-2"
              >
                {lang.id === "curl" ? (
                  <span className="font-mono text-lg">{lang.icon}</span>
                ) : (
                  <Image
                    src={lang.icon}
                    alt={lang.label}
                    width={16}
                    height={16}
                  />
                )}
                {lang.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {API_ENDPOINTS.map((category, categoryIndex) => (
            <div key={category.category}>
              {categoryIndex > 0 && (
                <DashedLine orientation="horizontal" className="mb-16" />
              )}
              <h3 className="mb-8 text-2xl font-bold">{category.category}</h3>
              <div className="space-y-12">
                {category.endpoints.map((endpoint) => (
                  <div key={endpoint.path}>
                    <div className="flex items-center justify-between gap-8">
                      {/* Left - Title and URL */}
                      <div className="max-w-md flex-1">
                        <h4 className="mb-2 text-xl font-semibold">
                          {endpoint.title}
                        </h4>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {endpoint.description}
                        </p>
                        <code className="text-muted-foreground block text-sm">
                          {endpoint.path}
                        </code>
                      </div>

                      {/* Right - Code Block */}
                      <EndpointCodeBlock
                        endpoint={endpoint}
                        language={selectedLanguage}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EndpointCodeBlock({
  endpoint,
  language,
}: {
  endpoint: any;
  language: "curl" | "node" | "python";
}) {
  const [copied, setCopied] = useState(false);
  const code = endpoint.code[language];
  const languageMap = {
    curl: "bash",
    node: "javascript",
    python: "python",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-xl">
      <CodeBlock>
        <CodeBlockGroup className="border-border border-b py-2 pr-2 pl-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
              {endpoint.method}
            </div>
            <span className="text-muted-foreground truncate text-sm">
              {endpoint.path}
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
        </CodeBlockGroup>
        <CodeBlockCode code={code} language={languageMap[language]} />
      </CodeBlock>
    </div>
  );
}
