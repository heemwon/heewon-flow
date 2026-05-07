"use client";

import { useMemo, useRef } from "react";
import Highcharts from "highcharts";
import "highcharts/modules/accessibility";
import type { Options, SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";

import Skeleton from "@design-system/components/skeleton/Skeleton";
import { formatChart } from "@/lib/formatChart";
import { DashboardChartPoint } from "../../types/dashboard.types";
import { lineChartBaseClass } from "./lineChart.styles";

interface LineChartProps {
  data: DashboardChartPoint[];
  isLoading: boolean;
}

export default function LineChart({ data, isLoading }: LineChartProps) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const { categories, series } = useMemo(
    () =>
      formatChart(data, [
        { key: "revenue", name: "수익", color: "#4338CA" },
        { key: "users", name: "방문자", color: "#047857" },
      ]),
    [data]
  );

  const options: Options = {
    chart: {
      type: "line",
      height: 240,
    },
    title: {
      text: "수익 및 방문자 추이",
      margin: 0,
      style: {
        opacity: 0,
      },
    },
    accessibility: {
      enabled: true,
      description:
        "대시보드의 기간별 수익과 방문자 수 변화를 보여주는 선형 차트입니다.",
      point: {
        valueDescriptionFormat:
          "{index}. {xDescription}, {series.name}: {point.y}",
      },
    },
    xAxis: {
      categories,
      title: {
        text: undefined,
      },
      accessibility: {
        description: "차트의 기준 기간",
      },
    },
    yAxis: {
      title: {
        text: undefined,
      },
      labels: {
        enabled: false,
      },
      accessibility: {
        description: "수익과 방문자 수",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      shared: true,
    },
    credits: {
      enabled: false,
    },
    series: series as SeriesOptionsType[],
  };

  if (isLoading) {
    return (
      <div
        className={`${lineChartBaseClass} w-full h-[240px]`}
        aria-label="수익 및 방문자 추이 차트"
        aria-busy="true"
      >
        <Skeleton className="w-full h-[240px]" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div
      className={`${lineChartBaseClass} w-full h-[240px]`}
      aria-label="수익 및 방문자 추이 차트"
      aria-busy="false"
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </div>
  );
}
