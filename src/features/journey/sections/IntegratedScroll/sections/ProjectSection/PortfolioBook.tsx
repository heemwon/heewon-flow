import { motion, Variants } from "framer-motion";

const floatingVariants: Variants = {
  animate: {
    y: ["0px", "-15px", "0px"],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const bookTransitionVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8, y: -20, transition: { duration: 0.3 } }, // 위로 사라짐
};

export default function PortfolioBook() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/leeheewon-frontend-portfilo.pdf";
    link.download = "[포트폴리오]프론트엔드 개발자_이희원_6년차.pdf";
    link.click();
  };

  return (
    <motion.button
      variants={bookTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{
        position: "absolute",
        left: "70%",
        top: "40%",
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="z-[250] cursor-pointer group"
      onClick={handleDownload}
    >
      <span className="opacity-0 inline-block -translate-y-[0] text-caption text-center leading-caption text-gray-dark transition group-hover:opacity-[100] group-hover:-translate-y-[24px] dark:text-gray-light">
        Click to Download 💾
      </span>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="flex items-center justify-center p-[12px] w-[120px] h-[160px] bg-brand-point rounded-[8px] shadow-star-glow border-[2px] border-white font-gmarket text-white text-title-4 font-bold text-center tracking-tight group-hover:scale-110 transition-transform duration-300"
      >
        MY
        <br />
        PDF
        <br />
        PORTFOLIO
      </motion.div>
    </motion.button>
  );
}
