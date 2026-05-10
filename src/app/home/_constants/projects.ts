import { ProjectList } from "../_types/projects";

export const PROJECT_LIST: ProjectList[] = [
  {
    index: "01",
    title: "SaaS Admin Dashboard",
    badges: [
      { label: "TanStack Query", variant: "info" },
      { label: "Design System", variant: "warning" },
      { label: "Mock API", variant: "success" },
    ],
    desc: "실무 환경을 고려해 설계한 SaaS 관리자 대시보드입니다. TanStack Query 기반 서버 상태 관리, 접근성(A11y), 디자인 시스템, 폼 및 데이터 인터랙션 구조를 중심으로 구현했습니다.",
    button: {
      label: "Explore Project",
      href: "/dashboard",
      variant: "primary",
    },
    preview: {
      img: "/images/home/img-preview-dashboard.jpg",
      label: "Explore Project",
    },
  },
  {
    index: "02",
    title: "Interactive Portfolio",
    badges: [
      { label: "Framer Motion", variant: "primary" },
      { label: "SSR ", variant: "error" },
      { label: "Accessibility", variant: "info" },
    ],
    desc: "스크롤 인터랙션과 직접 제작한 비주얼 에셋 기반으로 구현한 인터랙티브 포트폴리오입니다. SSR 안정성과 접근성을 고려한 사용자 경험 설계에 집중했습니다.",
    button: { label: "Enter Experience", href: "/journey", variant: "primary" },
    preview: {
      img: "/images/home/img-preview-interactive.jpg",
      label: "Enter Experience",
    },
  },
];
