export interface SessionUser {
  userId: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
}
