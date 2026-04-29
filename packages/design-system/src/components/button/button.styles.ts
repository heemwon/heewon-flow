export const buttonBaseClass =
  "flex items-center justify-center w-full rounded-sm transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 " +
  "disabled:opacity-60";

export const buttonVariantClass = {
  primary: "text-white bg-primary-600 hover:not-disabled:bg-primary-700",
  secondary:
    "border border-primary-600 bg-white text-primary-600 hover:not-disabled:border-primary-700 hover:not-disabled:text-primary-700",
  danger: "bg-state-error text-white",
  ghost:
    "bg-gray-200 text-gray-700 hover:not-disabled:bg-gray-500 hover:not-disabled:text-white",
} as const;

export const buttonSizeClass = {
  sm: "min-w-[90px] px-xxs py-xs text-body-md",
  md: "min-w-[120px] px-xs py-sm text-heading-md",
  lg: "min-w-[90px] px-sm py-md text-heading-lg",
} as const;
