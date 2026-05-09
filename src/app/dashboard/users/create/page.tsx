import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getUserData } from "@/features/users/api/user.api";
import CreateUser from "@/features/create-user";

export default async function CreateUsersPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users", "detail", { search: undefined, status: undefined }],
    queryFn: () => getUserData({}),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CreateUser />
    </HydrationBoundary>
  );
}
