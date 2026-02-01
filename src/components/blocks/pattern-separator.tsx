import { StripedPattern } from "@/components/ui/striped-pattern";
import { cn } from "@/lib/utils";

type PatternSeparatorProps = {
  className?: string;
  heightClassName?: string;
};

export function PatternSeparator({
  className,
  heightClassName = "h-[300px]",
}: PatternSeparatorProps) {
  return (
    <section
      aria-hidden="true"
      className={cn(
        "border-border relative w-full overflow-hidden border-y",
        heightClassName,
        className,
      )}
    >
      {/* Base fill */}
      <div className="bg-background absolute inset-0" />

      {/* Soft vignette + depth */}
      <div className="via-background/40 absolute inset-0 bg-linear-to-b from-transparent to-transparent" />
      <div className="to-background/70 absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent" />

      {/* Pattern overlay (diagonal lines) */}
      <div className="text-foreground/20 absolute inset-0">
        <StripedPattern direction="right" width={12} height={12} />
      </div>

      {/* Fade edges so it feels intentional */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(120% 120% at 50% 50%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(120% 120% at 50% 50%, black 60%, transparent 100%)",
        }}
      />

      {/* Highlight line */}
      <div className="bg-border/40 pointer-events-none absolute inset-x-0 top-0 h-px" />
      <div className="bg-border/40 pointer-events-none absolute inset-x-0 bottom-0 h-px" />
    </section>
  );
}
