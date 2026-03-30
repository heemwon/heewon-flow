import { INTRO_STAR_DATA } from "@/constants/stars";
import Star from "@/components/common/Star";

export default function Stars() {
  return (
    <>
      {INTRO_STAR_DATA.map((star, idx) => (
        <Star
          key={`intro-star-${idx}`}
          top={star.top}
          left={star.left}
          delay={star.delay}
          size={star.size}
        />
      ))}
    </>
  );
}
