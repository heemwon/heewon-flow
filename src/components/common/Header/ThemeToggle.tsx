"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, []);

  if (!mounted) {
    return (
      <div className="w-[90px] h-[46px] rounded-full border border-gray-light bg-transparent" />
    );
  }

  return (
    <div className="rounded-full border border-gray-light shadow-s1">
      <button
        onClick={() => setTheme("light")}
        className={clsx(
          "w-[44px] h-[44px] rounded-full cursor-pointer",
          theme === "light" && "bg-brand-primary"
        )}
        aria-label="테마를 라이트 모드로 변경"
      >
        ☀️
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={clsx(
          "w-[44px] h-[44px] rounded-full cursor-pointer",
          theme === "dark" && "bg-gray-light"
        )}
        aria-label="테마를 다크 모드로 변경"
      >
        🌙
      </button>
    </div>
  );
}
