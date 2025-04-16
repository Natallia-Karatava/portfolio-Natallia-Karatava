import { useState } from "react";
import CVNatalliaKaratva from "../images/CV_Karatava_Natallia.pdf";
import RedDotsSquare from "./RedDotsSquare";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center text-center py-16 px-6 bg-gray-100 text-gray-800 overflow-hidden"
    >
      <RedDotsSquare className="hidden lg:block" isHovered={isHovered} />

      <h2 className="text-3xl md:text-4xl font-semibold mb-6 relative z-10">
        I'm glad you are interested in my work!
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl relative z-10">
        Feel free to explore my projects and feel free to contact me if you have
        any questions or want to collaborate. Let's create something awesome
        together!
      </p>
      <div className="flex space-x-4 relative z-10">
        <a
          href="mailto:nkaratova@gmail.com"
          className="bg-gray-800 text-white hover:bg-red-600 hover:text-gray-800 px-6 py-3 rounded-lg text-lg font-medium shadow-md transition"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Contact Me
        </a>
        <a
          href={CVNatalliaKaratva}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 text-gray-800 px-9 py-3 rounded-lg text-lg font-medium shadow-md hover:text-red-600 transition"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Look CV
        </a>
      </div>
    </section>
  );
};

export default Contact;
