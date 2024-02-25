"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";

const Header = () => {  
  return (
    <header className="flex flex-row place-content-between mb-2">
      <h2 className="bg-gradient-to-r to-accent from-destructive dark:to-primary dark:from-muted text-transparent bg-clip-text">JoshDoes.Dev</h2>
      <ThemeSwitcher />
    </header>
  )
};

export default Header;