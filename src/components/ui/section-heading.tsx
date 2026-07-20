import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={cn(
              "text-xs font-medium uppercase tracking-[0.35em]",
              light ? "text-gold-light" : "text-gold",
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-balance text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1]",
            light ? "text-ivory" : "text-navy",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "max-w-2xl text-balance text-base md:text-lg leading-relaxed",
              light ? "text-ivory/70" : "text-navy/70",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
