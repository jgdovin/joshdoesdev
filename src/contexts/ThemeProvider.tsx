"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const themeNames = ["light", "dark"] as const;

export type ThemeNames = (typeof themeNames)[number];

type ThemeStateTypes = {
  theme: ThemeNames;
  toggleTheme: () => void;
};

const Theme = createContext({} as ThemeStateTypes);

export const useThemeContext = () => useContext(Theme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTheme, setActiveTheme] = useState<ThemeNames>(
    "dark" as ThemeNames,
  );

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme
      ? (storedTheme as ThemeNames)
      : prefersDark
        ? "dark"
        : "light";
    setActiveTheme(initialTheme);
  }, []);

  const toggleActiveTheme = () => {
    const newTheme =
      activeTheme === themeNames[0] ? themeNames[1] : themeNames[0];
    setActiveTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Theme.Provider
      value={{ theme: activeTheme, toggleTheme: toggleActiveTheme }}
    >
      <div className={`theme-${activeTheme}`}>{children}</div>
    </Theme.Provider>
  );
};
