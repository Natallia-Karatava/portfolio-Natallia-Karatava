const Hero = () => {
  return (
    <div className="hero bg-whit min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-40">
        <img src="src/images/NK-foto.png" className="max-w-sm rounded-lg " />
        <div>
          <h1 className="text-5xl font-bold pb-4">Hi, I'm Natallia</h1>
          <h2 className="text-3xl text-red-600">Web-Developer</h2>{" "}
          <h2 className="pb-10">with a background in UI/UX-Designer</h2>
          <button className="bg-gray-800 text-white hover:bg-red-600 hover:text-gray-800 px-4 py-2 rounded">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
