"use client";
import { createContext, useContext, useState } from 'react';
import useLocalStorage from "react-use-localstorage";

export const themeNames = [
  "light",
  "dark"
] as const;

export type ThemeNames = (typeof themeNames)[number];

type ThemeStateTypes = {
  theme: ThemeNames;
  toggleTheme: () => void;
};

const Theme = createContext({} as ThemeStateTypes);

export const useThemeContext = () => useContext(Theme);

const getInitialTheme = (prefersDark: boolean) => {
  
}

export const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
  const systemDarkMode = window?.matchMedia('(prefers-color-scheme: dark)').matches;
  const [storedTheme, setStoredTheme] = useLocalStorage("theme", systemDarkMode ? 'dark' : 'light');
  const [activeTheme, setActiveTheme] = useState<ThemeNames>(storedTheme as ThemeNames);
  
  const toggleActiveTheme = () => {
    const newTheme = activeTheme === themeNames[0] ? themeNames[1] : themeNames[0];
    setActiveTheme(newTheme);
    setStoredTheme(newTheme);
  }

  return (
      <Theme.Provider value={{theme: activeTheme, toggleTheme: toggleActiveTheme}}>
        <body className={activeTheme}>
          {children}
        </body>
      </Theme.Provider>
    )
}