import { useQuery } from "@tanstack/react-query";

import { getUserData } from "../api/user.api";
import type { UserStatusUi } from "../types/user.types";

interface Params {
  search?: string;
  status?: UserStatusUi;
}

export const useUserData = ({ search, status }: Params) => {
  return useQuery({
    queryKey: ["users", "detail", { search, status }],
    queryFn: () => getUserData({ search, status }),
  });
};
