import { useQuery } from "@tanstack/react-query";

import { getUserData } from "../api/user.api";
import { usersQueryKeys } from "../constants/queryKeys";
import type { UserStatusUi } from "../types/user.types";

interface Params {
  search?: string;
  status?: UserStatusUi;
}

export const useUserData = ({ search, status }: Params) => {
  return useQuery({
    queryKey: usersQueryKeys.detail({ search, status }),
    queryFn: () => getUserData({ search, status }),
  });
};
