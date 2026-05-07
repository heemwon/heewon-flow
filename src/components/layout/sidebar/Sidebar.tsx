"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useSidebarActions, useSidebarOpen } from "store/useSidebarStore";
import { SideMenuIcon } from "@/icons/SideMenuIcon";
import IconButton from "@design-system/components/icon-button/IconButton";
import {
  sidebarBaseClass,
  sidebarMenuClass,
  sidebarMenuHideClass,
  sidebarMenuItemClass,
  sidebarMenuSelectedClass,
  sidebarToggleButtonClass,
  sidebarToggleClass,
  sidebarToggleHideClass,
} from "./sidebar.styles";
import { MENU_LIST } from "./sidebar.constants";
import { cn } from "@design-system/lib/cn";

export default function Sidebar() {
  const pathname = usePathname();
  const isOpen = useSidebarOpen();
  const { toggleSidebar } = useSidebarActions();

  return (
    <aside className={sidebarBaseClass}>
      <div
        className={clsx(sidebarToggleClass, !isOpen && sidebarToggleHideClass)}
      >
        <IconButton
          label={`사이드 메뉴 ${isOpen ? "닫기" : "열기"}`}
          onClick={toggleSidebar}
          className={sidebarToggleButtonClass}
        >
          <SideMenuIcon />
        </IconButton>
      </div>
      <ul className={cn(sidebarMenuClass, !isOpen && sidebarMenuHideClass)}>
        {MENU_LIST.map((menu) => {
          const isSelected = pathname === menu.href;

          return (
            <li key={menu.id} className="">
              <Link
                href={menu.href}
                className={clsx(
                  sidebarMenuItemClass,
                  isSelected && sidebarMenuSelectedClass
                )}
              >
                {menu.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
