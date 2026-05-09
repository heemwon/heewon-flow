export type ReportCycle = "daily" | "weekly" | "monthly";
export type SessionTimeout = "15m" | "30m" | "1h";

export interface Settings {
  workspaceName: string;
  adminName: string;
  adminEmail: string;
  emailNotification: boolean;
  userJoinNotification: boolean;
  reportCycle: ReportCycle;
  twoFactorAuth: boolean;
  sessionTimeout: SessionTimeout;
}
