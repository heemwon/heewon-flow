"use client";

import { motion } from "framer-motion";

export default function IntroOnboarding() {
  return (
    <section className="flex justify-center items-center w-full h-screen bg-light-gradient dark:bg-dark-gradient">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-title-4 leading-title-4 font-[500] text-brand-primary text-center md:text-title-1 md:leading-title-1 dark:text-white"
      >
        숲의 끝에 다다르니 새로운 길이 보이네요!
        <br />
        함께 걸으며 제가 가진 기술들을 보여드릴게요.
      </motion.h2>
    </section>
  );
}
