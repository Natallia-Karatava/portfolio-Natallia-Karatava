import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center py-16 px-6 bg-gray-100 text-gray-800"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        I'm glad you are interested in my work!
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Feel free to explore my projects and feel free to contact me if you have
        any questions or want to collaborate. Let's create something awesome
        together!
      </p>
      <div className="flex space-x-4">
        <a
          href="mailto:nkaratova@gmail.com"
          className="bg-gray-800 text-white hover:bg-red-600 hover:text-gray-800 px-6 py-3 rounded-lg text-lg font-medium shadow-md transition"
        >
          Contact Me
        </a>
        <a
          href="src/images/CV-Karatava Natallia-DE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 text-gray-800 px-9 py-3 rounded-lg text-lg font-medium shadow-md hover:text-red-600 transition"
        >
          Look CV
        </a>
      </div>
    </section>
  );
};

export default Contact;
