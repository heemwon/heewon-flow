import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import Settings from "@/features/settings";
import { getSettingsDataFromSource } from "@/features/settings/api/settings.server";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["settings", "detail"],
    queryFn: getSettingsDataFromSource,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Settings />
    </HydrationBoundary>
  );
}
