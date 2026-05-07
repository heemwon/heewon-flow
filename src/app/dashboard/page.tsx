import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import Dashboard from "@/features/dashboard";
import { getDashboardData } from "@/features/dashboard/api/dashboard.api";
import { getSessionUser } from "../shared/api/session.api";

export default async function Page() {
  const queryClient = new QueryClient();

  const userSession = await getSessionUser();
  const isLogined = !!userSession?.userId;

  if (isLogined) {
    await queryClient.prefetchQuery({
      queryKey: ["dashboard", "detail", userSession.userId],
      queryFn: getDashboardData,
    });
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Dashboard initialUserId={userSession?.userId} />
    </HydrationBoundary>
  );
}
