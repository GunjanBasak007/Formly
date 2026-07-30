"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="rounded-xl"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className="
        relative
        overflow-hidden
        rounded-xl
        border-border/60
        bg-background/80
        backdrop-blur-md
        transition-all
        duration-300
        hover:scale-105
        hover:border-violet-500/40
        hover:bg-violet-500/10
        active:scale-95
      "
    >
      <Sun
        className={`
          absolute
          h-5
          w-5
          transition-all
          duration-500
          ${
            isDark
              ? "rotate-0 scale-100"
              : "rotate-90 scale-0"
          }
        `}
      />

      <Moon
        className={`
          absolute
          h-5
          w-5
          transition-all
          duration-500
          ${
            isDark
              ? "-rotate-90 scale-0"
              : "rotate-0 scale-100"
          }
        `}
      />
    </Button>
  );
}