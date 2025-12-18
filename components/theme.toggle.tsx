"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <SidebarMenuButton
      tooltip="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun /> : <Moon />}
      <span>{isDark ? "Dark mode" : "Light mode"}</span>
    </SidebarMenuButton>
  );
}
