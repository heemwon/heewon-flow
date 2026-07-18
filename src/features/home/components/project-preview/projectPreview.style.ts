export const projectPreviewBaseClass =
  "group relative z-0 block aspect-[16/9] w-full overflow-hidden rounded-sm border border-gray-200 bg-white shadow-modal transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600 " +
  "md:h-[340px] md:rounded-md md:hover:-translate-y-[4px] " +
  "after:absolute after:top-0 after:left-0 after:h-full after:w-full after:rounded-sm after:bg-gray-900/60 after:opacity-0 after:transition-opacity after:content[''] " +
  "md:after:rounded-md md:hover:after:opacity-100 md:focus-visible:after:opacity-100 ";

export const projectPreviewTitleClass =
  "absolute top-1/2 left-1/2 z-1 w-max -translate-1/2 text-heading-lg text-white opacity-0 transition-opacity " +
  "md:text-heading-xl md:group-hover:opacity-100 md:group-focus-visible:opacity-100 ";

export const projectPreviewImgClass =
  "object-cover transition-transform duration-300 md:group-hover:scale-[1.03] ";
