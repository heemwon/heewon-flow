"use client";

import clsx from "clsx";
import { ReactNode } from "react";

import { useSidebarOpen } from "store/useSidebarStore";
import { mainBaseClass, mainWideClass } from "./main.styles";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  const isOpen = useSidebarOpen();

  return (
    <main className={clsx(mainBaseClass, !isOpen && mainWideClass)}>
      {children}
    </main>
  );
}
