export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold">Hi, I’m Dale</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Aspiring Game Developer & Web Developer
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        View My Work
      </a>
    </section>
  );
}
