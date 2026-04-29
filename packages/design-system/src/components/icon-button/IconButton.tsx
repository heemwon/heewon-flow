import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
  className?: string;
}

export default function IconButton({
  children,
  label,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button type="button" aria-label={label} className={className} {...props}>
      {children}
    </button>
  );
}
