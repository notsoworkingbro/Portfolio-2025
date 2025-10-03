// Projects.tsx
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website showcasing my skills and projects.",
    tech: ["React", "TailwindCSS"],
    image: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "E-Commerce Store",
    description: "An online shop with cart and payment features.",
    tech: ["Next.js", "Stripe", "MongoDB"],
    image: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "Game Development",
    description: "A 2D platformer built in Unity with C# scripting.",
    tech: ["Unity", "C#"],
    image: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "3D Modeling",
    description: "Low poly objects",
    tech: ["Blender"],
    image: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "MALAYAN ESPORTS",
    description: "Low poly objects",
    tech: ["Blender"],
    image: "https://via.placeholder.com/400x250",
    link: "#",
  },
];

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
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
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
