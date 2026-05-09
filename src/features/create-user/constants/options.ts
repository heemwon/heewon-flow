import { DropdownOption } from "@design-system/components/dropdown/Dropdown";

export const ROLE_OPTIONS: DropdownOption[] = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "editor",
    label: "Editor",
  },
  {
    value: "viewer",
    label: "Viewer",
  },
] as const;

export const STATUS_OPTIONS: DropdownOption[] = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "blocked",
    label: "Blocked",
  },
];
