import { ProjectList } from "../types/projects";

export const PROJECT_LIST: ProjectList[] = [
  {
    index: "01",
    title: "SaaS Admin Dashboard",

    badges: [
      { label: "SSR", variant: "primary" },
      { label: "Supabase", variant: "success" },
      { label: "Route Handler", variant: "primary" },
      { label: "TanStack Query", variant: "warning" },
      { label: "Error Feedback", variant: "warning" },
      { label: "Design System", variant: "info" },
    ],
    desc: "Next Route Handler와 Supabase를 연결해 사용자/설정 데이터가 유지되도록 개선한 SaaS 관리자 대시보드입니다.\nTanStack Query 기반 서버 상태 관리, 디자인 시스템 Dialog 기반 에러 피드백, 접근성을 함께 고려해 구현했습니다.",
    button: {
      label: "Explore Project",
      href: "/dashboard",
      variant: "primary",
    },
    preview: {
      img: "/images/home/img-preview-dashboard.jpg",
      label: "Explore Project",
      title: "SaaS Admin Dashboard",
    },
  },
  {
    index: "02",
    title: "Interactive Portfolio",
    badges: [
      { label: "User Flow", variant: "info" },
      { label: "Accessibility", variant: "info" },
      { label: "SSR", variant: "primary" },
      { label: "Framer Motion", variant: "primary" },
      { label: "Optimization", variant: "success" },
    ],
    desc: "스크롤 기반 인터랙션과 직접 제작한 비주얼 에셋을 활용해 사용자 탐색 흐름 중심으로 구현한 인터랙티브 포트폴리오입니다.\n반복 요소를 공통화하고 렌더링 부담을 줄이며, SSR 안정성과 접근성을 함께 고려했습니다.",
    button: { label: "Enter Experience", href: "/journey", variant: "primary" },
    preview: {
      img: "/images/home/img-preview-interactive.jpg",
      label: "Enter Experience",
      title: "Interactive Portfolio",
    },
  },
];
