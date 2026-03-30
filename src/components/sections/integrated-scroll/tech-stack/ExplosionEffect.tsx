import { motion } from "framer-motion";

export default function ExplosionEffect() {
  const particles = Array.from({ length: 16 });

  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center absolute z-[190] inset-0 pointer-events-none rounded-[12px] bg-brand-primary dark:bg-white"
    >
      {particles.map((_, i) => {
        // 랜덤한 각도와 거리 설정
        const angle = (i * 360) / 16 + Math.random() * 20;
        const distance = 100 + Math.random() * 80;
        const radian = (angle * Math.PI) / 180;

        return (
          <motion.div
            key={i}
            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
            animate={{
              scale: [0, 1.2, 0.5, 0], // 커졌다가 작아지며 소멸
              x: Math.cos(radian) * distance,
              y: [
                0,
                Math.sin(radian) * distance,
                Math.sin(radian) * distance + 40,
              ], // 중력으로 살짝 떨어짐
              opacity: [1, 1, 0.8, 0],
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: Math.random() * 0.2,
            }}
            className="absolute w-[8px] h-[8px] rounded-full shadow-[0_0_12px_rgba(255,255,255,0.6)] bg-brand-primary dark:bg-white"
          />
        );
      })}
    </div>
  );
}
