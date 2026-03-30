import { STACK_STAR_DATA } from "@/constants/stars";
import Star from "@/components/common/Star";

export default function Stars() {
  return (
    <>
      {STACK_STAR_DATA.map((star, idx) => (
        <Star
          key={`stack-star-${idx}`}
          top={star.top}
          left={star.left}
          delay={star.delay}
          size={star.size}
        />
      ))}
    </>
  );
}
