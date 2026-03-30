import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { STRENGTHS_DATA } from "@/constants/others";
import Balloon from "@/components/common/Balloons/Balloon";

interface StrengthsProps {
  hoveredId: number | null;
  onHoverBallon: (id: number | null) => void;
}

export default function Strengths({
  hoveredId,
  onHoverBallon,
}: StrengthsProps) {
  return (
    <>
      {STRENGTHS_DATA.map((strength, idx) => (
        <Fragment key={strength.id}>
          <Balloon idx={idx} balloon={strength} onHoverBallon={onHoverBallon}>
            {hoveredId !== strength.id && (
              <h3 className="font-gmarket text-title-2 leading-title-2 text-white font-bold tracking-tight">
                {strength.keyword}
              </h3>
            )}
          </Balloon>
          {hoveredId === strength.id && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1.1 }}
              className={cn(
                "flex items-center justify-center absolute z-[500] w-[200px] h-[200px] rounded-full p-[32px] text-brand-primary text-center rounded-full text-caption leading-caption break-keep -translate-x-1/2 bg-white/40 pointer-events-none dark:text-white dark:bg-gray-dark/60 md:w-[250px] md:h-[250px]",
                strength.x,
                strength.y
              )}
            >
              {strength.desc}
            </motion.span>
          )}
        </Fragment>
      ))}
    </>
  );
}
