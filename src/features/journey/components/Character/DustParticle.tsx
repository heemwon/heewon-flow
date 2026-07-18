import { motion } from "framer-motion";

interface DustParticleProps {
  x: number;
}

export default function DustParticle({ x }: DustParticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0.6, scale: 0.2, x: x, y: 0 }}
      animate={{
        opacity: 0,
        scale: 2,
        y: -12,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute bottom-0 w-[12px] h-[12px] bg-gray-dark/40 rounded-full blur-[1px] dark:bg-bg-light/80"
    />
  );
}
