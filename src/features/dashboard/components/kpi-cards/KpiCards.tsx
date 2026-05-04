import { DashboardKpi } from "../../types/dashboard.types";
import { kpiCardsBaseClass } from "./kpiCards.styles";
import KpiCard from "./KpiCard";

interface KpiCardsProps {
  data: DashboardKpi[];
  isLoading: boolean;
}

export default function KpiCards({ data, isLoading }: KpiCardsProps) {
  return (
    <ul className={kpiCardsBaseClass}>
      {data.map((card) => (
        <KpiCard key={card.id} isLoading={isLoading} data={card} />
      ))}
    </ul>
  );
}
