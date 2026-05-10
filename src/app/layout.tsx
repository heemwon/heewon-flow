import type { Metadata, Viewport } from "next";

import "./globals.css";
import { gmarketSansBold, pretendard } from "./fonts";
import Providers from "@/providers/providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://my-walking-portfolio.vercel.app"),

  title: {
    default: "Frontend Engineer Portfolio",
    template: "%s | 이희원 포트폴리오",
  },
  description:
    "Next.js, TypeScript 기반 인터랙션 중심 프론트엔드 포트폴리오입니다. SSR 안정성, 접근성(A11y), 디자인 시스템, SaaS 관리자 대시보드 프로젝트를 포함합니다.",
  keywords: [
    "프론트엔드 포트폴리오",
    "프론트엔드 개발자",
    "Frontend Developer",
    "Frontend Portfolio",
    "React Portfolio",
    "Next.js Portfolio",
    "TypeScript Portfolio",
    "인터랙션 포트폴리오",
    "프론트엔드 개발자 포트폴리오",
    "Next.js",
    "React",
    "TypeScript",
    "Framer Motion",
    "디자인 시스템",
    "SaaS Admin Dashboard",
    "웹 접근성",
    "SSR",
  ],
  authors: [{ name: "이희원" }],
  creator: "이희원",
  category: "technology",

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://my-walking-portfolio.vercel.app",
    siteName: "이희원 포트폴리오",

    title: "이희원 | Frontend Engineer Portfolio",
    description:
      "사용자 경험과 인터랙션 중심으로 설계한 프론트엔드 포트폴리오입니다. Next.js, TypeScript, Framer Motion 기반 프로젝트를 포함합니다.",
    images: [
      {
        url: "/images/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "이희원 프론트엔드 포트폴리오",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "이희원 | Frontend Engineer Portfolio",

    description:
      "인터랙션 중심 프론트엔드 포트폴리오. Next.js, TypeScript, Framer Motion 기반 프로젝트 수록.",

    images: ["/images/og/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://my-walking-portfolio.vercel.app",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${gmarketSansBold.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
