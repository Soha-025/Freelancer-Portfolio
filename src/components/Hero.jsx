export default function Hero() {
  return (
    <section id="home" className="flex flex-col justify-center items-center text-center min-h-screen">
      <h2 className="text-4xl md:text-6xl font-bold mb-6">Hi, I’m Soha Adnan</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
        A passionate freelancer building modern, responsive, and user-friendly websites.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
      >
        View My Work
      </a>
    </section>
  );
}
