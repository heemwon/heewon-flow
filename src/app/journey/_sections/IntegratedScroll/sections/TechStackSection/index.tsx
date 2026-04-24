import { motion, MotionValue, useSpring, useTransform } from "framer-motion";

import Trees from "./Trees";
import SkillList from "./SkillList";
import Stars from "./Stars";

import Floor from "../../../../_components/Floor";

interface TechStackSectionProps {
  progress: MotionValue<number>;
}

export default function TechStackSection({ progress }: TechStackSectionProps) {
  const smoothProgress = useSpring(progress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.01,
  });

  // 가로 이동값 (스크롤에 따라 0% -> -100%)
  const backgroundX = useTransform(smoothProgress, [0, 0.5], ["0%", "-30%"]);
  const foregroundX = useTransform(progress, [0.05, 0.5], ["10%", "-100%"]);

  // opacity 조절값
  const skillsOpacity = useTransform(smoothProgress, [0.3, 0.45], [1, 0]);

  // 영역 벗어나면 display:none
  const pointerEvents = useTransform(progress, [0.3, 0.45], ["auto", "none"]);

  return (
    <motion.article
      aria-labelledby="techTitle"
      className="overflow-hidden h-screen w-full"
    >
      <h3 id="techTitle" className="sr-only">
        기술 스택
      </h3>

      <motion.div
        style={{
          opacity: skillsOpacity,
          pointerEvents,
        }}
      >
        <Stars />
        <Trees style={{ x: backgroundX }} />
      </motion.div>

      <SkillList style={{ x: foregroundX, pointerEvents }} />

      <Floor
        style={{
          opacity: skillsOpacity,
        }}
      />
    </motion.article>
  );
}
