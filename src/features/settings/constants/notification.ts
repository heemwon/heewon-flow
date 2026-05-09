import { DropdownOption } from "@design-system/components/dropdown/Dropdown";

export const NOTIFICATION_ITEMS = [
  {
    key: "emailNotification",
    title: "이메일 알림",
    description: "시스템 관련 주요 알림을 이메일로 받아보세요.",
    id: "settings-email-selected",
  },
  {
    key: "userJoinNotification",
    title: "신규 사용자 알림",
    description: "새로운 사용자가 가입하면 이메일로 알려드려요.",
    id: "settings-joinusers-selected",
  },
] as const;

export const REPORT_CYCLE_OPTIONS: DropdownOption[] = [
  {
    value: "daily",
    label: "Daily (일간)",
  },
  {
    value: "weekly",
    label: "Weekly (주간)",
  },
  {
    value: "monthly",
    label: "Monthly (월간)",
  },
];

export const SESSION_TIMEOUT_OPTIONS: DropdownOption[] = [
  {
    value: "15m",
    label: "15분",
  },
  {
    value: "30m",
    label: "30분",
  },
  {
    value: "1h",
    label: "1시간",
  },
];
