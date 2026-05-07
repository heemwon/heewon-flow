export const dropdownBaseClass = "group flex flex-col gap-xxs relative";

export const dropdownTriggerClass = "disabled:opacity-60";

export const dropdownValueClass = "flex-1 text-left truncate";

export const dropdownIconClass = "transition-transform";
export const dropdownIconIsOpenClass = "rotate-180";

export const dropdownListClass =
  "overflow-hidden absolute top-[54px] z-1 w-full border border-gray-200 rounded-sm divide-y divide-gray-200";

export const dropdownOptionClass =
  "p-sm w-full text-left text-body-lg text-gray-900 bg-white truncate " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset " +
  "hover:bg-gray-50 " +
  "disabled:opacity-40";
export const dropdownOptionSelectedClass =
  "relative pr-xxxl " +
  "after:content[''] after:absolute after:left-[calc(100%-28px)] after:top-1/2 after:w-xs after:h-xs after:rounded-full after:-translate-y-1/2 after:bg-gray-500";
