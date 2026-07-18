import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getUserData } from "@/features/users/api/user.api";
import Users from "@/features/users";
import { DEFAULT_USER_FILTER } from "@/features/users/constants/filters";
import { usersQueryKeys } from "@/features/users/constants/queryKeys";

export default async function UsersPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: usersQueryKeys.detail(DEFAULT_USER_FILTER),
    queryFn: () => getUserData(DEFAULT_USER_FILTER),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Users />
    </HydrationBoundary>
  );
}
