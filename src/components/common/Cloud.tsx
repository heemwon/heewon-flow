import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Cloud } from "@/constants/clouds";

export default function Cloud({ className }: Cloud) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute z-[50] w-[80px] h-[60px] animate-drift md:w-[160px] md:h-[120px]",
        className
      )}
    >
      <Image
        src="/images/road/img-road-cloud.png"
        alt="cloud"
        fill
        sizes="160px"
        priority
      />
    </div>
  );
}
