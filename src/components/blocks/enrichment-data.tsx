import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

const items = [
  "Partnership Discovery",
  "Customer Intelligence",
  "RevOps Strategy",
  "Data Analytics",
  "Lead Generation",
  "Business Intelligence",
  "GTM Platform",
  "AI Agent",
  "Sales Team",
  "Investment Research",
  "Recruiting Platform",
  "CRM System",
];

export const EnrichmentData = () => {
  return (
    <section className="py-0">
      <div className="container text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          Enrich Data for Your
        </h2>
      </div>

      <div className="relative flex flex-col gap-3 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background z-20"></div>

        <Marquee pauseOnHover autoFill className="[--duration:20s] py-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="mx-2 flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-2 shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-foreground/70" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          autoFill
          direction="right"
          className="[--duration:20s] py-2"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="mx-2 flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-2 shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-foreground/70" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
