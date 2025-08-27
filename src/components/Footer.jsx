import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-12 shadow-inner">
            <div className="w-full flex flex-col md:flex-row justify-between px-4 items-center md:px-8">
                {/* Links */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm">© 2025 <span className="font-semibold text-white">Shivang Soni</span>. All rights reserved.</p>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-10 text-lg ">
                    <a href="https://www.linkedin.com/in/shivangsoni-ai/" className="hover:text-yellow-400 transition duration-300 ">LinkedIn</a>
                    <a href="https://github.com/Shivang-Soni" className="hover:text-yellow-400 transition duration-300 ">GitHub</a>
                    <a href="mailto:soni.shivang.999@gmail.com" className="hover:text-yellow-400 transition duration-300">E-mail</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
