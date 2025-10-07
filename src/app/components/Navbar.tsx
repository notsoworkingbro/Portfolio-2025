"use client";

export default function Navbar() {

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white dark:bg-neutral-900 transition-colors duration-300">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">MyPortfolio</h1>

      <ul className="flex gap-6 items-center">
        <li>
          <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
        </li>

      </ul>
    </nav>
  );
}
