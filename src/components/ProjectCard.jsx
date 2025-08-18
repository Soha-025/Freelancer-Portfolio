export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="rounded-md mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        View Project
      </a>
    </div>
  );
}
