import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const listNavbar = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const listHamburgerMeny = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      const Offset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + Offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    window.history.replaceState(null, "", href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      data-aos="fade-up"
      className="text-gray-600 body-font fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur-sm "
    >
      <div className="container mx-auto flex flex-row p-5 items-center justify-between w-full">
        <a
          href="#home"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <span className="ml-3 text-orange-500 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
            M ZAHER HARIRI
          </span>
        </a>
        <nav className="hidden sm:flex text-white text-base justify-end items-center">
          {listNavbar.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mr-5 hover:text-yellow-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
        {/** Mobile Menu*/}
        <div className="rounded-lg backdrop-blur-md sm:hidden">
          <div className="flex items-center justify-end w-full">
            <div className="flex items-center justify-end w-full">
              <button
                className="focus:outline-none sm:hidden p-2 text-white hover:text-yellow-300"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          
        </div>
      </div>
      {isMobileMenuOpen && (
            <div className="sm:hidden w-full border border-white/10 mx-auto">
              <ul className="mx-auto max-w-none px-5 py-4 flex flex-col gap-4 backdrop-blur-md shadow-xl">
                {listHamburgerMeny.map((item, index) => (
                  <li key={index}>
                    <a
                      className="block w-full text-xl font-bold text-gray-400"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                    className="block w-full text-center rounded-md border border-white/70 text-white
                       py-2 bg-orange-500 hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          )}
    </header>
  );
}
