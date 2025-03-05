const Navbar = () => {
  return (
    <div>
      <nav
        id="navbar"
        className="fixed w-full bg-white/80 backdrop-blur-md shadow-md transition-transform duration-300 transform-gpu z-50"
      >
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* <!-- Logo --> */}
          <a
            href="#"
            className="text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors"
          >
            NK
          </a>

          {/* <!-- Navigation Links --> */}
          <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-red-600 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* <!-- Mobile Menu Button --> */}
          <button
            id="menu-btn"
            className="md:hidden flex items-center text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* 
    <!-- Mobile Menu --> */}
        <div id="mobile-menu" className="hidden bg-white md:hidden shadow-md">
          <ul className="space-y-4 p-4 text-gray-800 font-medium">
            <li>
              <a
                href="#"
                className="block hover:text-red-500 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:text-red-500 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:text-red-500 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
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
