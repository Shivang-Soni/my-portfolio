import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black/50 text-white sticky top-0 z-50 backdrop-blur-md shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition duration-300 cursor-pointer">
        Shivang Soni
      </h1>
      <h1 className="text-4xl font-bold tracking-wide hover:text-yellow-400 transition duration-300 cursor-pointer text-center">
        MY PORTFOLIO
      </h1>
      {/* Links */}
      <ul className="flex space-x-8 text-lg">
        <li>
          <a
            href="#about"
            className="hover:text-yellow-400 transition duration-300 relative after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-yellow-400 transition duration-300 relative after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-yellow-400 transition duration-300 relative after:block after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
