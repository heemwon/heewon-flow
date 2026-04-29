import clsx from "clsx";
import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

import {
  buttonBaseClass,
  buttonSizeClass,
  buttonVariantClass,
} from "./button.styles";

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
      className={clsx(
        buttonBaseClass,
        buttonVariantClass[variant],
        buttonSizeClass[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
