export type UserStatusUi = UserStatus | "all";
export type UserStatus = "active" | "pending" | "blocked";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: UserStatus;
  joinedAt: string;
}
