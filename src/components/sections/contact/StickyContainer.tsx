import { MotionValue, useTransform, Variants } from "framer-motion";
import ClientOnly from "@/components/common/ClientOnly";
import Floor from "@/components/common/Floor";
import TetheredBalloons from "./TetheredBalloons/TetheredBalloons";
import Character from "./Character";
import ContactInfo from "./ContactInfo/ContactInfo";

interface StickyContainerProps {
  progress: MotionValue<number>;
}

export default function StickyContainer({ progress }: StickyContainerProps) {
  const contactX = useTransform(
    progress,
    [0, 0.6, 0.9, 1],
    ["120vw", "80vw", "0vw", "0vw"]
  );
  const balloonsX = useTransform(
    progress,
    [0, 0.8, 0.9, 1],
    ["0vw", "0vw", "-50vw", "-100vw"]
  );
  const balloonsY = useTransform(progress, [0, 0.5], ["50vh", "0vh"]);
  const characterX = useTransform(
    progress,
    [0, 0.6, 0.9, 1],
    ["0%", "10vw", "30vw", "30vw"]
  );
  const characterY = useTransform(
    progress,
    [0, 0.5, 0.8, 1],
    ["0%", "30%", "30%", "-50%"]
  );

  const contactOpacity = useTransform(progress, [0, 0.8, 1], [0, 0, 1], {
    clamp: true,
  });
  const opacity = useTransform(progress, [0, 0.1, 1], [0, 1, 1], {
    clamp: true,
  });

  const grassVariants: Variants = {
    hidden: {
      y: 60,
      scaleY: 0.5,
      opacity: 0,
    },
    visible: {
      y: 0,
      scaleY: [0.5, 1.2, 0.9, 1],
      opacity: 1,
      transition: {
        y: {
          type: "spring",
          stiffness: 350,
          damping: 15,
        },
        scaleY: {
          duration: 0.8,
          times: [0, 0.4, 0.7, 1],
        },
        opacity: { duration: 0.2 },
      },
    },
  };

  const characterOpacity = useTransform(progress, [0, 0.2, 1], [0, 0, 1], {
    clamp: true,
  });

  return (
    <div className="overflow-hidden sticky top-0 left-0 z-[400] w-full h-screen after:contenr[''] after:absolute after:-bottom-0 after:left-0 after:w-full after:h-[60px] after:bg-bg-grass">
      <TetheredBalloons
        style={{
          x: balloonsX,
          y: balloonsY,
          opacity: opacity,
        }}
      />
      <ClientOnly>
        <Character
          progress={progress}
          viewport={{ once: false, amount: 0.2 }}
          style={{
            x: characterX,
            y: characterY,
            opacity: characterOpacity,
          }}
        />
      </ClientOnly>
      <ContactInfo
        progress={progress}
        style={{
          x: contactX,
          opacity: contactOpacity,
        }}
      />
      <Floor
        theme="grass"
        variants={grassVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        style={{
          originY: 1,
          height: 140,
          backgroundImage: "url(/images/floors/img-floor-grass.png)",
        }}
      />
    </div>
  );
}
