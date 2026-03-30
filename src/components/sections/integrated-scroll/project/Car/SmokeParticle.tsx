import { motion } from "framer-motion";

interface SmokeParticleProps {
  x: number;
  y: number;
}

export default function SmokeParticle({ x, y }: SmokeParticleProps) {
  const randomDelay = Math.random() * 0.2;

  return (
    <motion.div
      className="absolute bg-gray-medium rounded-full opacity-60 blur-[8px] dark:bg-gray-light"
      style={{
        width: 10,
        height: 10,
        x,
        y,
      }}
      initial={{ opacity: 0.6, scale: 0.5 }}
      animate={{
        opacity: 0,
        scale: [1, 2, 2.5],
        x: 150,
        y: 40,
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        delay: randomDelay,
      }}
    />
  );
}
