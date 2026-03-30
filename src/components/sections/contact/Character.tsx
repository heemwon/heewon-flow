import Image from "next/image";
import { motion, MotionProps, MotionValue, useTransform } from "framer-motion";
import HintBubble from "@/components/common/HintBubble";

interface CharacterProps extends MotionProps {
  progress: MotionValue<number>;
}

export default function Character({ progress, ...props }: CharacterProps) {
  const messageOpacity = useTransform(
    progress,
    [0, 0.1, 0.8, 0.85],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const messageY = useTransform(progress, [0, 0.1], [20, 0], { clamp: true });

  return (
    <motion.div
      aria-hidden="true"
      className="absolute top-[52%] left-1/2 z-[500] w-[170px] h-[310px] -translate-x-1/2 md:top-1/2"
    >
      <HintBubble
        style={{ opacity: messageOpacity, y: messageY }}
        message={`휴, 무사히 도착했어요!\n이제 저와 함께 시작해 볼까요?`}
        className="-top-[50px] left-[90px] w-max rounded-full text-center whitespace-pre-wrap shadow-s3 will-change-opacity md:left-[160px]"
      />

      <motion.div
        className="absolute w-[120px] h-[220px] will-change-opacity md:w-[170px] md:h-[310px]"
        {...props}
      >
        <Image
          src="/images/characters/img-character-balloon.png"
          fill
          sizes="170px"
          alt=""
          priority
        />
      </motion.div>
    </motion.div>
  );
}
