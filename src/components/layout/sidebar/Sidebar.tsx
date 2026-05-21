"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  useMobileSidebarOpen,
  useSidebarActions,
  useSidebarOpen,
} from "store/useSidebarStore";
import { SideMenuIcon } from "@/icons/SideMenuIcon";
import IconButton from "@design-system/components/icon-button/IconButton";
import { cn } from "@design-system/lib/cn";
import { useFocusTrap } from "@design-system/hooks/useFocusTrap";
import { useBodyScrollLock } from "@design-system/hooks/useBodyScrollLock";

import {
  sidebarBaseClass,
  sidebarIsOpenClass,
  sidebarMenuClass,
  sidebarMenuContainerClass,
  sidebarMenuHideClass,
  sidebarMenuItemClass,
  sidebarMenuSelectedClass,
  sidebarToggleButtonClass,
  sidebarToggleClass,
  sidebarToggleHideClass,
} from "./sidebar.styles";
import { MENU_LIST } from "./sidebar.constants";
import { useMediaQuery } from "@/app/shared/hooks/useMediaQuery";

export default function Sidebar() {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLElement>(null);

  const isMobile = useMediaQuery("(max-width: 1024px)");
  const isDesktopOpen = useSidebarOpen();
  const isMobileOpen = useMobileSidebarOpen();

  const { toggleSidebar, toggleMobileSidebar, setMobileSidebar } =
    useSidebarActions();

  const isOpen = isMobile ? isMobileOpen : isDesktopOpen;
  const shouldTrapFocus = isMobile && isMobileOpen;

  useEffect(() => {
    if (isMobile) {
      setMobileSidebar(false);
    }
  }, [isMobile, setMobileSidebar]);

  useEffect(() => {
    setMobileSidebar(false);
  }, [pathname, setMobileSidebar]);

  useFocusTrap({
    isOpen: shouldTrapFocus,
    containerRef: sidebarRef,
    onClose: () => setMobileSidebar(false),
  });

  useBodyScrollLock(shouldTrapFocus);

  const handleToggleSidebar = () => {
    if (isMobile) {
      toggleMobileSidebar();
      return;
    }

    toggleSidebar();
  };

  const handleMenuClick = () => {
    if (isMobile) {
      setMobileSidebar(false);
    }
  };

  return (
    <aside
      ref={sidebarRef}
      tabIndex={-1}
      className={clsx(sidebarBaseClass, isOpen && sidebarIsOpenClass)}
    >
      <div
        className={clsx(sidebarToggleClass, !isOpen && sidebarToggleHideClass)}
      >
        <IconButton
          label={`사이드 메뉴 ${isOpen ? "닫기" : "열기"}`}
          onClick={handleToggleSidebar}
          className={sidebarToggleButtonClass}
          aria-expanded={isOpen}
          aria-controls="sidebar-navigation"
        >
          <SideMenuIcon />
        </IconButton>
      </div>

      <nav
        id="sidebar-navigation"
        aria-label="주요 메뉴"
        className={sidebarMenuContainerClass}
      >
        <ul className={cn(sidebarMenuClass, !isOpen && sidebarMenuHideClass)}>
          {MENU_LIST.map((menu) => {
            const isSelected = pathname === menu.href;

            return (
              <li key={menu.id}>
                <Link
                  href={menu.href}
                  className={clsx(
                    sidebarMenuItemClass,
                    isSelected && sidebarMenuSelectedClass
                  )}
                  aria-current={isSelected ? "page" : undefined}
                  onClick={handleMenuClick}
                >
                  {menu.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
