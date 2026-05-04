import type { SVGProps } from "react";

interface SideMenuIconProps extends SVGProps<SVGSVGElement> {}

export function SideMenuIcon({ ...props }: SideMenuIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.2 4V19.6M7.2 20H16.8C18.5673 20 20 18.5673 20 16.8V7.2C20 5.43269 18.5673 4 16.8 4H7.2C5.43269 4 4 5.43269 4 7.2V16.8C4 18.5673 5.43269 20 7.2 20Z"
        stroke="black"
      />
    </svg>
  );
}
