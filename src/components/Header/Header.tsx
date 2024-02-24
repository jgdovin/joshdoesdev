"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";

const Header = () => {  
  return (
    <header className="flex flex-row place-content-between mb-14">
      <span>JoshDoes.Dev</span>
      <ThemeSwitcher />
    </header>
  )
};

export default Header;