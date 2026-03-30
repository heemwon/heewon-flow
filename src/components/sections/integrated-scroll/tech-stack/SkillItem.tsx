"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Skill } from "@/constants/skills";
import HintBubble from "@/components/common/HintBubble";
import ExplosionEffect from "./ExplosionEffect";

export const SkillItem = ({
  name,
  message,
  logo,
  offsetY = "0px",
  isSpecial = false,
}: Skill) => {
  const ref = useRef(null);
  const [hasTriggered, setHasTriggered] = useState<boolean>(false);

  // 캐릭터가 중앙에 있는지 계산
  const isInCenter = useInView(ref, {
    margin: "0px -45% 0px -45%",
  });

  useEffect(() => {
    if (isInCenter && !hasTriggered) {
      setHasTriggered(true);
    } else if (!isInCenter) {
      setHasTriggered(false);
    }
  }, [isInCenter]);

  return (
    <li
      ref={ref}
      style={{
        marginTop: offsetY,
      }}
      className="flex flex-col items-center justify-center shrink-0 relative"
    >
      {message && (
        <HintBubble
          animate={{
            opacity: isInCenter ? 1 : 0.3,
            y: isInCenter ? -10 : 0,
            scale: isInCenter ? 1 : 0.9,
          }}
          message={message}
        />
      )}

      <motion.div
        animate={{
          scale: isInCenter ? 1.3 : 1,
          y: isInCenter ? -15 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex flex-col items-center z-[200] p-[16px] min-w-[96px] rounded-[12px] shadow-s2 bg-gray-light backface-hidden will-change-transform overflow-visible dark:shadow-s3"
      >
        <img
          src={logo}
          alt={name}
          className="object-contain w-[80px] h-[80px]"
        />
        <h4 className="mt-[8px] text-[12px] text-(--brand-primary) uppercase tracking-tighter dark:text-brand-primary">
          {name}
        </h4>
      </motion.div>

      {isSpecial && hasTriggered && <ExplosionEffect />}
    </li>
  );
};
