"use client";

import { useRef, useState } from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";

import SkipNav from "@shared/ui/SkipNav";
import StickyContainer from "./StickyContainer";

export default function IntegratedScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInert, setIsInert] = useState(true);

  // 스크롤 진행도 추적 (0 ~ 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest < 1) {
      setIsInert(false);
    } else {
      setIsInert(true);
    }
  });

  return (
    <section
      aria-labelledby="works"
      inert={isInert}
      ref={containerRef}
      className="relative z-[400] w-full h-[1000vh]"
    >
      <SkipNav href="#others" title="기술 역량 및 프로젝트 목록 건너뛰기" />
      <h2 id="works" className="sr-only">
        기술 역량 및 프로젝트 목록
      </h2>

      <StickyContainer progress={scrollYProgress} />
    </section>
  );
}
