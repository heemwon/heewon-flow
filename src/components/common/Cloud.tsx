import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Cloud } from "@/constants/clouds";

export default function Cloud({ className }: Cloud) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute z-[50] animate-drift", className)}
    >
      <Image
        src="/images/road/img-road-cloud.png"
        alt="cloud"
        width={160}
        height={120}
        priority
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
