import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

import {
  buttonBaseClass,
  buttonSizeClass,
  buttonVariantClass,
} from "./button.styles";
import { cn } from "@design-system/lib/cn";

type ButtonOwnProps<T extends ElementType> = {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  as?: T;
  children: ReactNode;
};
type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

export default function Button<T extends ElementType = "button">({
  variant = "primary",
  size = "md",
  className,
  as,
  children,
  ...props
}: ButtonProps<T>) {
  const Component: ElementType = as || "button";

  return (
    <Component
      className={cn(
        buttonBaseClass,
        buttonSizeClass[size],
        buttonVariantClass[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
