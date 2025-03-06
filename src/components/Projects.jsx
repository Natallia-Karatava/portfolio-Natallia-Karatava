import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "src/images/simple-page-only-html-css.png",
    title: "Simple page - just HTML and CSS",
    link: "https://github.com/Natallia-Karatava/landing-page-projeckt?tab=readme-ov-file",
  },
  {
    id: 2,
    image: "src/images/simple-page-only-html-css.png",
    title: "Simple page - just HTML and CSS",
    link: "https://github.com/Natallia-Karatava/landing-page-projeckt?tab=readme-ov-file",
  },
  {
    id: 3,
    image: "src/images/simple-page-only-html-css.png",
    title: "Simple page - just HTML and CSS",
    link: "https://github.com/Natallia-Karatava/landing-page-projeckt?tab=readme-ov-file",
  },
  {
    id: 4,
    image: "src/images/simple-page-only-html-css.png",
    title: "Simple page - just HTML and CSS",
    link: "https://github.com/Natallia-Karatava/landing-page-projeckt?tab=readme-ov-file",
  },
  {
    id: 5,
    image: "src/images/simple-page-only-html-css.png",
    title: "Simple page - just HTML and CSS",
    link: "https://github.com/Natallia-Karatava/landing-page-projeckt?tab=readme-ov-file",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="projects"
      className="bg-white text-gray-800 py-16 px-8 relative"
    >
      <h2 className="text-4xl font-semibold text-center mb-8">My Projects</h2>
      <div className="relative max-w-6xl mx-auto flex items-center justify-center overflow-hidden">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-gray-800 bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 transition top-1/2 transform -translate-y-1/2"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Проекты */}
        <div className="flex w-full justify-center items-center gap-6 overflow-hidden">
          {projects.map((project, index) => {
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % projects.length;
            const isPrev =
              index === (currentIndex - 1 + projects.length) % projects.length;

            return (
              <div
                key={project.id}
                className={`relative transition-all duration-500 w-[400px] h-[250px] flex-shrink-0 ${
                  isActive
                    ? "opacity-100 transform scale-100"
                    : isNext
                    ? "opacity-60 transform translate-x-10"
                    : isPrev
                    ? "opacity-60 transform -translate-x-10"
                    : "opacity-40 transform scale-90"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <h3 className="mt-4 text-lg font-medium text-center">
                  {project.title}
                </h3>
                {/* Go Button */}
                <div className="flex justify-center mt-2">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-gray-800 text-lg hover:text-red-600 transition"
                  >
                    Go <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 bg-gray-800 bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 transition top-1/2 transform -translate-y-1/2"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
