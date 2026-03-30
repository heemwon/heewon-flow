import Image from "next/image";
import { motion, MotionProps, MotionValue } from "framer-motion";
import ScrollSmoke from "./ScrollSmoke";

interface CarProps extends MotionProps {
  progress: MotionValue<number>;
}

export default function Car({ progress, ...props }: CarProps) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute bottom-[110px] right-[110px] z-[120] w-[420px] h-[255px] md:w-[480px] md:h-[290px] lg:w-[560px] lg:h-[340px]"
      {...props}
    >
      <div className="absolute right-[20px] bottom-[280px] z-[100]">
        <ScrollSmoke progress={progress} />
      </div>

      <Image
        src="/images/road/img-road-car.png"
        alt="car"
        fill
        sizes="500px"
        className="w-full h-auto"
        priority
      />
    </motion.div>
  );
}
