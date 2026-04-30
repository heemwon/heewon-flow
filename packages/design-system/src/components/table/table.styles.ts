export const tableWrapperClass =
  "overflow-hidden border border-gray-200 rounded-md ";

export const tableBaseClass = "w-full table-fixed divide-y divide-gray-200 ";

export const tableBodyClass = "divide-y divide-gray-200 ";

export const tableRowClass = "bg-white " + "hover:bg-gray-100 ";

export const tableRowVariantClass = {
  disabled: "opacity-60",
  selected: "bg-primary-100 hover:bg-primary-100 ",
} as const;

export const tableCellClass =
  "px-xs py-xl text-gray-900 text-body-md " + "first:pl-xxl last:pr-xxl ";

export const tableCellEmptyClass =
  "py-[78px] text-gray-900 text-heading-md text-center ";
export const tableCellEmptySpanClass =
  "inline-block mt-xxs w-full text-gray-500 text-body-md";

export const tableHeaderCellClass =
  "px-xs py-xl text-gray-900 text-body-lg font-bold text-left " +
  "first:pl-xxl last:pr-xxl ";
