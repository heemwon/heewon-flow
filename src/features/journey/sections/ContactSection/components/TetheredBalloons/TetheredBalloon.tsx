import Image from "next/image";
import { motion, MotionProps } from "framer-motion";

import { cn } from "@shared/utils/cn";

interface TetheredBalloonProps extends MotionProps {
  idx: number;
}

const BALLOONS_VARIANT = [
  "top-[40px] left-[2%] md:top-[180px]",
  "top-0 left-[30%] md:top-[120px]",
  "top-[100px] right-[35%] md:top-[140px]",
  "top-[50px] right-0 md:top-[120px]",
];

export default function TetheredBalloon({
  idx,
  ...props
}: TetheredBalloonProps) {
  return (
    <motion.div
      aria-hidden="false"
      className={cn(
        "absolute z-[100] w-[80px] h-[150px] md:w-[130px] md:h-[240px]",
        BALLOONS_VARIANT[idx]
      )}
      {...props}
    >
      <Image
        src={`/images/balloons/img-balloon-tethered-${idx + 1}.png`}
        alt="tetherd balloon"
        sizes="130px"
        fill
        className={cn(
          "absolute backdrop-blur-[2px] opacity-[.9] animate-floating",
          `[animation-delay:.${idx}s]`
        )}
        priority
      />
    </motion.div>
  );
}
