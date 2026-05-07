import type { DashboardData } from "../types/dashboard.types";

export const dashboardMock: DashboardData = {
  kpis: [
    {
      id: "revenue",
      title: "총 매출",
      value: "₩12.4M",
      change: "+12.5%",
      trend: "increase",
      description: "지난달 대비",
    },
    {
      id: "users",
      title: "전체 사용자",
      value: "8,420",
      change: "+8.2%",
      trend: "increase",
      description: "이번 달 신규 포함",
    },
    {
      id: "conversion",
      title: "전환율",
      value: "6.8%",
      change: "-1.1%",
      trend: "decrease",
      description: "최근 7일 기준",
    },
    {
      id: "active",
      title: "활성 사용자",
      value: "2,184",
      change: "+3.4%",
      trend: "increase",
      description: "오늘 기준",
    },
  ],

  chart: {
    "7d": [
      { label: "Sun", revenue: 300, users: 690 },
      { label: "Mon", revenue: 120, users: 320 },
      { label: "Tue", revenue: 180, users: 410 },
      { label: "Wed", revenue: 150, users: 380 },
      { label: "Thu", revenue: 220, users: 520 },
      { label: "Fri", revenue: 260, users: 610 },
      { label: "Sat", revenue: 210, users: 480 },
    ],
    "30d": [
      { label: "Sun", revenue: 200, users: 410 },
      { label: "Mon", revenue: 320, users: 300 },
      { label: "Tue", revenue: 80, users: 280 },
      { label: "Wed", revenue: 100, users: 300 },
      { label: "Thu", revenue: 120, users: 450 },
      { label: "Fri", revenue: 240, users: 240 },
      { label: "Sat", revenue: 110, users: 400 },
    ],
  },

  recentUsers: [
    {
      id: "user-1",
      name: "이희원",
      email: "heewon@example.com",
      role: "Admin",
      status: "active",
      joinedAt: "2026.05.01",
    },
    {
      id: "user-2",
      name: "양정원",
      email: "jeongwon@example.com",
      role: "Editor",
      status: "pending",
      joinedAt: "2026.04.29",
    },
    {
      id: "user-3",
      name: "박재찬",
      email: "jaechan@example.com",
      role: "Viewer",
      status: "blocked",
      joinedAt: "2026.04.26",
    },
  ],

  activities: [
    {
      id: "activity-1",
      type: "user",
      title: "신규 사용자 가입",
      description: "이희원님이 새로 가입했습니다.",
      createdAt: "5분 전",
    },
    {
      id: "activity-2",
      type: "payment",
      title: "결제 완료",
      description: "Pro Plan 결제가 완료되었습니다.",
      createdAt: "18분 전",
    },
    {
      id: "activity-3",
      type: "system",
      title: "시스템 알림",
      description: "정기 리포트 생성이 완료되었습니다.",
      createdAt: "1시간 전",
    },
  ],
};
