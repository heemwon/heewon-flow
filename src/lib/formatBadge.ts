import { ActivityType } from "@/features/dashboard/types/dashboard.types";

export const formatBadge = (type: ActivityType) => {
  switch (type) {
    case "user":
      return "primary";
    case "payment":
      return "success";
    case "system":
    default:
      return "info";
  }
};
