"use client";

import { Button } from "@/components/ui/button";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const Icon = mounted && theme === "dark" ? MoonStar : Sun;

  return (
    <Button
      disabled={!mounted || theme === undefined}
      variant="ghost"
      size="sm"
      aria-label="Theme toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Icon className="w-5" />
    </Button>
  );
};
