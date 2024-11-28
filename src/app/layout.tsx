import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import { raleway } from "@/lib/fonts";
import Background from "@/components/custom/Background";

export const metadata: Metadata = {
  title: "Josh Does Dev",
  description: "Home for all things I do",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-100 ${raleway.className}`}
      >
        <div className="flex min-h-screen flex-col">
          <Background />
          <Analytics />
          <Header />
          <main className="container mx-auto flex-grow px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
