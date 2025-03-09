const ProjectMobile = ({ projects }) => {
  return (
    <section
      id="projects-mobile"
      className="bg-white text-gray-800 pt-10 pb-14 px-8 scroll-mt-16"
    >
      <h2 className="text-4xl font-semibold text-center mb-8">My Projects</h2>

      {/* Card scroll*/}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 rounded-lg overflow-hidden shadow-lg"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {/* Image*/}
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                {/* Info*/}
                <div className="bg-white p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.name}
                  </h3>
                  <button className="mt-2 inline-block text-gray-800 px-2 hover:text-red-600 transition duration-300">
                    Go to view
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectMobile;
