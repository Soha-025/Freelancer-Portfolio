import { Code, MonitorSmartphone, Rocket } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-indigo-600">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We provide modern and high-quality web development services with clean
          design and responsive layouts.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 bg-indigo-50 rounded-2xl shadow-md hover:shadow-xl transition">
            <Code className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Web Development
            </h3>
            <p className="text-gray-600">
              Build scalable and modern web apps with React and TailwindCSS.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-purple-50 rounded-2xl shadow-md hover:shadow-xl transition">
            <MonitorSmartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Responsive Design
            </h3>
            <p className="text-gray-600">
              Optimized for all devices with smooth, adaptive layouts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-pink-50 rounded-2xl shadow-md hover:shadow-xl transition">
            <Rocket className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast Deployment
            </h3>
            <p className="text-gray-600">
              Launch projects quickly with modern tools and workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
