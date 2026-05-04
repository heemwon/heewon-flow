"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";

import { headerBaseClass, headerWideClass } from "./header.styles";
import { formatPathnameToTitle } from "@/lib/formatPathname";

interface HeaderProps {
  isOpen: boolean;
}

export default function Header({ isOpen }: HeaderProps) {
  const pathname = usePathname();
  const pageName = formatPathnameToTitle(pathname);

  return (
    <header className={clsx(headerBaseClass, !isOpen && headerWideClass)}>
      <h1>{pageName}</h1>
    </header>
  );
}
