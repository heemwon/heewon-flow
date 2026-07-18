import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import Dashboard from "@/features/dashboard";
import { getDashboardDataFromSource } from "@/features/dashboard/api/dashboard.server";
import { getSessionUser } from "../shared/api/session.api";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const queryClient = new QueryClient();

  const userSession = await getSessionUser();
  const isLogined = !!userSession?.userId;

  if (isLogined) {
    await queryClient.prefetchQuery({
      queryKey: ["dashboard", "detail", userSession.userId],
      queryFn: getDashboardDataFromSource,
    });
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Dashboard initialUserId={userSession?.userId} />
    </HydrationBoundary>
  );
}
