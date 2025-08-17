export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
        <a
          href="https://github.com/Soha-025/Codantix-Landing-Page.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p className="text-gray-600">A modern responsive landing page.</p>
        </a>

        <a
          href="https://github.com/Soha-025/E-Commerce-Website.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p className="text-gray-600">An e-commerce website with cart system.</p>
        </a>

        <a
          href="https://github.com/Soha-025/Portfolio.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold mb-2">Project 3</h3>
          <p className="text-gray-600">A personal portfolio with React + Tailwind CSS.</p>
        </a>
      </div>
    </section>
  );
}
