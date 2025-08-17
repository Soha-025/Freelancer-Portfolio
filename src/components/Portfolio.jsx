export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">My Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Project 1"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-600 text-sm">
              A modern website built using React and Tailwind CSS.
            </p>
          </div>
          {/* Project 2 */}
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Project 2"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-600 text-sm">
              An e-commerce landing page with responsive design.
            </p>
          </div>
          {/* Project 3 */}
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Project 3"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Project Three</h3>
            <p className="text-gray-600 text-sm">
              A personal portfolio website with animations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
