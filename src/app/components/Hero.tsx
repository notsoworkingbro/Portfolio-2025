"use client";

import Image from "next/image";


export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 px-6 md:px-16">
      {/* Left Image Section */}
      <div className="w-48 h-48 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-lg">
        <Image
          src="/5663140-removebg-preview.png" // 
          alt="Dale's Profile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Text Section */}
      <div>
        <h2 className="text-4xl md:text-6xl font-bold">Hi, I’m Dale</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Aspiring Game Developer & Web Developer
        </p>
        <a
          href="#projects"
          className="inline-block mt-3 px-3 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
