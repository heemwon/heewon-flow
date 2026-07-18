export interface Skill {
  name: string;
  logo: string;
  message?: string;
  offsetY?: string;
  isSpecial?: boolean;
}

export const SKILL_DATA: Skill[] = [
  {
    name: "NEXT.js",
    logo: "/logos/nextjs.svg",
    message: "레거시 SSR 전환 프로젝트 리드! 🚀",
    offsetY: "-40px",
    isSpecial: true,
  },
  {
    name: "React",
    logo: "/logos/react.svg",
    offsetY: "60px",
  },
  {
    name: "Nuxt.js",
    logo: "/logos/nuxtjs.svg",
    message: "웹 접근성 인증 마크 획득 성공! ✅",
    offsetY: "-120px",
  },
  {
    name: "TypeScript",
    logo: "/logos/typescript.svg",
    message: "타입 안정성 확보로 런타임 에러 0% 지향 📘",
    offsetY: "-80px",
    isSpecial: true,
  },
  {
    name: "Zustand",
    logo: "/logos/zustand.svg",
    message: "보일러플레이트 제로! 경량 상태 관리 도입 🛠️",
    offsetY: "-180px",
    isSpecial: true,
  },
  {
    name: "TanStack Query",
    logo: "/logos/tanstack.svg",
    message: "서버 상태 관리 및 캐싱 전략 최적화 ⚡",
    isSpecial: true,
  },
  {
    name: "Redux",
    logo: "/logos/redux.svg",
    offsetY: "-60px",
  },
  {
    name: "Tailwind",
    logo: "/logos/tailwind.svg",
    offsetY: "-100px",
  },
  {
    name: "Vanilla-extract",
    logo: "/logos/vanilla.svg",
  },
  {
    name: "Storybook",
    logo: "/logos/storybook.svg",
    message: "디자인 시스템 구축 및 UI 컴포넌트 격리 개발 📚",
    offsetY: "-180px",
  },
  {
    name: "Amplitude",
    logo: "/logos/amplitude.svg",
    message: "UX 개선 및 A/B 테스트 📈",
    isSpecial: true,
  },
];
