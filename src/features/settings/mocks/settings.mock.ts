import type { Settings } from "../types/settings.types";

export const settingsMock: Settings = {
  workspaceName: "Walking Admin",
  adminName: "이희원",
  adminEmail: "heewon@example.com",
  emailNotification: true,
  userJoinNotification: true,
  reportCycle: "weekly",
  twoFactorAuth: false,
  sessionTimeout: "30m",
};
