import Image from "next/image";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface BookStoreProps extends MotionProps {
  className?: string;
}

export default function BookStore({ className, ...props }: BookStoreProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "absolute right-0 bottom-[118px] z-[100] w-[560px] h-[420px] md:w-[760px] md:h-[600px]",
        className
      )}
      {...props}
    >
      <Image
        src="/images/road/img-road-bookstore.png"
        fill
        sizes="760px"
        alt="store"
        className="object-cover"
        priority
      />
    </motion.div>
  );
}
