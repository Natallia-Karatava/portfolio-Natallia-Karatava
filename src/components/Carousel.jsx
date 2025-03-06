import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const projects = [
    {
      name: "Simple page - just HTML and CSS",
      image: "src/images/simple-page-only-html-css.png", // Ссылка на изображение
      url: "https://github.com/Natallia-Karatava/landing-page-projeckt?tab=readme-ov-file", // Ссылка на сайт проекта
    },
    {
      name: "Project 2",
      image: "https://via.placeholder.com/300",
      url: "https://project2.com",
    },
    {
      name: "Project 3",
      image: "https://via.placeholder.com/300",
      url: "https://project3.com",
    },
    {
      name: "Project 4",
      image: "https://via.placeholder.com/300",
      url: "https://project4.com",
    },
    {
      name: "Project 5",
      image: "https://via.placeholder.com/300",
      url: "https://project5.com",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // Если мы на последнем проекте, переходим к первому
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    // Если мы на первом проекте, переходим к последнему
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getVisibleProjects = () => {
    // Для первого проекта отображаем только его и второй проект
    if (currentIndex === 0) {
      return [
        projects[projects.length - 1],
        projects[currentIndex],
        projects[currentIndex + 1],
      ];
    }
    // Для последнего проекта отображаем только его и предпоследний проект
    if (currentIndex === projects.length - 1) {
      return [projects[currentIndex - 1], projects[currentIndex], projects[0]];
    }
    // Для всех других проектов показываем текущий проект и его соседи
    return [
      projects[currentIndex - 1],
      projects[currentIndex],
      projects[currentIndex + 1],
    ];
  };

  const visibleProjects = getVisibleProjects();

  return (
    <div className="relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex justify-center items-center space-x-5 relative">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          disabled={false}
          className="absolute left-0 z-10 text-white bg-gray-800 hover:bg-red-600 hover:text-gray-800 p-3 rounded-full"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Контейнер с проектами */}
        <div className="flex justify-center items-center gap-5 w-full">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ease-in-out ${
                index === 1 ? "scale-100 opacity-100" : "scale-90 opacity-50"
              }`}
              style={{
                width: "500px", // Увеличение ширины карточек до 500px
                transform:
                  index === 0
                    ? "translateX(-50%)"
                    : index === 2
                    ? "translateX(50%)"
                    : "none",
              }}
            >
              <div className="bg-gray-800 text-white p-6 rounded-lg flex flex-col items-center">
                {/* Изображение проекта */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                {/* Название проекта */}
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>

                {/* Кнопка Go */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Go
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          disabled={false}
          className="absolute right-0 z-10 text-white bg-gray-800 p-3 hover:bg-red-600 hover:text-gray-800 rounded-full"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
