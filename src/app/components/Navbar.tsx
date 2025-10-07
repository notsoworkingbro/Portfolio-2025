"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle"; // ✅ adjust path if needed

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white dark:bg-neutral-900 transition-colors duration-300">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        MyPortfolio
      </h1>

      {/* Navigation Links + Theme Toggle */}
      <div className="flex items-center gap-6">
        <ul className="flex gap-6">
          <li>
            <Link
              href="#projects"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* 🌗 Theme Toggle Button */}
        <ModeToggle />
      </div>
    </nav>
  );
}
