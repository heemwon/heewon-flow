import {
  ActivityType,
  UserStatus,
} from "@/features/dashboard/types/dashboard.types";

export const formatBadge = (type: ActivityType | UserStatus) => {
  switch (type) {
    case "user":
    case "active":
      return "primary";
    case "payment":
      return "success";
    case "blocked":
      return "error";
    case "system":
    case "pending":
    default:
      return "info";
  }
};
