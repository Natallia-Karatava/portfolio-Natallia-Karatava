import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const projects = [
    {
      name: "Simple page - just HTML and CSS",
      image: "src/images/projects-img/simple-page-html-css.png",
      url: "https://github.com/Natallia-Karatava/landing-page-projeckt?tab=readme-ov-file",
    },
    {
      name: "Website for the artist",
      image: "src/images/projects-img/website-for-the-artist-min.png",
      url: "https://helena-klaus.de/galerie/",
    },
    {
      name: "Guess the color game!",
      image: "src/images/projects-img/game-guess-the-color.png",
      url: "https://github.com/Natallia-Karatava/game-Guess-the-color",
    },

    {
      name: "Website for an IT company - design",
      image: "src/images/projects-img/website-for-an-it-company.png",
      url: "https://visutechsystem.by/en/",
    },
    {
      name: "Website concepts for a museum",
      image: "src/images/projects-img/online-museum.png",
      url: "https://www.behance.net/gallery/134427745/koncept-sajta-dlja-muzeja-abstrakcionizma",
    },
    {
      name: "App for event search - design",
      image: "src/images/projects-img/App-LAZY.png",
      url: "https://www.behance.net/gallery/134278605/koncept-mobilnogo-prilozhenija-dlja-poiska-sobytij",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getVisibleProjects = () => {
    if (currentIndex === 0) {
      return [
        projects[projects.length - 1],
        projects[currentIndex],
        projects[currentIndex + 1],
      ];
    }
    if (currentIndex === projects.length - 1) {
      return [projects[currentIndex - 1], projects[currentIndex], projects[0]];
    }
    return [
      projects[currentIndex - 1],
      projects[currentIndex],
      projects[currentIndex + 1],
    ];
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section
      id="projects"
      className="bg-white text-gray-800 py-16 px-8 relative scroll-mt-16"
    >
      <div className="relative w-full overflow-visible">
        <h2 className="text-4xl font-semibold text-center mb-8">My Projects</h2>
        <div className="relative max-w-6xl mx-auto flex items-center justify-center overflow-visible">
          {/* Кнопка влево */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 text-white bg-gray-800 hover:bg-red-600 hover:text-gray-800 p-3 rounded-full m-10"
          >
            <FaArrowLeft size={24} />
          </button>

          {/* Контейнер с карточками */}
          <div className="flex w-full justify-around items-center gap-2 sm:gap-4 md:gap-6">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className={`flex-shrink-0 transition-transform duration-500 ease-out ${
                  index === 1 ? "scale-100 opacity-100" : "scale-90 opacity-50 "
                } w-11/12 sm:w-9/12 md:w-1/3`}
                style={{
                  transform:
                    index === 0
                      ? "translateX(0%)"
                      : index === 2
                      ? "translateX(0%)"
                      : "translateX(0)",
                }}
              >
                <div className="rounded-lg overflow-hidden shadow-lg">
                  {/* Верхняя часть карточки — фон с изображением */}
                  <div
                    className="min-h-[15rem] bg-cover bg-center transition-all duration-500"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover", // Фиксируем размер
                      backgroundPosition: "center", // Центрируем изображение
                      filter: index === 1 ? "none" : "grayscale(100%)",
                    }}
                  ></div>
                  {/* Нижняя белая плашка */}
                  <div className="bg-white p-4">
                    <h3 className="text-lg font-semibold text-gray-800 ml-2">
                      {project.name}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-gray-800  px-2 hover:text-red-600 transition duration-300"
                    >
                      Go to view
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка вправо */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 text-white bg-gray-800 p-3 hover:bg-red-600 hover:text-gray-800 rounded-full m-10"
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
