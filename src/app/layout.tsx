import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/contexts/ThemeProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Josh Does Dev",
  description: "Home for all things I do",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <ThemeProvider>
        <Header />

        {children}
      </ThemeProvider>
    </html>
  );
}
