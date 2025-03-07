const Hero = () => {
  return (
    <div className="hero bg-white min-h-screen flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-32 w-full max-w-7xl px-6">
        <img
          src="src/images/NK-foto.png"
          className="w-full max-w-md lg:max-w-lg h-auto rounded-lg"
          alt="Natallia"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-gray-800 text-5xl font-bold pb-4">
            Hi, I'm Natallia
          </h1>
          <h2 className="text-3xl text-red-600 pb-1">Web Developer</h2>
          <h2 className="text-gray-800 pb-8">
            with a background in UI/UX Design
          </h2>
          <a
            href="mailto:nkaratova@gmail.com"
            className="bg-gray-800 text-white hover:bg-red-600 hover:text-gray-800 px-6 py-4 rounded text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
