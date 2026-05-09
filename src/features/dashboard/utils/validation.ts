import {
  validateEmail,
  validateId,
  validateName,
} from "@design-system/lib/validator";
import { User } from "@/features/users/types/user.types";

export const DASHBOARD_HELP_MSG = {
  ROLE: {
    REQUIRED: "권한을 선택해 주세요.",
  },
  STATUS: {
    REQUIRED: "상태 값을 선택해 주세요.",
  },
} as const;

export const validateUserForm = (values: Partial<User>) => {
  const errors: Record<string, string> = {};

  const idRes = validateId(values.id ?? "");
  if (!idRes.isValid) errors.id = idRes.message;

  const nameRes = validateName(values.name ?? "");
  if (!nameRes.isValid) errors.name = nameRes.message;

  const emailRes = validateEmail(values.email ?? "");
  if (!emailRes.isValid) errors.email = emailRes.message;

  if (!values.role) {
    errors.role = DASHBOARD_HELP_MSG.ROLE.REQUIRED;
  }

  if (!values.status) {
    errors.status = DASHBOARD_HELP_MSG.STATUS.REQUIRED;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
