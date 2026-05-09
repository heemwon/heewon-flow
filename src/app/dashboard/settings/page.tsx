import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import Settings from "@/features/settings";
import { getSettingsData } from "@/features/settings/api/settings.api";

export default async function SettingsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["settings", "detail"],
    queryFn: getSettingsData,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Settings />
    </HydrationBoundary>
  );
}
