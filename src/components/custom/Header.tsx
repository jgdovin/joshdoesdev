import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#4b535e] to-[#353e4b] text-white shadow-lg transition-all hover:from-[#353e4b] hover:to-[#4b535e]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold"
          >
            <Cpu size={32} />
            <span>Josh Does Dev</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-blue-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-blue-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-blue-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-blue-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
