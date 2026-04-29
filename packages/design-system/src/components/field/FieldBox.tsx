import { ReactNode } from "react";

import { cn } from "@design-system/lib/cn";
import { fieldBoxBaseClass, fieldBoxErrorClass } from "./field.styles";

interface FieldBoxProps {
  children: ReactNode;
  className?: string;
  isError?: boolean;
}

export default function FieldBox({
  children,
  className,
  isError,
}: FieldBoxProps) {
  return (
    <div
      className={cn(
        fieldBoxBaseClass,
        isError && fieldBoxErrorClass,
        className && className
      )}
    >
      {children}
    </div>
  );
}
