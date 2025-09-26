export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white dark:bg-neutral-900">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <ul className="flex gap-6">
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}
