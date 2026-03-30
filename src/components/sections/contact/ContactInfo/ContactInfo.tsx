import { motion, MotionProps, MotionValue } from "framer-motion";
import { CONTACT_DATA } from "@/constants/contact";
import Photo from "./Photo";
import LinkItem from "./LinkItem";

interface ContactInfoProps extends MotionProps {
  progress: MotionValue<number>;
}

export default function ContactInfo({ progress, ...props }: ContactInfoProps) {
  const { name, tel, email, github } = CONTACT_DATA;

  return (
    <motion.div
      className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 z-[400] gap-[24px] w-full h-screen -translate-1/2 md:flex-row md:gap-[0_48px]"
      {...props}
    >
      <Photo />
      <dl className="flex flex-col gap-[2px_0] text-brand-primary text-body-2 leading-body-2 dark:text-gray-light">
        <dt>
          <span className="inline-block w-full text-caption leading-caption text-point-pk">
            CONTACT ME.
          </span>
          <span className="text-title-2 leading-title-2 font-bold md:text-title-1 md:leading-title-1">
            {name.ko} {name.en}
          </span>
        </dt>
        <dd className="mt-[12px] md:mt-[48px]">
          <LinkItem href={`tel:${tel}`}>{tel}</LinkItem>↗
        </dd>
        <dd>
          <LinkItem href={`mailto:${tel}`}>{email}</LinkItem>↗
        </dd>
        <dd>
          <LinkItem href={github}>Portfolio Github</LinkItem>↗
        </dd>
      </dl>
    </motion.div>
  );
}
