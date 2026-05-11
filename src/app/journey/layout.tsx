import { ReactNode } from "react";
import type { Metadata } from "next";

import SkipNav from "../shared/ui/SkipNav";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

interface JourneyLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Interactive Portfolio",

  description:
    "Framer Motion 기반 스크롤 인터랙션과 직접 제작한 스프라이트 애니메이션을 적용한 인터랙티브 포트폴리오 프로젝트입니다.",

  keywords: [
    "Interactive Portfolio",
    "Framer Motion",
    "Scroll Interaction",
    "Frontend Animation",
    "Next.js Animation",
  ],

  openGraph: {
    title: "Interactive Portfolio | 이희원 포트폴리오",

    description:
      "Sticky Horizontal Scroll, Portal Layering, 접근성을 고려한 인터랙션 포트폴리오 프로젝트입니다.",

    url: "https://heewon-flow.vercel.app/journey",
  },

  alternates: {
    canonical: "https://heewon-flow.vercel.app/journey",
  },
};

export default function JourneyLayout({ children }: JourneyLayoutProps) {
  return (
    <>
      <SkipNav href="#mainContent" title="본문 바로가기" />
      <Header />
      <main id="mainContent">{children}</main>
      <Footer />
    </>
  );
}
