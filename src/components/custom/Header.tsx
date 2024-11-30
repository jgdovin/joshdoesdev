"use client";
import Link from "next/link";
import { Cpu, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);
  const router = useRouter();
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed z-10 h-[80px] w-full bg-gradient-to-r from-[#4b535e] to-[#353e4b] text-white shadow-lg transition-all hover:from-[#353e4b] hover:to-[#4b535e]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold"
          >
            <Cpu size={16} />
            <span>Josh Does Dev</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      router.push(item.href);
                    }}
                    className="transition-colors hover:text-blue-200"
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <Sheet open={isOpen} onOpenChange={() => toggleMenu()}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => toggleMenu()}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <VisuallyHidden>
              <SheetTitle>Menu</SheetTitle>
            </VisuallyHidden>
            <SheetContent
              side="right"
              className="w-[150px] sm:w-[400px]"
              aria-describedby={undefined}
            >
              <nav>
                <ul className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-blue-600"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
