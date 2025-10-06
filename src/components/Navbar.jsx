import React from "react";

export default function Navbar() {
  const listNavbar = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Language", href: "#language" },
    { name: "Projects", href: "#projects" },
    
  ];

  return (
    <header data-aos="fade-up" className="text-gray-600 body-font z-10 fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-white text-3xl font-bold">My Portfolio</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap md:mr-auto items-center text-white text-base justify-center">
          {
            listNavbar.map((item) => (
              <a key={item.name} href={item.href} className="mr-5 hover:text-yellow-300">

                {item.name}
              
              </a>
            ))
          }
        </nav>

        <button className="inline-flex items-center py-1 px-7 focus:outline-none text-base text-white mt-4 md:mt-0 border border-white hover:border-yellow-500 hover:text-gray-900">
          <a href="#contact">Contact me</a>

        </button>
      </div>
    </header>
  );
}
