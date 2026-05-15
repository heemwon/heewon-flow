"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";

import { useSidebarActions, useSidebarOpen } from "store/useSidebarStore";

import { formatPathnameToTitle } from "@/lib/formatPathname";
import { headerBaseClass, headerWideClass } from "./header.styles";
import IconButton from "@design-system/components/icon-button/IconButton";
import { SideMenuIcon } from "@/icons/SideMenuIcon";
import {
  sidebarToggleButtonClass,
  sidebarToggleButtonMobile,
} from "../sidebar/sidebar.styles";

export default function Header() {
  const isOpen = useSidebarOpen();
  const pathname = usePathname();
  const pageName = formatPathnameToTitle(pathname);

  const { toggleSidebar } = useSidebarActions();

  return (
    <header className={clsx(headerBaseClass, !isOpen && headerWideClass)}>
      <h1>{pageName}</h1>
      <IconButton
        label={`사이드 메뉴 ${isOpen ? "닫기" : "열기"}`}
        onClick={toggleSidebar}
        className={clsx(sidebarToggleButtonClass, sidebarToggleButtonMobile)}
      >
        <SideMenuIcon />
      </IconButton>
    </header>
  );
}
