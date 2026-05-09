export type UserStatusUi = UserStatus | "all";
export type UserStatus = "active" | "pending" | "blocked";
export type UserRole = "Admin" | "Editor" | "Viewer";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joinedAt: string;
}
