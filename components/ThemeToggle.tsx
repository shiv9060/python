"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const themeKey = "raghav-theme";

type Theme = "theme-dark" | "theme-light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("theme-dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(themeKey) as Theme | null;
    const preferred = stored ?? "theme-dark";
    document.documentElement.classList.remove("theme-dark", "theme-light");
    document.documentElement.classList.add(preferred);
    setTheme(preferred);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "theme-dark" ? "theme-light" : "theme-dark";
    document.documentElement.classList.remove("theme-dark", "theme-light");
    document.documentElement.classList.add(nextTheme);
    window.localStorage.setItem(themeKey, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-[color:var(--border)] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--text-primary)]"
    >
      {theme === "theme-dark" ? (
        <>
          <Moon size={14} />
          Dark
        </>
      ) : (
        <>
          <Sun size={14} />
          Light
        </>
      )}
    </button>
  );
}
