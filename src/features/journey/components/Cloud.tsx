import Image from "next/image";

import { cn } from "@shared/utils/cn";
import type { Cloud } from "../constants/clouds";

export default function Cloud({ className, priority = false }: Cloud) {
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
        alt=""
        fill
        sizes="160px"
        priority={priority}
      />
    </div>
  );
}
