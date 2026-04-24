import { useRef, useState } from "react";

import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";

import ClientOnly from "@shared/ui/ClientOnly";
import Car from "./Car";
import FloatingCharacters from "./FloatingCharacters";
import ProjectDetail from "./ProjectDetail";
import PortfolioBook from "./PortfolioBook";
import BookStore from "./BookStore";
import Trees from "./Trees";
import Floor from "../../../../_components/Floor";
import Balloons from "../../../../_components/Balloons";

interface ProjectSectionProps {
  progress: MotionValue<number>;
}

const CHARACTER_APPEAR_POINT = 0.55;

export default function ProjectSection({ progress }: ProjectSectionProps) {
  const [openPopupIndex, setOpenPopupIndex] = useState<number | null>(null);
  const [showBook, setShowBook] = useState(false);
  const [showChars, setShowChars] = useState(false);
  const characterRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useMotionValueEvent(progress, "change", (latest) => {
    const isCharZone =
      latest >= CHARACTER_APPEAR_POINT && latest < CHARACTER_APPEAR_POINT + 0.1;
    const isBookZone = latest >= 0.75 && latest < 0.85;

    setShowChars((prev) => (prev !== isCharZone ? isCharZone : prev));
    setShowBook((prev) => (prev !== isBookZone ? isBookZone : prev));
  });

  const handleOpenPopup = (idx: number) => {
    setOpenPopupIndex(idx);
  };

  const handleClosePopup = () => {
    if (openPopupIndex !== null) {
      characterRefs.current[openPopupIndex]?.focus();
    }
    setOpenPopupIndex(null);
  };

  const smoothProgress = useSpring(progress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.01,
  });

  const treeX = useTransform(
    smoothProgress,
    [0, 0.4, 0.65, 1],
    ["100vw", "100vw", "0%", "-140vw"]
  );
  const carX = useTransform(
    progress,
    [0.35, 0.5, 0.65],
    ["130vw", "0%", "-100vw"]
  );
  const bookStoreX = useTransform(
    progress,
    [0.6, 0.8, 1],
    ["800px", "0px", "-200vw"]
  );

  const projectOpacity = useTransform(
    smoothProgress,
    [0, 0.35, 0.5, 0.8, 0.9, 1],
    [0, 0, 1, 1, 0, 0],
    { clamp: true }
  );

  const treeOpacity = useTransform(progress, [0, 0.48, 0.52, 1], [0, 0, 1, 1], {
    clamp: true,
  });

  const balloonsOpacity = useTransform(
    progress,
    [0, 0.88, 0.9, 1],
    [0, 0, 1, 1],
    {
      clamp: true,
    }
  );

  const balloonsDisplay = useTransform(
    progress,
    [0, 0.88, 0.89, 1],
    ["none", "none", "block", "block"]
  );

  return (
    <motion.article
      aria-labelledby="projectTitle"
      inert={!showChars && !showBook}
      className="h-screen w-full bg-[var(--bg-city)]"
    >
      <h3 id="projectTitle" className="sr-only">
        프로젝트 리스트
      </h3>
      <Trees
        style={{
          x: treeX,
          opacity: treeOpacity,
        }}
      />
      <Car
        progress={progress}
        style={{
          x: carX,
        }}
      />
      <ClientOnly>
        <FloatingCharacters
          ref={characterRefs}
          isVisible={showChars}
          handleOpenPopup={handleOpenPopup}
        />
      </ClientOnly>
      <BookStore
        style={{
          x: bookStoreX,
        }}
      />
      <AnimatePresence>{showBook && <PortfolioBook />}</AnimatePresence>
      <Floor
        theme="road"
        style={{
          opacity: projectOpacity,
        }}
      />

      <ClientOnly>
        {openPopupIndex !== null && (
          <ProjectDetail
            openPopupIndex={openPopupIndex}
            handleClosePopup={handleClosePopup}
          />
        )}
        <Balloons
          style={{
            opacity: balloonsOpacity,
            display: balloonsDisplay,
          }}
        />
      </ClientOnly>
    </motion.article>
  );
}
