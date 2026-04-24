"use client";

import { useEffect, useState, useRef } from "react";

import {
  AnimatePresence,
  motion,
  MotionProps,
  MotionValue,
  useTransform,
} from "framer-motion";

import HintBubble from "@journey/_components/HintBubble";
import DustParticle from "./DustParticle";
import styles from "./Character.module.css";

interface ScrollState {
  isMoving: boolean;
  direction: "left" | "right";
}

interface Dust {
  id: number;
  x: number;
}

interface CharacterProps extends MotionProps {
  progress: MotionValue<number>;
  cityThemepoint: number;
  message: string;
  messageClassName?: string;
}

export default function Character({
  progress,
  cityThemepoint,
  message,
  messageClassName,
  ...props
}: CharacterProps) {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isMoving: false,
    direction: "right",
  });
  const [dusts, setDusts] = useState<Dust[]>([]);
  const dustIdCounter = useRef(0);
  const lastScrollTop = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const cityShadowOpacity = useTransform(
    progress,
    [0, cityThemepoint - 0.01, cityThemepoint],
    [0, 0, 1]
  );
  const forestShadowOpacity = useTransform(
    progress,
    [0, cityThemepoint - 0.01, cityThemepoint],
    [1, 1, 0]
  );
  const messageOpacity = useTransform(
    progress,
    [
      cityThemepoint, // 💡 여기서부터 보이기 시작
      cityThemepoint + 0.02, // 완전히 보임
      cityThemepoint + 0.09,
      cityThemepoint + 0.1,
    ],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const messageY = useTransform(
    progress,
    [cityThemepoint - 0.1, cityThemepoint + 0.02, cityThemepoint + 0.04],
    [20, -5, 0]
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (scrollState.isMoving) {
      interval = setInterval(() => {
        const id = dustIdCounter.current++;
        const side = id % 2 === 0 ? -15 : 15;

        setDusts((prev) => [...prev, { id, x: side }]);

        setTimeout(() => {
          setDusts((prev) => prev.filter((d) => d.id !== id));
        }, 1000);
      }, 200);
    }

    return () => clearInterval(interval);
  }, [scrollState.isMoving]);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;

      // 방향 (내려가면 오른쪽, 올라가면 왼쪽)
      const newDirection = st > lastScrollTop.current ? "right" : "left";

      // 움직임 상태 업데이트
      setScrollState({ isMoving: true, direction: newDirection });

      // 스크롤 멈춤 감지 (150ms 후 멈춤 상태로 전환)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setScrollState((prev) => ({ ...prev, isMoving: false }));
      }, 150);

      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // 클래스 조합 로직
  const getCharacterClass = () => {
    let classes = styles.character;

    if (scrollState.isMoving) {
      // 걷는 애니메이션 적용
      classes += ` ${
        scrollState.direction === "right" ? styles.walking : styles.walkingLeft
      }`;
    } else {
      // 멈췄을 때 왼쪽 방향이었다면 왼쪽을 본 상태 유지
      if (scrollState.direction === "left") {
        classes += ` ${styles.facingLeft}`;
      }
    }
    return classes;
  };

  return (
    <motion.div
      {...props}
      className="absolute bottom-[60px] left-1/2 z-[300] -translate-x-1/2"
    >
      <HintBubble
        style={{ y: messageY, opacity: messageOpacity }}
        message={message}
        className={messageClassName}
      />

      <div className={getCharacterClass()} />

      {/* 발밑 그림자&먼지 효과 */}
      <motion.div
        style={{
          opacity: forestShadowOpacity,
        }}
        className="absolute -bottom-[16px] left-1/2 w-[64px] h-[16px] rounded-full blur-md bg-black/10 -translate-x-1/2 dark:bg-white/65"
      />
      <motion.div
        style={{
          opacity: cityShadowOpacity,
        }}
      >
        <AnimatePresence>
          {dusts.map((dust) => (
            <DustParticle key={dust.id} x={dust.x} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
