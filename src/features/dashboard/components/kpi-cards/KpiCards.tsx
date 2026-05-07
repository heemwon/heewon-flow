import { DashboardKpi } from "../../types/dashboard.types";
import { kpiCardsBaseClass } from "./kpiCards.styles";
import KpiCard from "./KpiCard";

interface KpiCardsProps {
  data: DashboardKpi[];
  isLoading: boolean;
}

export default function KpiCards({ data, isLoading }: KpiCardsProps) {
  const items: DashboardKpi[] | [] = isLoading
    ? Array.from({ length: 4 })
    : data;

  return (
    <ul className={kpiCardsBaseClass}>
      {items.map((card, index) => (
        <KpiCard key={card?.id ?? index} isLoading={isLoading} data={card} />
      ))}
    </ul>
  );
}
