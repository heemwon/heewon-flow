import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECT_DATA } from "@/constants/projects";
import Content from "./Content";

interface ProjectDetailProps {
  openPopupIndex: number;
  handleClosePopup: () => void;
}

export default function ProjectDetail({
  openPopupIndex,
  handleClosePopup,
}: ProjectDetailProps) {
  const projectData = PROJECT_DATA[openPopupIndex];

  useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    };
  }, [openPopupIndex]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[600] flex items-center justify-center bg-gray-dark/60 backdrop-blur-sm"
      >
        <motion.div
          layoutId={`project-${String(openPopupIndex)}`}
          layout
          className="relative z-0 p-[24px] w-[90%] h-[80%] bg-white md:p-[24px_32px]"
          onClick={(e) => e.stopPropagation()} // 팝업 클릭 시 닫힘 방지
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            borderRadius: "20px",
          }}
        >
          {projectData && <Content data={projectData} />}

          <button
            aria-label="팝업 닫기"
            onClick={handleClosePopup}
            className="absolute top-[12px] right-[12px] z-1 w-[44px] h-[44px] text-title-2 leading-title-2 text-brand-primary cursor-pointer md:top-[24px] md:right-[32px]"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
