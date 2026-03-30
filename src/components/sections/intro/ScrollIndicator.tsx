export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-[8px] absolute top-1/2 left-1/2 z-[120] -translate-y-1/2 -translate-x-1/2 animate-scroll-guide">
      <h2 className="text-title-2 text-brand-primary leading-title-2 font-bold tracking-tight dark:text-white">
        SCROLL START
      </h2>
      <div
        aria-hidden="true"
        className="relative z-0 w-[24px] h-[40px] border-[2px] border-brand-primary rounded-full after:content[''] after:absolute after:top-[6px] after:left-1/2 z-1 after:w-[4px] after:h-[8px] after:rounded-full after:bg-brand-primary after:-translate-x-1/2 after:animate-bounce dark:border-white dark:after:bg-white"
      />
    </div>
  );
}
