export const dialogOverlayClass =
  "w-full h-screen flex items-center justify-center bg-gray-900/40 ";

export const dialogPanelClass =
  "relative z-0 flex flex-col gap-md px-lg pt-lg pb-xxxl w-[420px] rounded-lg bg-white shadow-modal " +
  "focus-visible:outline-none";

export const dialogHeaderClass = {
  left: "text-gray-900 text-heading-md ",
  center: "pt-lg pb-xxs text-center text-gray-900 text-heading-lg ",
} as const;

export const dialogFooterClass =
  "flex items-center justify-center gap-xs pt-lg";

export const dialogCloseButtonClass = "absolute top-sm right-sm z-1 p-xs";
