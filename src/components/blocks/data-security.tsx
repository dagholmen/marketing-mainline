import { Fingerprint, Shield, Building2 } from "lucide-react";

import { AnimatedIdentityGraph } from "./animated-identity-graph";

export function DataSecurity() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4">
            Serious about <span className="text-primary">Security</span> and{" "}
            <span className="text-primary">Compliance</span>? We are too.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Stacked Cards */}
          <div className="flex flex-col gap-4">
            {/* SOC 2 Type II */}
            <div className="group flex flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:bg-card">
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
            </div>

            {/* GDPR */}
            <div className="group flex flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:bg-card">
              <div className="mb-3 flex items-center gap-3">
                <Shield className="h-8 w-8 text-foreground/80 transition-colors group-hover:text-primary" />
                <h3 className="mb-0">GDPR</h3>
              </div>
              
              <p className="text-muted-foreground text-sm">
                We comply with the EU's General Data Protection Regulation, respecting data privacy rights of European citizens.
              </p>
            </div>

            {/* CCPA */}
            <div className="group flex flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:bg-card">
              <div className="mb-3 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-foreground/80 transition-colors group-hover:text-primary" />
                <h3 className="mb-0">CCPA</h3>
              </div>
              
              <p className="text-muted-foreground text-sm">
                We adhere to the California Consumer Privacy Act, protecting the privacy rights of California residents.
              </p>
            </div>
          </div>

          {/* Right Column - Animated Identity Graph */}
          <div className="flex h-full items-center justify-center">
            <AnimatedIdentityGraph />
          </div>
        </div>
      </div>
    </section>
  );
}
