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
  data: DashboardKpi;
  isLoading: boolean;
}

export default function KpiCard({ data, isLoading }: KpiCardProps) {
  const { title, value, change, trend, description } = data;

  return (
    <li className={kpiCardBaseClass}>
      {isLoading ? (
        <>
          <Skeleton className="w-xxl h-xxl" />
          <Skeleton className="w-full h-xl" />
          <span className={kpiCardDescBaseClass}>
            <Skeleton className="w-full h-md" />
          </span>
        </>
      ) : (
        <>
          <em className={kpiCardTitleBaseClass}>{title}</em>
          <strong className={kpiCardValueBaseClass}>{value}</strong>
          <span className={kpiCardDescBaseClass}>
            {description}
            <span className={kpiCardChangeClass[trend]}>{change}</span>
          </span>
        </>
      )}
    </li>
  );
}
