"use client";

import Section from "@/components/layout/section/Section";
import KpiCards from "./components/kpi-cards/KpiCards";
import { useDashboardData } from "./hooks/useDashboardData";
import LineChart from "./components/line-chart/LineChart";

interface DashboardPageProps {
  userId: string;
}

export default function DashboardPage({ userId }: DashboardPageProps) {
  const { data, isLoading } = useDashboardData(userId);

  return (
    <>
      <Section
        id="kpi-title"
        title="주요 성과 지표"
        titleSrOnly
        className="w-full"
      >
        <KpiCards data={data?.kpis || []} isLoading={isLoading} />
      </Section>

      <div className="grid grid-cols-2 gap-md w-full h-[332px]">
        <Section
          id="chart"
          title="매출 추이"
          className="p-md bg-white rounded-md border border-gray-200"
        >
          <LineChart data={data?.chart || []} />
        </Section>
      </div>
    </>
  );
}
