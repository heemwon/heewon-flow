import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 16 }, (_, index) => {
  const angle = (index * 360) / 16 + ((index * 17) % 20);
  const distance = 100 + ((index * 29) % 80);
  const radian = (angle * Math.PI) / 180;

  return {
    id: index,
    x: Math.cos(radian) * distance,
    y: Math.sin(radian) * distance,
    delay: ((index * 11) % 20) / 100,
  };
});

export default function ExplosionEffect() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center absolute z-[190] inset-0 pointer-events-none rounded-[12px] bg-brand-primary dark:bg-white"
    >
      {PARTICLES.map((particle) => {
        return (
          <motion.div
            key={particle.id}
            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
            animate={{
              scale: [0, 1.2, 0.5, 0], // 커졌다가 작아지며 소멸
              x: particle.x,
              y: [0, particle.y, particle.y + 40], // 중력으로 살짝 떨어짐
              opacity: [1, 1, 0.8, 0],
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: particle.delay,
            }}
            className="absolute w-[8px] h-[8px] rounded-full shadow-[0_0_12px_rgba(255,255,255,0.6)] bg-brand-primary dark:bg-white"
          />
        );
      })}
    </div>
  );
}
