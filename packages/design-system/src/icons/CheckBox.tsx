import type { SVGProps } from "react";

interface CheckBoxProps extends SVGProps<SVGSVGElement> {}

export function CheckBox({ ...props }: CheckBoxProps) {
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
        d="M6.71731 7.13593C7.36731 6.84202 8.16591 7.09602 8.50122 7.70341L13.208 16.232C13.5433 16.8395 13.2884 17.5701 12.6384 17.864C11.9885 18.1578 11.1898 17.9037 10.8545 17.2965L6.14764 8.76791C5.81239 8.16048 6.06737 7.42989 6.71731 7.13593Z"
        fill="white"
      />
      <path
        d="M13.1928 17.2908C12.8558 17.9079 12.0626 18.1727 11.4212 17.8819C10.7798 17.5911 10.5331 16.8542 10.87 16.237L15.5262 7.7093C15.8632 7.09211 16.6563 6.82724 17.2978 7.11812C17.9391 7.409 18.1862 8.1452 17.8494 8.76233L13.1928 17.2908Z"
        fill="white"
      />
    </svg>
  );
}
