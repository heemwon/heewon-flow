"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      suppressHydrationWarning
      className="rounded-full border border-gray-light shadow-s1"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={clsx(
          "w-[40px] h-[40px] rounded-full cursor-pointer md:w-[44px] md:h-[44px]",
          resolvedTheme === "light" && "bg-brand-primary"
        )}
        aria-pressed={resolvedTheme === "light"}
        aria-label="테마를 라이트 모드로 변경"
      >
        ☀️
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={clsx(
          "w-[40px] h-[40px] rounded-full cursor-pointer md:w-[44px] md:h-[44px]",
          resolvedTheme === "dark" && "bg-gray-light"
        )}
        aria-pressed={resolvedTheme === "dark"}
        aria-label="테마를 다크 모드로 변경"
      >
        🌙
      </button>
    </div>
  );
}
