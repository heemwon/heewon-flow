import { createSupabaseServerClient } from "@/lib/supabase/server";
import { dashboardMock } from "../mocks/dashboard.mock";
import type {
  ActivityType,
  DashboardChartPeriod,
  DashboardChartPoint,
  DashboardData,
  DashboardKpi,
  KpiTrend,
} from "../types/dashboard.types";
import { getUserDataFromSource } from "@/features/users/api/user.server";

interface KpiRow {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: KpiTrend;
  description: string;
}

interface ChartRow {
  period: DashboardChartPeriod;
  label: string;
  revenue: number;
  users: number;
}

interface ActivityRow {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  created_at_label: string;
}

const toKpi = (row: KpiRow): DashboardKpi => ({
  id: row.id,
  title: row.title,
  value: row.value,
  change: row.change,
  trend: row.trend,
  description: row.description,
});

const toChart = (
  rows: ChartRow[]
): Record<DashboardChartPeriod, DashboardChartPoint[]> => ({
  "7d": rows
    .filter((row) => row.period === "7d")
    .map(({ label, revenue, users }) => ({ label, revenue, users })),
  "30d": rows
    .filter((row) => row.period === "30d")
    .map(({ label, revenue, users }) => ({ label, revenue, users })),
});

const toActivity = (row: ActivityRow) => ({
  id: row.id,
  type: row.type,
  title: row.title,
  description: row.description,
  createdAt: row.created_at_label,
});

export async function getDashboardDataFromSource(): Promise<DashboardData> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return dashboardMock;
  }

  const [kpisRes, chartRes, activitiesRes, users] = await Promise.all([
    supabase
      .from("dashboard_kpis")
      .select("id,title,value,change,trend,description")
      .order("sort_order", { ascending: true }),
    supabase
      .from("dashboard_chart_points")
      .select("period,label,revenue,users")
      .order("sort_order", { ascending: true }),
    supabase
      .from("dashboard_activities")
      .select("id,type,title,description,created_at_label")
      .order("sort_order", { ascending: true }),
    getUserDataFromSource(),
  ]);

  if (kpisRes.error) {
    throw new Error(kpisRes.error.message);
  }

  if (chartRes.error) {
    throw new Error(chartRes.error.message);
  }

  if (activitiesRes.error) {
    throw new Error(activitiesRes.error.message);
  }

  return {
    kpis: ((kpisRes.data ?? []) as KpiRow[]).map(toKpi),
    chart: toChart((chartRes.data ?? []) as ChartRow[]),
    recentUsers: users.slice(0, 4),
    activities: ((activitiesRes.data ?? []) as ActivityRow[]).map(toActivity),
  };
}
