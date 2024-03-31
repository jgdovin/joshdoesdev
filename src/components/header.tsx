"use client";

import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-2 flex flex-row place-content-between">
      <Link href="/">
        <h2 className="bg-gradient-to-r from-destructive to-accent bg-clip-text text-transparent dark:from-muted dark:to-primary">
          JoshDoes.Dev
        </h2>
      </Link>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
