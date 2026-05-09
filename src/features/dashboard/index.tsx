"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import Dropdown from "@design-system/components/dropdown/Dropdown";
import Button from "@design-system/components/button/Button";
import Skeleton from "@design-system/components/skeleton/Skeleton";
import Badge from "@design-system/components/badge/Badge";
import Section from "@/components/layout/section/Section";
import { useSession } from "@/app/shared/hooks/useSession";
import { formatBadge } from "@/features/dashboard/mappers/formatBadge";
import KpiCards from "./components/kpi-cards/KpiCards";
import Activities from "./components/activities/Activities";
import { useDashboardData } from "./hooks/useDashboardData";
import { PERIOD_OPTIONS } from "./constants/period";
import { DashboardChartPeriod } from "./types/dashboard.types";
import UserTable, { RowCell } from "../users/components/UserTable";
import type { User } from "../users/types/user.types";

const LineChart = dynamic(() => import("./components/line-chart/LineChart"), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-[240px]" aria-hidden="true" />,
});

interface DashboardProps {
  initialUserId?: string;
}

export default function Dashboard({ initialUserId }: DashboardProps) {
  const { data: session } = useSession();

  const userId = session?.userId ?? initialUserId;
  const { data, isLoading } = useDashboardData(userId);

  const [period, setPeriod] = useState<DashboardChartPeriod>("7d");

  const isDashboardLoading = !userId || !data || isLoading;
  const chartData = data?.chart?.[period] ?? [];

  const dashboardRowCell: RowCell<User>[] = [
    { header: "이름", render: (u) => u.name },
    { header: "이메일", render: (u) => u.email },
    {
      header: "상태",
      render: (u) => <Badge variant={formatBadge(u.status)}>{u.status}</Badge>,
    },
    { header: "권한", render: (u) => u.role },
    { header: "가입일", render: (u) => u.joinedAt },
  ];

  const dashboardColumns = [
    { id: "dashboard-name", width: "200px" },
    { id: "dashboard-email" },
    { id: "dashboard-status", width: "120px" },
    { id: "dashboard-role", width: "120px" },
    { id: "dashboard-join", width: "150px" },
  ];

  const onChangePeriod = (value: string) => {
    setPeriod(value as DashboardChartPeriod);
  };

  return (
    <>
      <Section
        id="dashboard-kpi"
        title="주요 성과 지표"
        titleSrOnly
        className="w-full"
      >
        <KpiCards data={data?.kpis ?? []} isLoading={isDashboardLoading} />
      </Section>

      <div className="grid grid-cols-2 gap-md w-full h-[332px]">
        <Section
          id="dashboard-chart"
          title="매출 추이"
          className="p-md bg-white rounded-md border border-gray-200"
        >
          <div className="w-[128px]">
            <Dropdown
              id="dashboard-chart-options"
              label="조회 기간 선택"
              srOnly
              options={PERIOD_OPTIONS}
              value={period}
              onChange={onChangePeriod}
            />
          </div>

          <LineChart data={chartData} isLoading={isDashboardLoading} />
        </Section>

        <Section
          id="dashboard-activities"
          title="최근 활동"
          className="p-md bg-white rounded-md border border-gray-200"
        >
          <Activities
            data={data?.activities ?? []}
            isLoading={isDashboardLoading}
          />
        </Section>
      </div>

      <Section id="dashboard-users" title="최근 사용자" className="w-full">
        <div>
          <Button
            variant="secondary"
            size="sm"
            as={Link}
            href="/dashboard/users"
          >
            전체 보기
          </Button>
        </div>
        <UserTable
          data={data?.recentUsers ?? []}
          caption="최근 사용자 목록 요약 테이블"
          isLoading={isLoading}
          rowCell={dashboardRowCell}
          columns={dashboardColumns}
          colLength={5}
        />
      </Section>
    </>
  );
}
