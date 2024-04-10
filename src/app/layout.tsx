import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import Header from "@/components/header";

import { Analytics } from "@vercel/analytics/react";

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
    <html lang="en" suppressHydrationWarning>
      <body className="mx-auto max-w-lg px-5 py-12 md:max-w-2xl lg:max-w-5xl">
        <Analytics />
        <ThemeProvider enableSystem attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
