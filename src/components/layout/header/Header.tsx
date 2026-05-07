"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";

import { useSidebarOpen } from "store/useSidebarStore";

import { formatPathnameToTitle } from "@/lib/formatPathname";
import { headerBaseClass, headerWideClass } from "./header.styles";

export default function Header() {
  const isOpen = useSidebarOpen();
  const pathname = usePathname();
  const pageName = formatPathnameToTitle(pathname);

  return (
    <header className={clsx(headerBaseClass, !isOpen && headerWideClass)}>
      <h1>{pageName}</h1>
    </header>
  );
}
