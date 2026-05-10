export interface ProjectItemBadge {
  label: string;
  variant: "primary" | "success" | "warning" | "info" | "error";
}

export interface ProjectItemButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost" | "danger";
}

export interface ProjectItemPreview {
  img: string;
  label: string;
}

export interface ProjectList {
  index: string;
  title: string;
  badges: ProjectItemBadge[];
  desc: string;
  button: ProjectItemButton;
  preview: ProjectItemPreview;
}
