import { useState } from "react";
import { FaBuromobelexperte } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-md transition-transform duration-300 transform-gpu z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* <!-- Logo --> */}
          <a
            href="#"
            onClick={(e) => handleScroll(e, "top")}
            className="text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors"
          >
            NK
          </a>

          {/* <!-- Navigation Links --> */}
          <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="hover:text-red-600 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleScroll(e, "skills")}
                className="hover:text-red-600 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="hover:text-red-600 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="hover:text-red-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* <!-- Mobile Menu Button --> */}
          <button
            id="menu-btn"
            onClick={toggleMenu}
            className="md:hidden flex items-center ml-auto text-gray-800"
          >
            <FaBuromobelexperte className="w-7 h-7" />
          </button>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div
          id="mobile-menu"
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-white shadow-md`}
        >
          <ul className="space-y-4 p-4 text-gray-800 font-medium text-right">
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="block hover:text-red-500 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleScroll(e, "skills")}
                className="block hover:text-red-500 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects-mobile"
                onClick={(e) => handleScroll(e, "projects-mobile")}
                className="block hover:text-red-500 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="block hover:text-red-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
