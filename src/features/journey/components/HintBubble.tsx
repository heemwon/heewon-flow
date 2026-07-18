"use client";

import { motion, MotionProps } from "framer-motion";

import { cn } from "@shared/utils/cn";

interface HintBubbleProps extends MotionProps {
  message: string;
  className?: string;
}

export default function HintBubble({
  message,
  className,
  ...props
}: HintBubbleProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "absolute -top-[96px] left-1/2 z-[200] p-[8px_20px] bg-white rounded-[6px] shadow-s2 border border-brand-primary whitespace-nowrap -translate-x-1/2",
        className
      )}
      {...props}
    >
      <span className="relative z-0 text-body-2 leading-body-2 text-brand-primary before:content[''] before:absolute before:-bottom-[19px] before:left-1/2 before:z-1 before:-translate-x-1/2 before:w-[16px] before:h-[16px] before:bg-white before:dark:bg-gray-dark before:rotate-45 before:border-r before:border-b before:border-brand-primary">
        {message}
      </span>
    </motion.div>
  );
}
