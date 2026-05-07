export type KpiTrend = "increase" | "decrease" | "neutral";

export interface DashboardKpi {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: KpiTrend;
  description: string;
}

export type DashboardChartPeriod = "7d" | "30d";
export interface DashboardChartPoint {
  label: string;
  revenue: number;
  users: number;
}

export type UserStatus = "active" | "pending" | "blocked";

export interface RecentUser {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: UserStatus;
  joinedAt: string;
}

export type ActivityType = "user" | "payment" | "system";

export interface DashboardActivity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  createdAt: string;
}

export interface DashboardData {
  kpis: DashboardKpi[];
  chart: Record<DashboardChartPeriod, DashboardChartPoint[]>;
  recentUsers: RecentUser[];
  activities: DashboardActivity[];
}
