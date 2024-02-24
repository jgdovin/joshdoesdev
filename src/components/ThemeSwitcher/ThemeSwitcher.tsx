"use client"
import Switch from '@/components/ui/Switch';
import Label from '@/components/ui/Label';
import { useThemeContext } from '@/contexts/ThemeProvider';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();
  
  return (
    <div className="flex items-center space-x-2">
      <Switch id="theme-switch" checked={theme === "dark"} onClick={() => toggleTheme()} />
      <Label htmlFor="theme-switch">{theme}</Label>
    </div>
  )
};

export default ThemeSwitcher;