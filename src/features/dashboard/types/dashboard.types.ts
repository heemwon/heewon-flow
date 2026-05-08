import { User } from "@/features/users/types/user.types";

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
  recentUsers: User[];
  activities: DashboardActivity[];
}
