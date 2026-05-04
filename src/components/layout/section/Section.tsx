import { ReactNode } from "react";
import clsx from "clsx";

import { sectionBaseClass, sectionTitleClass } from "./section.styles";
import { cn } from "@design-system/lib/cn";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleSrOnly?: boolean;
  titleTag?: "h2" | "h3" | "h4";
}

export default function Section({
  id,
  title,
  children,
  className,
  titleSrOnly = false,
  titleTag: TitleTag = "h2",
}: SectionProps) {
  return (
    <section aria-labelledby={id} className={cn(sectionBaseClass, className)}>
      <TitleTag
        id={id}
        className={clsx(sectionTitleClass, titleSrOnly && "sr-only")}
      >
        {title}
      </TitleTag>
      {children}
    </section>
  );
}
