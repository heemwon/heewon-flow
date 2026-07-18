export interface Strength {
  id: number;
  keyword?: string;
  desc?: string;
  x: string;
  y?: string;
  color: string;
}

export const BALLOONS_DATA: Strength[] = [
  {
    id: 1,
    x: "left-0",
    color: "--ball-pk",
  },
  {
    id: 2,
    x: "left-[40%]",
    color: "--ball-bl",
  },
  {
    id: 3,
    x: "left-[50%]",
    color: "--ball-yr",
  },
  {
    id: 4,
    x: "right-[20%]",
    color: "--ball-or",
  },
  {
    id: 5,
    x: "left-[90%]",
    color: "--ball-bl",
  },
];

export const STRENGTHS_DATA: Strength[] = [
  {
    id: 1,
    keyword: "DATA",
    desc: "GTM, Amplitude를 활용해 사용자 이탈 구간을 분석하고 A/B 테스트를 통해 전환율(CVR)을 개선합니다. 데이터에 근거한 집요한 문제 해결로 실질적인 매출 성장에 기여합니다.",
    x: "left-[calc(50%-60px)] md:left-[50%]",
    y: "bottom-[180px] md:bottom-[280px]",
    color: "--ball-or",
  },
  {
    id: 2,
    keyword: "PERFORMANCE",
    desc: "단순히 기능을 만드는 것을 넘어 LCP 70% 단축, Lighthouse 90점대 달성 등 수치로 증명되는 최적화 경험을 보유하고 있습니다. 사용자 체감 속도를 혁신하여 비즈니스 가치를 극대화합니다.",
    x: "left-[calc(50%-40px)] md:left-[calc(50%-120px)]",
    y: "bottom-[380px] md:bottom-[450px]",
    color: "--ball-bl",
  },
  {
    id: 3,
    keyword: "DESIGN",
    desc: "디자인 전공 배경을 바탕으로 고감도 UI/UX를 완벽하게 구현합니다. 스토리북 기반의 디자인 시스템 구축과 웹뷰 환경의 미세한 인터랙션 최적화에 강점이 있는 ‘브릿지’형 엔지니어입니다.",
    x: "left-[calc(50%-70px)] md:left-[calc(50%-200px)]",
    y: "bottom-[280px] md:bottom-[300px]",
    color: "--ball-yr",
  },
  {
    id: 4,
    keyword: "SCALABILITY",
    desc: "50만 건 이상의 대용량 데이터를 안정적으로 처리하는 아키텍처를 설계합니다. TanStack Query와 Zustand를 적재적소에 활용해 확장 가능하고 유지보수가 용이한 프론트엔드 환경을 구축합니다.",
    x: "left-[calc(50%+70px)] md:left-[calc(50%+100px)]",
    y: "bottom-[280px] md:bottom-[460px]",
    color: "--ball-pk",
  },
  {
    id: 5,
    keyword: "OWNERSHIP",
    desc: "서비스 전체의 성공을 위해 동료와 적극적으로 소통하고 기술적 리딩과 멘토링을 주도합니다. 문제 발생 시 유연하게 조율하며 팀과 프로덕트의 동반 성장을 이끌어냅니다.",
    x: "left-[calc(50%+70px)] md:left-[calc(50%+180px)]",
    y: "bottom-[180px] md:bottom-[320px]",
    color: "--ball-or",
  },
];
