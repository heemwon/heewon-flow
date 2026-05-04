import { useQuery } from "@tanstack/react-query";

import { getDashboardData } from "../api/dashboard.api";

export const useDashboardData = (userId: string) => {
  return useQuery({
    queryKey: ["dashboard", "detail", userId],
    queryFn: () => getDashboardData(),
    enabled: !!userId,
  });
};
