import type { UserStatusUi } from "../types/user.types";

export const DEFAULT_USER_FILTER: { search: string; status: UserStatusUi } = {
  search: "",
  status: "all",
};
