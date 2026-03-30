"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Character from "./Character";
import Strengths from "./Strengths";
import Balloons from "@/components/common/Balloons/Balloons";
import SkipNav from "@/components/common/SkipNav";

export default function Others() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const onHoverBallon = (id: number | null) => {
    setHoveredId(id);
  };

  return (
    <section
      id="others"
      aria-labelledby="othersTitle"
      className="overflow-hidden relative z-[410] w-full min-h-[120vh] bg-(--bg-city)"
    >
      <SkipNav
        href="#contact"
        title="나의 강점 건너뛰기"
        className="focus:absolute"
      />
      <h2 id="othersTitle" className="sr-only">
        나의 강점들
      </h2>
      <Balloons section="strength" />
      <motion.div className="relative bottom-0 left-0 z-[410] w-full h-screen">
        <Strengths hoveredId={hoveredId} onHoverBallon={onHoverBallon} />
      </motion.div>
      <Character />
    </section>
  );
}
