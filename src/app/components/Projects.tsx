import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website showcasing my skills and projects.",
    tech: ["React", "TailwindCSS"],
    image: "/images/portfolio.png",
    link: "#",
  },
  {
    title: "3D Modeling",
    description: "3D modeling work using Blender.",
    tech: ["Blender"],
    image: "/images/modeling.png",
    link: "#",
  },
];

//  Define colors for each technology
const techColors: Record<string, string> = {
  React: "bg-sky-100 text-sky-700 dark:bg-sky-800 dark:text-sky-200",
  TailwindCSS: "bg-teal-100 text-teal-700 dark:bg-teal-800 dark:text-teal-200",
  Blender: "bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200",
  NextJS: "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white",
  TypeScript: "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200",
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  {project.description}
                </p>

                {/* 🎨 Tech tags with unique colors */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-sm px-3 py-1 rounded-full font-medium ${
                        techColors[t] || "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block mt-5 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
