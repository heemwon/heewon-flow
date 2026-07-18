import Badge from "@design-system/components/badge/Badge";
import { formatBadge } from "@/features/dashboard/mappers/formatBadge";
import type { RowCell } from "@/features/users/components/UserTable";
import type { User } from "@/features/users/types/user.types";

export const DASHBOARD_RECENT_USER_ROW_CELLS: RowCell<User>[] = [
  { header: "이름", render: (user) => user.name },
  { header: "이메일", render: (user) => user.email },
  {
    header: "상태",
    render: (user) => (
      <Badge variant={formatBadge(user.status)}>{user.status}</Badge>
    ),
  },
  { header: "권한", render: (user) => user.role },
  { header: "가입일", render: (user) => user.joinedAt },
];

export const DASHBOARD_RECENT_USER_COLUMNS = [
  { id: "dashboard-name", width: "120px" },
  { id: "dashboard-email" },
  { id: "dashboard-status", width: "120px" },
  { id: "dashboard-role", width: "120px" },
  { id: "dashboard-join", width: "150px" },
];
