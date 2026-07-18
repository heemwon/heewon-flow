import { DEFAULT_USER_FILTER } from "./filters";
import type { UserStatusUi } from "../types/user.types";

interface UserFilterParams {
  search?: string;
  status?: UserStatusUi;
}

export const usersQueryKeys = {
  detail: (params: UserFilterParams = DEFAULT_USER_FILTER) =>
    ["users", "detail", params] as const,
};
