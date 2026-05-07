import Skeleton from "@design-system/components/skeleton/Skeleton";
import { DashboardKpi } from "../../types/dashboard.types";
import {
  kpiCardBaseClass,
  kpiCardChangeClass,
  kpiCardDescBaseClass,
  kpiCardTitleBaseClass,
  kpiCardValueBaseClass,
} from "./kpiCards.styles";

interface KpiCardProps {
  data?: DashboardKpi;
  isLoading: boolean;
}

export default function KpiCard({ data, isLoading }: KpiCardProps) {
  if (isLoading) {
    return (
      <li className={kpiCardBaseClass}>
        <Skeleton className="w-[38px] h-[18px]" />
        <Skeleton className="w-full h-[28px]" />
        <span className={kpiCardDescBaseClass}>
          <Skeleton className="w-full h-[16px]" />
        </span>
      </li>
    );
  }

  if (!data) return null;

  return (
    <li className={kpiCardBaseClass}>
      <em className={kpiCardTitleBaseClass}>{data.title}</em>
      <strong className={kpiCardValueBaseClass}>{data.value}</strong>
      <span className={kpiCardDescBaseClass}>
        {data.description}
        <span className={kpiCardChangeClass[data.trend]}>{data.change}</span>
      </span>
    </li>
  );
}
