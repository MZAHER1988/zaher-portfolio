import React from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";


export default function Navbar() {
  {
    /** Language Dropdown */
  }
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  //const [isLangOpenMobile, setIsLangOpenMobile] = useState(false);



  const langs = [
  { code: "en", name: "English", dir: "ltr", flag: "🌐 EN" },
{ code: "sv", name: "Svenska", dir: "ltr", flag: "🌐 SE" },
{ code: "ar", name: "العربية", dir: "rtl", flag: "🌐 AR" },
  ];

  const current = (i18n.language || "en").split("-")[0];
  const currentLang = langs.find((l) => l.code === current) || langs[1];

  {
    /** Change language function */
  }
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  };

  {
    /** Navbar links */
  }
  const listNavbar = [
    { name: "nav.home", href: "#home" },
    { name: "nav.skills", href: "#skills" },
    { name: "nav.about", href: "#about" },
    { name: "nav.projects", href: "#projects" },
    { name: "nav.contact", href: "#contact" },
  ];

  {
    /** Hamburger menu links */
  }
  const listHamburgerMenu = [
    { name: "nav.home", href: "#home" },
    { name: "nav.skills", href: "#skills" },
    { name: "nav.about", href: "#about" },
    { name: "nav.projects", href: "#projects" },
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
        {/** Desktop Menu */}
        <nav className="hidden sm:flex text-white text-base justify-end items-center">
          {listNavbar.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mr-5 hover:text-yellow-300"
            >
              {t(item.name)}
            </a>
          ))}
          {/** Language Dropdown */}

          <div className="relative">
            <button
              onClick={() => setIsLangOpen((o) => !o)}
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-orange-500/20 transition focus:outline-none mx-3"
              aria-haspopup="menu"
              aria-expanded={isLangOpen}
            >
              <FaGlobe className="text-xl" />
              <span className="text-sm opacity-90">{currentLang.name}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isLangOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isLangOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-40 rounded-md border border-white/10 bg-black/80 backdrop-blur-md shadow-lg"
              >
                {langs.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center w-full gap-2 px-3 py-2 text-left text-sm hover:bg-orange-500/30 ${
                      current === lang.code ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    {/* ✅ här visas "EN", "SE", "AR" alltid */}
                    <span className="px-2 py-0.5 rounded bg-white/10 text-xs font-semibold">
                      {lang.flag || lang.code.toUpperCase()}
                    </span>
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
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
            {listHamburgerMenu.map((item, index) => (
              <li key={index}>
                <a
                  className="block w-full text-xl font-bold text-gray-400"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {t(item.name)}
                </a>
              </li>
            ))}

                        {/** Language Switcher */}
            <li className="flex gap-3 pt-4 justify-center text-white m-y-4">
              {langs.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`text-xl font-semibold px-3 py-1 rounded bg-white/10 transition-transform hover:scale-110 ${
                    current === lang.code
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  title={lang.name}
                >
                  {/* ✅ fallback om flag saknas */}
                  {lang.flag || lang.code.toUpperCase()}
                </button>
              ))}
            </li>

            <li className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="block w-full text-center rounded-md border border-white/70 text-white
                       py-2 bg-orange-500 hover:bg-white hover:text-gray-900 transition-colors"
              >
                {t("nav.contact")}
              </a>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
}
