"use client"

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Navbar />
        <main className="min-h-screen">
          <ThemeProvider attribute="class">
            {children}
          </ThemeProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
