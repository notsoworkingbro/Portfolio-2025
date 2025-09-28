export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-50 dark:bg-neutral-800">
      <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Example project card */}
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6">
          <h4 className="text-xl font-semibold">My Game Project</h4>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            A Unity 3D game built with C# and custom mechanics.
          </p>
        </div>
      </div>
    </section>
  );
}
