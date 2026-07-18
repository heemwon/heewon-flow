import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getUserDataFromSource } from "@/features/users/api/user.server";
import Users from "@/features/users";
import { DEFAULT_USER_FILTER } from "@/features/users/constants/filters";
import { usersQueryKeys } from "@/features/users/constants/queryKeys";

export const dynamic = "force-dynamic";

export default async function UsersPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: usersQueryKeys.detail(DEFAULT_USER_FILTER),
    queryFn: () => getUserDataFromSource(DEFAULT_USER_FILTER),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Users />
    </HydrationBoundary>
  );
}
