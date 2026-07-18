"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import Dropdown from "@design-system/components/dropdown/Dropdown";
import Button from "@design-system/components/button/Button";
import Skeleton from "@design-system/components/skeleton/Skeleton";
import Section from "@/components/layout/section/Section";
import { useSession } from "@/app/shared/hooks/useSession";
import KpiCards from "./components/kpi-cards";
import Activities from "./components/activities";
import { useDashboardData } from "./hooks/useDashboardData";
import { PERIOD_OPTIONS } from "./constants/period";
import { DashboardChartPeriod } from "./types/dashboard.types";
import {
  DASHBOARD_RECENT_USER_COLUMNS,
  DASHBOARD_RECENT_USER_ROW_CELLS,
} from "./constants/recentUsersTable";
import UserTable from "../users/components/UserTable";

const LineChart = dynamic(() => import("./components/line-chart"), {
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

  const onChangePeriod = useCallback((value: string) => {
    setPeriod(value as DashboardChartPeriod);
  }, []);

  return (
    <>
      <Section
        id="dashboard-kpi"
        title="주요 성과 지표"
        titleSrOnly
        className="overflow-x-auto px-lg pb-lg w-full lg:p-0 "
      >
        <KpiCards data={data?.kpis ?? []} isLoading={isDashboardLoading} />
      </Section>

      <div className="p-lg pt-0 w-full lg:grid lg:grid-cols-2 lg:gap-md lg:p-0 lg:h-[332px]">
        <Section
          id="dashboard-chart"
          title="매출 추이"
          className="lg:p-md lg:bg-white lg:rounded-md lg:border lg:border-gray-200"
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
          className="mt-xxxl lg:mt-0 lg:p-md lg:bg-white lg:rounded-md lg:border lg:border-gray-200"
        >
          <Activities
            data={data?.activities ?? []}
            isLoading={isDashboardLoading}
          />
        </Section>
      </div>

      <Section
        id="dashboard-users"
        title="최근 사용자"
        className="p-md pr-0 w-full lg:p-0 "
      >
        <div className="pr-md lg:pr-0 ">
          <Button
            variant="secondary"
            size="sm"
            as={Link}
            href="/dashboard/users"
          >
            전체 보기
          </Button>
        </div>
        <div className="overflow-x-auto pr-md lg:pr-0 ">
          <UserTable
            data={data?.recentUsers ?? []}
            caption="최근 사용자 목록 요약 테이블"
            isLoading={isLoading}
            rowCell={DASHBOARD_RECENT_USER_ROW_CELLS}
            columns={DASHBOARD_RECENT_USER_COLUMNS}
            colLength={5}
          />
        </div>
      </Section>
    </>
  );
}
