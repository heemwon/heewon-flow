import type { SVGProps } from "react";

interface ChevronDownIconProps extends SVGProps<SVGSVGElement> {}

export function ChevronDownIcon({ ...props }: ChevronDownIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 6L7.64213 11M12.5 6L7.88951 11"
        stroke="#6B7280"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
