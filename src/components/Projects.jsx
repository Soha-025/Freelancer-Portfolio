import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and TailwindCSS.",
    image: "/images/P2.jpg",   
    link: "https://github.com/Soha-025/Portfolio.git"
  },
  {
    title: "E-Commerce Store",
    description: "A responsive store with cart and checkout features.",
    image: "/images/E1.jpg",   
    link: "https://github.com/Soha-025/E-Commerce-Website.git"
  },
  {
    title: "My App",
    description: "A modern, minimal React application styled with Tailwind CSS.",
    image: "/images/A1.png",   
    link: "https://github.com/Soha-025/My-App.git"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
}
