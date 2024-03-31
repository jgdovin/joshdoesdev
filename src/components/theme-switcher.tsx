"use client";
import Switch from "@/components/ui/Switch";
import Label from "@/components/ui/Label";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MoonStar, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-switch"
        checked={theme === "dark"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Label htmlFor="theme-switch">
        {theme === "dark" ? <MoonStar /> : <Sun />}
      </Label>
    </div>
  );
};

export default ThemeSwitcher;
