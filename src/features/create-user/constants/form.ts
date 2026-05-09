import { getToday } from "@design-system/lib/date";
import { User } from "@/features/users/types/user.types";
import { ROLE_OPTIONS, STATUS_OPTIONS } from "./options";

const today = getToday();

export const INIT_FORM_VALUE: Partial<User> = {
  id: "",
  name: "",
  email: "",
  role: undefined,
  status: undefined,
  joinedAt: today,
};

export const USER_FORM_FIELDS = [
  { key: "id", label: "아이디", placeholder: "gildong123", type: "text" },
  { key: "name", label: "이름", placeholder: "홍길동", type: "text" },
  {
    key: "email",
    label: "이메일",
    placeholder: "gildong@example.com",
    type: "text",
  },
  {
    key: "role",
    label: "권한",
    placeholder: "선택해 주세요.",
    type: "dropdown",
    options: ROLE_OPTIONS,
  },
  {
    key: "status",
    label: "상태",
    placeholder: "선택해 주세요.",
    type: "dropdown",
    options: STATUS_OPTIONS,
  },
] as const;
