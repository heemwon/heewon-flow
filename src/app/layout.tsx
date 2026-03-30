import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/common/Header/Header";
import SkipNav from "@/components/common/SkipNav";
import Footer from "@/components/common/Footer";

// 폰트 설정
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});
const gmarketSans = localFont({
  src: "./fonts/GmarketSansBold.woff2",
  display: "swap",
  variable: "--font-gmarket",
});

export const metadata: Metadata = {
  title: "LEEHEEWON | Frontend Developer Portfolio",
  description: "사용자 중심의 가치를 더하는 프론트엔드 개발자 이희원입니다.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16.ico", sizes: "16x16" },
      { url: "/favicon/favicon-32.ico", sizes: "32x32" },
      { url: "/favicon/favicon-48.ico", sizes: "48x48" },
      { url: "/favicon/favicon-64.ico", sizes: "64x64" },
      { url: "/favicon/favicon-128.ico", sizes: "128x128" },
      { url: "/favicon/favicon-152.ico", sizes: "152x152" },
    ],
    apple: "/favicon/favicon-152.ico",
  },
  keywords: [
    "프론트엔드",
    "개발자",
    "포트폴리오",
    "React",
    "Next.js",
    "이희원",
  ],
  authors: [{ name: "Lee Hee Won" }],
  creator: "Lee Hee Won",
  alternates: {
    // canonical: "https://domain.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "LEEHEEWON | Frontend Developer Portfolio",
    statusBarStyle: "black",
    capable: true,
  },
  openGraph: {
    title: "LEEHEEWON | Frontend Developer Portfolio",
    description: "사용자 중심의 가치를 더하는 프론트엔드 개발자 이희원입니다.",
    // url: "https://domain.com",
    siteName: "LEEHEEWON PORTFOLIO",
    images: [
      {
        url: "/images/img-og.png",
        width: 1200,
        height: 630,
        alt: "이희원 포트폴리오 메인 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEEHEEWON | Frontend Developer Portfolio",
    description: "사용자 중심의 가치를 더하는 프론트엔드 개발자 이희원입니다.",
    images: ["/images/img-og.png"],
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
      suppressHydrationWarning
      className={`${pretendard.variable} ${gmarketSans.variable} antialiased`}
    >
      <body>
        <ThemeProvider>
          <SkipNav href="#mainContent" title="본문 바로가기" />
          <Header />
          <main id="mainContent">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
