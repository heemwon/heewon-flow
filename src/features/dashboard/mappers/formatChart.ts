import type { DashboardChartPoint } from "../types/dashboard.types";

type ChartValueKey = keyof Pick<DashboardChartPoint, "revenue" | "users">;

export const formatChart = (
  rawData: DashboardChartPoint[],
  dataKeys: Array<{ key: ChartValueKey; name: string; color?: string }>
) => {
  const categories = rawData.map((item) => item.label);

  const series = dataKeys.map((item) => ({
    name: item.name,
    data: rawData.map((d) => d[item.key]),
    ...(item.color && { color: item.color }),
  }));

  return { categories, series };
};
