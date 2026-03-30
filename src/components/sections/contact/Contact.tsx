"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StickyContainer from "./StickyContainer";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 스크롤 진행도 추적 (0 ~ 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["var(--bg-city)", "var(--bg-city)", "var(--bg-contact)"]
  );

  return (
    <motion.section
      ref={containerRef}
      id="contact"
      aria-labelledby="contactTitle"
      className="relative w-full h-[400vh]"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <h2 id="contactTitle" className="sr-only">
        연락처 정보
      </h2>
      <StickyContainer progress={scrollYProgress} />
    </motion.section>
  );
}
