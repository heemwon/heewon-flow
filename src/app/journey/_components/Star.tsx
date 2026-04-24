import { cn } from "@shared/utils/cn";
import type { Star } from "../_constants/stars";

const STAR_VARIANTS = {
  sm: "w-[4px] h-[4px]",
  md: "w-[6px] h-[6px]",
  lg: "w-[8px] h-[8px]",
};

export default function Star({ top, left, size, delay }: Star) {
  return (
    <div
      aria-hidden="true"
      style={{
        top,
        left,
        animationDelay: `${delay}s`,
      }}
      className={cn(
        "absolute z-[40] rounded-full animate-twinkle transition-all duration-700 shadow-star-glow bg-white dark:shadow-star-glow",
        STAR_VARIANTS[size]
      )}
    />
  );
}
