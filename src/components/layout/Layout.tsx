"use client";

import { ReactNode, useState } from "react";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import clsx from "clsx";
import { layoutBaseClass, layoutWideClass } from "./layout.styles";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />

      <div className="flex flex-col flex-1">
        <Header isOpen={isOpen} />
        <main className={clsx(layoutBaseClass, !isOpen && layoutWideClass)}>
          {children}
        </main>
      </div>
    </div>
  );
}
