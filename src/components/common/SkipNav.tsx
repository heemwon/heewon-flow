import { cn } from "@/lib/utils";

interface SkipNavProps {
  href: string;
  title: string;
  className?: string;
}

export default function SkipNav({ href, title, className }: SkipNavProps) {
  return (
    <a
      href={href}
      className={cn(
        "sr-only outline-gray-dark focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[600] focus:rounded-[4px] focus:bg-white focus:p-[4px_8px] focus:shadow-s1",
        className
      )}
    >
      {title}
    </a>
  );
}
