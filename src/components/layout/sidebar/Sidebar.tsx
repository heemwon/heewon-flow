"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useSidebarActions, useSidebarOpen } from "store/useSidebarStore";
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

  const isDesktopSidebarOpen = useSidebarOpen();
  const { toggleSidebar } = useSidebarActions();

  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const shouldTrapFocus = isMobile && isMobileMenuOpen;

  useEffect(() => {
    console.log("isMobile", isMobile);
    if (isMobile) {
      setIsMobileMenuOpen(isDesktopSidebarOpen);
    } else {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isDesktopSidebarOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useFocusTrap({
    isOpen: shouldTrapFocus,
    containerRef: sidebarRef,
    onClose: () => setIsMobileMenuOpen(false),
  });

  useBodyScrollLock(shouldTrapFocus);

  const handleMenuClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <aside
      ref={sidebarRef}
      tabIndex={-1}
      className={clsx(sidebarBaseClass, isMobileMenuOpen && sidebarIsOpenClass)}
    >
      <div
        className={clsx(
          sidebarToggleClass,
          !isDesktopSidebarOpen && sidebarToggleHideClass
        )}
      >
        <IconButton
          label={`사이드 메뉴 ${isDesktopSidebarOpen ? "닫기" : "열기"}`}
          onClick={toggleSidebar}
          className={sidebarToggleButtonClass}
          aria-expanded={isMobile ? isMobileMenuOpen : isDesktopSidebarOpen}
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
        <ul
          className={cn(
            sidebarMenuClass,
            !isDesktopSidebarOpen && sidebarMenuHideClass
          )}
        >
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
