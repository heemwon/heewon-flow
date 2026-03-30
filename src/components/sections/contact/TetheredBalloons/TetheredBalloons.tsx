import { MotionProps } from "framer-motion";
import TetheredBalloon from "./TetheredBalloon";

export default function TetheredBalloons({ ...props }: MotionProps) {
  return Array(4)
    .fill("")
    .map((_, idx) => (
      <TetheredBalloon key={`tethered-ball-${idx}`} idx={idx} {...props} />
    ));
}
