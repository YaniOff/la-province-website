import Image from "next/image";

import emblem from "@/assets/logo/emblem.svg";
import { cn } from "@/lib/utils";

/**
 * Official brand mark. The round emblem (RP monogram) is the provided SVG and
 * carries its own colours, so it reads clearly on both dark and light
 * backgrounds. It is paired with the restaurant name set in the display face.
 *
 * The wordmark SVG (src/assets/logo/wordmark.svg) is kept for light-background
 * placements; swap it in here if the brand lockup ever changes.
 */
export function Logo({
  className,
  showName = true,
  emblemSize = 40,
}: {
  className?: string;
  showName?: boolean;
  emblemSize?: number;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src={emblem}
        alt="Restaurant La Province"
        width={emblemSize}
        height={emblemSize}
        priority
      />
      {showName ? (
        <span className="font-display text-[1.35rem] leading-none tracking-wide">
          La Province
        </span>
      ) : null}
    </span>
  );
}
