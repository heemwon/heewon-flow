export const kpiCardsBaseClass =
  "grid grid-cols-4 gap-md min-h-[110px] w-full ";
export const kpiCardBaseClass =
  "flex flex-col gap-xxs p-md min-h-[110px] rounded-md bg-white border border-gray-200 ";

export const kpiCardTitleBaseClass = "not-italic text-gray-700 text-label-md ";
export const kpiCardValueBaseClass = "text-gray-900 text-heading-md ";
export const kpiCardDescBaseClass =
  "flex items-center gap-xl pt-xs text-gray-500 text-caption-xs ";
export const kpiCardChangeClass = {
  increase: "text-state-success",
  decrease: "text-state-warning",
  neutral: "text-state-info",
} as const;
