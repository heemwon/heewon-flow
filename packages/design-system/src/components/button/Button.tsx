import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

import {
  buttonBaseClass,
  buttonSizeClass,
  buttonVariantClass,
} from "./button.styles";
import { cn } from "@design-system/lib/cn";

type ButtonOwnProps = {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  as?: ElementType;
  children: ReactNode;
};

type ButtonProps<T extends ElementType> = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps>;

export default function Button<T extends ElementType = "button">({
  variant = "primary",
  size = "md",
  className,
  as = "button",
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";

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
