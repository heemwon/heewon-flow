"use client";

import { useEffect } from "react";

export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const originalOverflow = window.getComputedStyle(document.body).overflow;
    const originalScrollbarGutter = document.body.style.scrollbarGutter;

    document.body.style.overflow = "hidden";
    document.body.style.scrollbarGutter = "stable";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.scrollbarGutter = originalScrollbarGutter;
    };
  }, [isLocked]);
}
