"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { CodeBlock, CodeBlockCode, CodeBlockGroup } from "@/components/ui/code-block";

export const HeroIllustration = () => {
  const [copied, setCopied] = useState(false);

  const code = `{
  "email": "alex@acme.com",
  "enrichment": {
    "name": "Alex Johnson",
    "title": "VP of Engineering",
    "company": "Acme Corp",
    "linkedin": "linkedin.com/in/alexj",
    "location": "San Francisco, CA"
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-12 flex w-full flex-col items-center justify-center gap-8 lg:mt-24 lg:flex-row lg:items-start">
      {/* Left: Code Block */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md shrink-0"
      >
        <div className="w-full">
            <CodeBlock className="shadow-lg">
                <CodeBlockGroup className="border-border border-b py-2 pr-2 pl-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
                            POST
                        </div>
                        <span className="text-muted-foreground truncate text-sm">
                            /v1/enrich/person
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
                <CodeBlockCode 
                    code={code} 
                    language="json" 
                    className="p-4 text-xs lg:text-sm bg-background"
                />
            </CodeBlock>
        </div>
      </motion.div>

      {/* Center: Connector (Desktop only) */}
      <div className="hidden lg:flex flex-col items-center justify-center pt-20 text-muted-foreground/30">
         <ArrowRight className="h-8 w-8 animate-pulse" />
      </div>

      {/* Right: Data Table */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-2xl overflow-hidden rounded-xl border bg-card shadow-lg"
      >
        <div className="border-b bg-muted/50 px-4 py-3 text-sm font-medium text-muted-foreground flex items-center justify-between">
            <span>Enriched Leads</span>
            <div className="flex gap-2">
                <div className="h-2 w-16 rounded-full bg-muted-foreground/20" />
                <div className="h-2 w-16 rounded-full bg-muted-foreground/20" />
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="border-b bg-muted/30 text-muted-foreground">
                    <tr>
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium">Title</th>
                        <th className="px-4 py-3 font-medium">Company</th>
                        <th className="px-4 py-3 font-medium">Email</th>
                        <th className="px-4 py-3 font-medium">LinkedIn</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    <tr className="bg-primary/5">
                        <td className="whitespace-nowrap px-4 py-3 font-medium">Alex Johnson</td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">VP of Engineering</td>
                        <td className="whitespace-nowrap px-4 py-3">
                            <span className="flex items-center gap-2">
                                <div className="h-5 w-5 rounded bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-500 font-bold">A</div>
                                Acme Corp
                            </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <Mail className="h-3 w-3" />
                                alex@acme.com
                            </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                             <span className="flex items-center gap-1.5 text-blue-500">
                                <Linkedin className="h-3 w-3" />
                                /in/alexj
                            </span>
                        </td>
                    </tr>
                     <tr className="opacity-60">
                        <td className="whitespace-nowrap px-4 py-3 font-medium">Sarah Miller</td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">Product Manager</td>
                        <td className="whitespace-nowrap px-4 py-3">
                             <span className="flex items-center gap-2">
                                <div className="h-5 w-5 rounded bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-500 font-bold">T</div>
                                TechFlow
                            </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <Mail className="h-3 w-3" />
                                sarah@techflow.io
                            </span>
                        </td>
                         <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                             <span className="flex items-center gap-1.5 text-blue-500">
                                <Linkedin className="h-3 w-3" />
                                /in/sarahm
                            </span>
                        </td>
                    </tr>
                    <tr className="opacity-40">
                        <td className="whitespace-nowrap px-4 py-3 font-medium">David Chen</td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">Senior Dev</td>
                        <td className="whitespace-nowrap px-4 py-3">
                             <span className="flex items-center gap-2">
                                <div className="h-5 w-5 rounded bg-green-500/20 flex items-center justify-center text-[10px] text-green-500 font-bold">G</div>
                                GrowthAI
                            </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <Mail className="h-3 w-3" />
                                david@growth.ai
                            </span>
                        </td>
                         <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                             <span className="flex items-center gap-1.5 text-blue-500">
                                <Linkedin className="h-3 w-3" />
                                /in/davidc
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </motion.div>
    </div>
  );
};