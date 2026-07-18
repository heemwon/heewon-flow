"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import SkipNav from "@shared/ui/SkipNav";
import ClientOnly from "@shared/ui/ClientOnly";
import Character from "./components/Character";
import Strengths from "./components/Strengths";

export default function OthersSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const onHoverBallon = (id: number | null) => {
    setHoveredId(id);
  };

  return (
    <section
      id="others"
      aria-labelledby="othersTitle"
      className="overflow-hidden relative z-[410] w-full bg-(--bg-city)"
    >
      <SkipNav
        href="#contact"
        title="나의 강점 건너뛰기"
        className="focus:absolute"
      />
      <h2 id="othersTitle" className="sr-only">
        나의 강점들
      </h2>
      <motion.div className="relative bottom-0 left-0 z-[410] w-full h-[560px] md:h-[720px]">
        <ClientOnly>
          <Strengths hoveredId={hoveredId} onHoverBallon={onHoverBallon} />
        </ClientOnly>
      </motion.div>
      <Character />
    </section>
  );
}
