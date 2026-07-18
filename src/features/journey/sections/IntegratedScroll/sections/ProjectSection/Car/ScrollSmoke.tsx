import { useState } from "react";
import {
  useVelocity,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";

import SmokeParticle from "./SmokeParticle";

interface ScrollSmokeProps {
  progress: MotionValue<number>;
}

export default function ScrollSmoke({ progress }: ScrollSmokeProps) {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const scrollVelocity = useVelocity(progress);
  const scrollVelocityAbs = useTransform(scrollVelocity, (v) => Math.abs(v));

  // 스크롤이 일어날 때만 파티클 생성
  useMotionValueEvent(scrollVelocityAbs, "change", (latest) => {
    if (latest > 0.001) {
      if (Math.random() < latest * 10) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: 50,
          y: 150,
        };

        setParticles((prev) => {
          const next = [...prev, newParticle];
          return next.length > 15 ? next.slice(1) : next;
        });
      }
    }
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p) => (
        <SmokeParticle key={p.id} x={p.x} y={p.y} />
      ))}
    </div>
  );
}
