import Badge from "@design-system/components/badge/Badge";
import Skeleton from "@design-system/components/skeleton/Skeleton";
import { formatBadge } from "@/lib/formatBadge";
import { DashboardActivity } from "../../types/dashboard.types";
import {
  activitiesBaseClass,
  activitiesCreatedClass,
  activitiesDescriptionClass,
  activitiesListClass,
} from "./activities.styles";

interface ActivitiesProps {
  data: DashboardActivity[];
  isLoading: boolean;
}

export default function Activities({ data, isLoading }: ActivitiesProps) {
  return (
    <ul className={activitiesBaseClass}>
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className={activitiesListClass}>
              <Skeleton className="w-full h-[22px]" />
            </li>
          ))
        : data.map((activity) => (
            <li key={activity.id} className={activitiesListClass}>
              <Badge variant={formatBadge(activity.type)}>
                {activity.type}
              </Badge>
              <span className={activitiesDescriptionClass}>
                {activity.description}
              </span>
              <span className={activitiesCreatedClass}>
                {activity.createdAt}
              </span>
            </li>
          ))}
    </ul>
  );
}
