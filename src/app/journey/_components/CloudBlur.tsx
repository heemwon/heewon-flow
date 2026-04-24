import { cn } from "@shared/utils/cn";
import type { Cloud } from "../_constants/clouds";

export default function CloudBlur({ className }: Cloud) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute z-[50] w-32 h-12 rounded-full blur-[8px] bg-white opacity-[.6] animate-drift dark:opacity-[.1]",
        className
      )}
    />
  );
}
