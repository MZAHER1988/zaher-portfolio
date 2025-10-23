import React from "react";

export default function Footer() {
  const listNavbar = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    
  ];

  return (
    <footer className="bg-gray-700 rounded-lg shadow mt-12 items-center justify-center space-y-4 md:space-y-0 md:flex md:justify-between md:items-center p-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="block text-xl font-bold py-3 text-center items-center justify-center md:py-0">
           <a href="#" className="text-orange-500 hover:underline">M ZAHER HARIRI</a>
        </span>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap items-center mt-1 text-xl font-medium sm:mt-0 justify-center">
            {listNavbar.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-200 hover:text-orange-500 me-4 md:me-6"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="py-8 text-center items-center justify-center md:py-0">
          <p className="text-gray-200 items-center justify-center">
            © 2025 My Portfolio. All rights reserved.
          </p>
        </div>

        
      </div>
    </footer>
  );
}
