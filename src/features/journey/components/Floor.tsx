"use client";

import { motion, MotionProps } from "framer-motion";

import { cn } from "@shared/utils/cn";

interface FloorProps extends MotionProps {
  theme?: "wave" | "road" | "grass";
}

export default function Floor({ theme = "wave", ...props }: FloorProps) {
  return (
    <>
      {theme !== "wave" ? (
        <motion.div
          aria-hidden="true"
          className={cn(
            "absolute bottom-0 left-0 z-[110] w-full h-[120px] bg-floor-road bg-top bg-cover"
          )}
          {...props}
        />
      ) : (
        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-0 z-[100] w-full h-[120px]"
          {...props}
        >
          <div className="absolute -bottom-[15px] left-0 w-full h-full bg-floor-back bg-bottom bg-cover animate-floating [animation-delay:.5s]" />
          <div className="absolute -bottom-[15px] left-0 w-full h-full bg-floor-front bg-bottom bg-cover animate-floating" />
        </motion.div>
      )}
    </>
  );
}
