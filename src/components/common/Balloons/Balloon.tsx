import { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Strength } from "@/constants/others";

interface BalloonProps {
  section?: "project" | "strength";
  balloon: Strength;
  idx: number;
  onHoverBallon?: (id: number | null) => void;
  children?: React.ReactNode;
}

export default function Balloon({
  section = "project",
  balloon,
  idx,
  onHoverBallon,
  children,
}: BalloonProps) {
  const MotionComponent = onHoverBallon ? motion.button : motion.div;

  const animConfig = useMemo(
    () => ({
      duration: 1 + Math.random() * 2,
      delay: idx * 0.6,
      xOffset: Math.random() * 10 - 5,
    }),
    [idx]
  );

  const balloonVariants: Variants = {
    hidden: { y: section === "project" ? "-40vh" : "0", opacity: 0 },
    visible: {
      y: "100vh",
      opacity: [0, 1, 1, 0],
      transition: {
        duration: animConfig.duration,
        repeat: Infinity,
        ease: "linear",
        delay: animConfig.delay,
        opacity: {
          times: [0, 0.1, 0.8, 1],
          duration: animConfig.duration,
          repeat: Infinity,
          ease: "linear",
          delay: animConfig.delay,
        },
      },
    },
  };

  const hoverHandlers = useMemo(
    () => ({
      onMouseEnter: () => onHoverBallon?.(balloon.id),
      onMouseLeave: () => onHoverBallon?.(null),
      onFocus: () => onHoverBallon?.(balloon.id),
      onBlur: () => onHoverBallon?.(null),
    }),
    [balloon.id, onHoverBallon]
  );

  return (
    <MotionComponent
      custom={idx}
      style={{
        position: "absolute",
        background: `var(${balloon.color})`,
      }}
      {...(onHoverBallon
        ? { ...hoverHandlers, "aria-label": "호버 시 상세 내용 확인" }
        : { variants: balloonVariants, initial: "hidden", animate: "visible" })}
      className={cn(
        "flex items-center justify-center absolute z-[180] w-[200px] h-[200px] rounded-full text-center shadow-s3 transition-transform -translate-x-1/2 shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.15)] cursor-pointer hover:scale-110 md:w-[250px] md:h-[250px]",
        balloon.x,
        balloon.y
      )}
    >
      {children}
    </MotionComponent>
  );
}
