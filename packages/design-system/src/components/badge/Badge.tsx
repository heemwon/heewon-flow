import { ReactNode } from "react";
import clsx from "clsx";

import { badgeBaseClass, badgeVariantClass } from "./badge.styles";

interface BadgeProps {
  children: ReactNode;
  ariaLabel?: string;
  variant?: "primary" | "success" | "warning" | "info" | "error";
}

export default function Badge({
  children,
  ariaLabel,
  variant = "primary",
}: BadgeProps) {
  return (
    <span
      aria-label={ariaLabel}
      className={clsx(badgeBaseClass, badgeVariantClass[variant])}
    >
      {children}
    </span>
  );
}
