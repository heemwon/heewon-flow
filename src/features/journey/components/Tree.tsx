"use client";

import Image from "next/image";

import { motion, MotionProps } from "framer-motion";

import { cn } from "@shared/utils/cn";
import type { Tree } from "../constants/trees";

type TreeProps = Tree & MotionProps;

const SIZE_VARIANTS = {
  sm: "w-[120px] h-[150px] lg:w-[150px] lg:h-[190px]",
  md: "w-[150px] h-[180px] lg:w-[200px] lg:h-[250px]",
  lg: "w-[200px] h-[260px] lg:w-[240px] lg:h-[300px]",
  xl: "md:w-[280px] md:h-[350px]",
} as const;

const getTreeVariant = (direction: string, className: string) => {
  const seed = `${direction}-${className}`;

  return (Array.from(seed).reduce((sum, char) => sum + char.charCodeAt(0), 0) %
    3) + 1;
};

export default function Tree({
  direction,
  size,
  className,
  priority = false,
  ...props
}: TreeProps) {
  const variant = getTreeVariant(direction, className);

  const zIndex = 82 + variant * 3;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        zIndex,
        animationDelay: `${variant}s`,
      }}
      {...props}
      className={cn(SIZE_VARIANTS[size], zIndex, className)}
    >
      <Image
        src={`/images/trees/img-tree-${direction}-${variant}.png`}
        alt=""
        fill
        sizes="280px"
        priority={priority}
      />
    </motion.div>
  );
}
