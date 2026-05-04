"use client";

import { useMemo, useRef } from "react";
import Highcharts from "highcharts";
import type { Options, SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { formatChart } from "@/lib/formatChart";
import { DashboardChartPoint } from "../../types/dashboard.types";
import { lineChartBaseClass } from "./lineChart.styles";

interface LineChartProps {
  data: DashboardChartPoint[];
}

export default function LineChart({ data }: LineChartProps) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { categories, series } = useMemo(
    () =>
      formatChart(data, [
        { key: "revenue", name: "수익" },
        { key: "users", name: "방문자" },
      ]),
    [data]
  );

  const options: Options = {
    chart: {
      height: 240,
    },
    title: { text: "" },
    xAxis: {
      categories,
    },
    yAxis: {
      title: undefined,
    },
    legend: { enabled: false },
    credits: { enabled: false },
    series: series as SeriesOptionsType[],
  };

  return (
    <div className={lineChartBaseClass}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </div>
  );
}
