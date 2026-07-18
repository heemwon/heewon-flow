import type { DashboardChartPoint } from "../types/dashboard.types";

export const DASHBOARD_CHART_SERIES: Array<{
  key: keyof Pick<DashboardChartPoint, "revenue" | "users">;
  name: string;
  color: string;
}> = [
  { key: "revenue", name: "수익", color: "#4338CA" },
  { key: "users", name: "방문자", color: "#047857" },
];
