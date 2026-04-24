import { motion, MotionValue, useTransform } from "framer-motion";

import ClientOnly from "@shared/ui/ClientOnly";
import TechStack from "./sections/TechStackSection";
import Project from "./sections/ProjectSection";
import Character from "../../_components/Character";

interface StickyContainerProps {
  progress: MotionValue<number>;
}

export default function StickyContainer({ progress }: StickyContainerProps) {
  const backgroundColor = useTransform(
    progress,
    [0.4, 0.5, 0.9],
    ["var(--bg-forest)", "var(--bg-city)", "var(--bg-city)"],
    { clamp: true }
  );

  const charOpacity = useTransform(progress, [0, 0.85, 0.86, 1], [1, 1, 0, 0], {
    clamp: true,
  });

  const charDisplay = useTransform(
    progress,
    [0, 0.85, 0.86, 1],
    ["block", "block", "none", "none"]
  );

  return (
    <motion.div
      style={{
        backgroundColor,
      }}
      className="overflow-hidden sticky top-0 left-0 z-[400] h-screen w-full"
    >
      <TechStack progress={progress} />
      <Project progress={progress} />

      <ClientOnly>
        <Character
          progress={progress}
          cityThemepoint={0.45}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            duration: 0.8,
          }}
          style={{
            opacity: charOpacity,
            display: charDisplay,
          }}
          message={`야호! 다 왔다! 🥳 \n이제 주요 프로젝트를 구경해 볼까요?`}
          messageClassName="-top-[110px] w-max rounded-full text-center whitespace-pre-wrap shadow-s3"
        />
      </ClientOnly>
    </motion.div>
  );
}
