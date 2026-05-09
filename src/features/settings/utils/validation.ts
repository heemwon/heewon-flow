import { validateEmail, validateName } from "@design-system/lib/validator";
import { Settings } from "../types/settings.types";

export const SETTINGS_HELP_MSG = {
  WORKSPACENAME: {
    REQUIRED: "서비스명을 입력해 주세요.",
  },
} as const;

export const validateSettingsForm = (values: Partial<Settings>) => {
  const errors: Record<string, string> = {};

  if (values.workspaceName === "" || !values.workspaceName) {
    errors.workspaceName = SETTINGS_HELP_MSG.WORKSPACENAME.REQUIRED;
  }

  const nameRes = validateName(values.adminName ?? "");
  if (!nameRes.isValid) errors.adminName = nameRes.message;

  const emailRes = validateEmail(values.adminEmail ?? "");
  if (!emailRes.isValid) errors.adminEmail = emailRes.message;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
