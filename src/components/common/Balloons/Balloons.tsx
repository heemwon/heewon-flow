import { motion, MotionProps, Variants } from "framer-motion";
import { BALLOONS_DATA } from "@/constants/others";
import Balloon from "./Balloon";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

interface BalloonsProps extends MotionProps {
  section?: "project" | "strength";
}

export default function Balloons({
  section = "project",
  ...props
}: BalloonsProps) {
  const strengthVariants = {
    variants: containerVariants,
    initial: "hidden",
    whileInView: "visible",
    exit: "hidden",
    viewport: { once: false, amount: 0.1 },
  };

  return (
    <motion.div
      {...(section === "strength" && strengthVariants)}
      className="absolute top-0 left-0 z-[300] w-full h-screen"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, black 80%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
      }}
      {...props}
    >
      {BALLOONS_DATA.map((balloon, idx) => (
        <Balloon
          key={balloon.id}
          section={section}
          idx={idx}
          balloon={balloon}
        />
      ))}
    </motion.div>
  );
}
