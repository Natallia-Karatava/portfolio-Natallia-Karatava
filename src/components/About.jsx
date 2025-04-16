import React from "react";
import { FaLinkedin, FaBehance, FaGithub, FaCode } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import NKfotoS from "../images/NK-foto-s.png";
import CVNatalliaKaratva from "../images/CV_Karatava_Natallia.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 text-gray-800 py-16 px-8 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[60%_20%] lg:grid-cols-[40%_16%_40%] gap-12 md:gap-16 lg:gap-20 items-center">
        {/* Left Section - About Text + Button */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg mb-6">
            I am a web developer passionate about creating modern and
            user-friendly interfaces. I love minimalism, clean code, and staying
            up-to-date with the latest technologies.
          </p>
          <a
            href={CVNatalliaKaratva}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600 hover:text-gray-800 transition w-max md:self-start self-center"
          >
            Look CV
          </a>
        </div>

        {/* Center Section - Photo + Social Icons */}
        <div className="relative bg-white shadow-lg rounded-lg py-6 flex flex-col items-center">
          {/* Social Icons above the photo */}
          <div className="flex gap-5 mx-3 md:mb-3">
            <a
              href="https://github.com/Natallia-Karatava"
              className="text-gray-800 text-4xl md:text-3xl hover:text-red-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/natallia-karatava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-4xl md:text-3xl hover:text-red-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.behance.net/natalliakaratava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-4xl md:text-3xl hover:text-red-600"
            >
              <FaBehance />
            </a>
          </div>
          {/* Photo Placeholder */}
          <div className=" hidden md:block w-28 h-36 md:w-32 md:h-40 bg-gray-100 rounded-lg">
            <img
              src={NKfotoS}
              alt="foto-NK"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section - Key Points */}
        <div className="flex flex-col gap-4 self-center md:self-end text-center md:text-left">
          <div className="flex items-start gap-3 justify-start">
            <IoLogoFigma className="text-3xl md:text-2xl text-gray-800" />
            <p className="text-lg text-left">
              Trained and experienced as a UI/UX-designer
            </p>
          </div>
          <div className="flex items-start gap-3 justify-start">
            <FaMoneyBillTrendUp className="text-2xl md:text-2xl text-gray-800" />
            <p className="text-lg text-left">
              6+ years of experience in finance
            </p>
          </div>
          <div className="flex items-start gap-3  justify-start">
            <FaCode className="text-3xl md:text-2xl text-gray-800" />
            <p className="text-lg text-left">
              Passionate about clean and optimized code
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
