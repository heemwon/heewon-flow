import { getToday } from "@design-system/lib/date";
import { User } from "@/features/users/types/user.types";

const today = getToday();

export const INIT_FORM_VALUE: Partial<User> = {
  id: "",
  name: "",
  email: "",
  role: undefined,
  status: undefined,
  joinedAt: today,
};
