"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

interface SidebarProps {
  isOpen: boolean;
  handleSidebar: () => void;
}

export default function Sidebar({ isOpen, handleSidebar }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={sidebarBaseClass}>
      <div
        className={clsx(sidebarToggleClass, !isOpen && sidebarToggleHideClass)}
      >
        <IconButton
          label={`사이드 메뉴 ${isOpen ? "닫기" : "열기"}`}
          onClick={handleSidebar}
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
