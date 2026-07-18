"use client";

import { useEffect } from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <div
      suppressHydrationWarning
      className="rounded-full border border-gray-light shadow-s1"
    >
      <button
        onClick={() => setTheme("light")}
        className={clsx(
          "w-[40px] h-[40px] rounded-full cursor-pointer md:w-[44px] md:h-[44px]",
          theme === "light" && "bg-brand-primary"
        )}
        aria-label="테마를 라이트 모드로 변경"
      >
        ☀️
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={clsx(
          "w-[40px] h-[40px] rounded-full cursor-pointer md:w-[44px] md:h-[44px]",
          theme === "dark" && "bg-gray-light"
        )}
        aria-label="테마를 다크 모드로 변경"
      >
        🌙
      </button>
    </div>
  );
}
