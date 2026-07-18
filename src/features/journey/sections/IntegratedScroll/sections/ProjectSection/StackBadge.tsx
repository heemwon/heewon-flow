interface StackBadgeProps {
  stack: string;
}

export default function StackBadge({ stack }: StackBadgeProps) {
  return (
    <span className="relative z-0 font-medium text-title-5 leading-title-5 tracking-tight before:content[''] before:absolute before:bottom-[2px] before:left-0 before:-z-1 before:w-full before:h-[4px] before:bg-brand-point before:rounded-full">
      {stack}
    </span>
  );
}
