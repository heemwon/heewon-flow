import { ReactNode } from "react";
import type { Metadata } from "next";

import Layout from "@/components/layout/Layout";
interface DashboardLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "SaaS Admin Dashboard",

  description:
    "TanStack Query, Mock API, 접근성(A11y), 디자인 시스템 기반으로 구현한 SaaS 관리자 대시보드 프로젝트입니다.",

  keywords: [
    "SaaS Admin Dashboard",
    "React Dashboard",
    "Next.js Dashboard",
    "TanStack Query",
    "Design System",
    "Admin Dashboard Portfolio",
  ],

  openGraph: {
    title: "SaaS Admin Dashboard | 이희원 포트폴리오",

    description:
      "검색 debounce, 상태 필터링, Dialog, Form Validation, Settings 관리 기능을 구현한 관리자 대시보드 프로젝트입니다.",

    url: "https://heewon-flow.vercel.app/dashboard",
  },

  alternates: {
    canonical: "https://heewon-flow.vercel.app/dashboard",
  },
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <Layout>{children}</Layout>;
}
