"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-[60px] left-0 right-0 h-[3px] z-[510] md:top-[62px]"
      style={{
        scaleX,
        transformOrigin: "0%",
        background:
          "linear-gradient(90deg, #c2c56a 0%, #d4d77c 50%, #e1e496 100%)",
        boxShadow: "0 1px 4px rgba(212, 215, 124, 0.3)",
      }}
    />
  );
}
