import hi_pic from "../assets/hi.png";
import cv from "../assets/MZH_CV_WEBBUTVECKLARE_1.pdf";
import img from "../assets/hero_bild_bg.png";
import git from "../assets/github-100.png";
import linkedin from "../assets/linkedin.png";
import { useTranslation } from "react-i18next";

export default function Hero() {
  // t reads translated strings from your i18n JSON files
  const { t } = useTranslation();

  return (
    // Main container for the Hero section with background effects
    <div className="relative overflow-hidden mx-auto px-5 py-24 flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10 relative py-20"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-26">
          {/** Text section*/}
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col md:items-start 
                       md:text-start mb-16 md:mb-0 items-center text-center relative justify-center"
          >
            {/** Decorative hi-pic image */}
            <img
              src={hi_pic}
              data-aos="fade-up"
              data-aos-delay="400"
              alt="hi-pic"
              className="absolute top-[350px] left-44 md:top-[-20px] md:left-[300px]
              transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 hidden md:block"
            />

            {/** Title and description */}
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-white animate-pulse-slow ">
              {t("hero.title")}
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              {t("hero.description")}
            </p>

            {/** Buttons and social media links */}
            <div className="flex flex-col flex-wrap items-start gap-4 md:ml-8">
              <a href={cv} download>
                <button
                  className="gradient-glow inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none 
                hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.5)] rounded-full text-lg mr-4"
                >
                  {t("hero.downloadCv")}
                </button>
              </a>

              <div className="flex justify-around items-center mt-4 gap-4 glow">
                <img
                  src={linkedin}
                  alt={t("hero.linkedinAlt")}
                  className="cursor-pointer h-14 w-14 mr-6"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/zaher-hariri-781686210/",
                      "_blank"
                    )
                  }
                />

                <img
                  src={git}
                  alt={t("hero.githubAlt")}
                  className="cursor-pointer h-16 w-16"
                  onClick={() =>
                    window.open(
                      "https://github.com/MZAHER1988/myPortfolio-in-react",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/** Section's image */}
          <div className="lg:max-w-lg lg:w-full flex justify-center items-center md:w-1/2 w-5/6 min-h-[22rem] min-w-[22rem]">
            <img
              src={img}
              alt={t("hero.photoAlt")}
              className="object-cover object-center rounded-full w-80 h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
