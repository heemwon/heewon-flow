"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  useMobileSidebarOpen,
  useSidebarActions,
  useSidebarOpen,
} from "store/useSidebarStore";

import { formatPathnameToTitle } from "@/lib/formatPathname";
import { headerBaseClass, headerWideClass } from "./header.styles";
import IconButton from "@design-system/components/icon-button/IconButton";
import { SideMenuIcon } from "@/icons/SideMenuIcon";
import {
  sidebarToggleButtonClass,
  sidebarToggleButtonMobile,
} from "../sidebar/sidebar.styles";
import { useMediaQuery } from "@/app/shared/hooks/useMediaQuery";

export default function Header() {
  const pathname = usePathname();
  const pageName = formatPathnameToTitle(pathname);

  const isMobile = useMediaQuery("(max-width: 1024px)");
  const isDesktopOpen = useSidebarOpen();
  const isMobileOpen = useMobileSidebarOpen();

  const { toggleSidebar, toggleMobileSidebar } = useSidebarActions();

  const isOpen = isMobile ? isMobileOpen : isDesktopOpen;

  const handleToggleSidebar = () => {
    if (isMobile) {
      toggleMobileSidebar();
      return;
    }

    toggleSidebar();
  };

  return (
    <header
      className={clsx(headerBaseClass, !isDesktopOpen && headerWideClass)}
    >
      <h1>{pageName}</h1>

      <IconButton
        label={`사이드 메뉴 ${isOpen ? "닫기" : "열기"}`}
        onClick={handleToggleSidebar}
        className={clsx(sidebarToggleButtonClass, sidebarToggleButtonMobile)}
        aria-expanded={isOpen}
        aria-controls="sidebar-navigation"
      >
        <SideMenuIcon />
      </IconButton>
    </header>
  );
}
