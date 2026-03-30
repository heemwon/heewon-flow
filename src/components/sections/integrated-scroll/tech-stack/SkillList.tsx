import { motion, MotionProps } from "framer-motion";
import { SKILL_DATA } from "@/constants/skills";
import { SkillItem } from "./SkillItem";

export default function SkillList({ ...props }: MotionProps) {
  return (
    <motion.ul
      {...props}
      className="flex items-center gap-[216px] relative z-[200] pr-[60px] pl-[100%] w-max h-full"
    >
      {SKILL_DATA.map((skill) => {
        return <SkillItem key={skill.name} {...skill} />;
      })}
    </motion.ul>
  );
}
