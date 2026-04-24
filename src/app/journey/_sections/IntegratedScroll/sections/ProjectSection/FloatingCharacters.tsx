import { forwardRef } from "react";
import { motion, Variants } from "framer-motion";

import { cn } from "@shared/utils/cn";
import { CHARACTERS_DATA } from "@/app/journey/_constants/characters";

interface FloatingCharactersProps {
  isVisible: boolean;
  handleOpenPopup: (idx: number) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // 0.1초 간격으로 순차적으로 실행
      staggerChildren: 0.1,
    },
  },
};

const characterVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 50,
    borderRadius: "20px",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    borderRadius: "20px",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const floatingVariants: Variants = {
  // 떠다니는 무한 루프 애니메이션
  animate: {
    y: ["0%", "-10%", "0%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const FloatingCharacters = forwardRef<
  (HTMLButtonElement | null)[],
  FloatingCharactersProps
>(({ isVisible, handleOpenPopup }, ref) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="absolute top-0 left-0 w-full h-full"
    >
      {CHARACTERS_DATA.map((char, idx) => (
        <motion.button
          key={char.id}
          ref={(el) => {
            if (ref && "current" in ref && ref.current) {
              ref.current[idx] = el;
            }
          }}
          layoutId={`project-${String(idx)}`}
          layout
          variants={characterVariants}
          style={{
            position: "absolute",
            left: char.x,
            top: char.y,
            width: "max-content",
            borderRadius: "20px",
            zIndex: 200,
          }}
          onClick={() => handleOpenPopup(idx)}
          aria-label={`${char.name} 상세 정보 보기`}
          className="flex flex-col items-center max-w-max cursor-pointer -translate-x-1/2 hover:relative hover:z-0 hover:before:content[''] hover:before:absolute hover:before:-top-[38px] hover:before:left-1/2 hover:before:-z-1 hover:before:w-[12px] hover:before:h-[12px] hover:before:rounded-[12px] hover:before:bg-brand-point hover:before:-translate-x-1/2"
        >
          <motion.img
            layout
            src={char.src}
            alt={`${char.name} character`}
            className={cn(
              "w-[96px] h-auto md:w-[128px]",
              idx === 3 && "w-[158px] md:w-[210px]"
            )}
            variants={floatingVariants}
            animate="animate"
            custom={idx}
            transition={{ delay: idx * 0.2 }}
          />
          <motion.span
            layout
            className="inline-block mt-[12px] p-[4px_12px] max-w-max text-title-5 leading-title-5 font-bold text-brand-primary rounded-full shadow-s2 bg-white"
          >
            {char.name}
          </motion.span>
        </motion.button>
      ))}
    </motion.div>
  );
});

export default FloatingCharacters;
