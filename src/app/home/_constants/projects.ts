import { ProjectList } from "../_types/projects";

export const PROJECT_LIST: ProjectList[] = [
  {
    index: "01",
    title: "SaaS Admin Dashboard",

    badges: [
      { label: "SSR", variant: "primary" },
      { label: "Data Flow", variant: "primary" },
      { label: "TanStack Query", variant: "warning" },
      { label: "Mock API", variant: "warning" },
      { label: "Design System", variant: "info" },
      { label: "Accessibility", variant: "info" },
    ],
    desc: "실제 운영 환경을 고려해 데이터 흐름과 상태 구조를 설계한 SaaS 관리자 대시보드입니다.\nTanStack Query 기반 서버 상태 관리와 디자인 시스템 구조를 적용했으며, 접근성과 유지보수성을 함께 고려해 구현했습니다.",
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
      { label: "User Flow", variant: "info" },
      { label: "Accessibility", variant: "info" },
      { label: "SSR ", variant: "primary" },
      { label: "Framer Motion", variant: "primary" },
    ],
    desc: "스크롤 기반 인터랙션과 직접 제작한 비주얼 에셋을 활용해 사용자 탐색 흐름 중심으로 구현한 인터랙티브 포트폴리오입니다.\nSSR 안정성과 접근성을 함께 고려해 사용자 경험 설계에 집중했습니다.",
    button: { label: "Enter Experience", href: "/journey", variant: "primary" },
    preview: {
      img: "/images/home/img-preview-interactive.jpg",
      label: "Enter Experience",
    },
  },
];
