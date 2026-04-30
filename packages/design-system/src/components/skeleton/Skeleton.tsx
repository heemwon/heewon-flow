import { cn } from "@design-system/lib/cn";
import { skeletonBaseClass } from "./skeleton.styles";

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div aria-hidden="true" className={cn(skeletonBaseClass, className)}></div>
  );
}
