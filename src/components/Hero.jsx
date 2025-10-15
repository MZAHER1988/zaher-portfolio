import React from "react";
import Navbar from "./Navbar";
import hi_pic from "../assets/hi.png";
import cv from "../assets/CV_MZH.pdf";
import img from "../assets/my-bild-3.jpg";
import git from "../assets/github-100.png";
import linkedin from "../assets/linkedin.png";

export default function Hero() {
  return (

    
    //<div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
    <div className="relative overflow-hidden min-h-screen sm:min-h-screen flex flex-col">
      
      <div
        className="md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600 
        via-yellow-500 to-rose-400 absolute rounded-full rotate-12 -top-20 shadow-[0_0_40px_rgba(255,165,0,0.7)]"
      ></div>
      
      <Navbar />

      <section id="home" data-aos="fade-up" data-aos-delay="250" className="text-white body-font z-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-26">
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
          md:text-left mb-16 md:mb-0 items-center text-center relative justify-center"
          >
            <img
              src={hi_pic} data-aos="fade-up" data-aos-delay="400"
              alt="hi-pic"
              className="absolute top-[350px] left-44 md:top-[-30px] md:left-[450px]
              transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 hidden md:block"
            />
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-white">
              Hi, I'm Zaher
            </h1>
            <p className="mb-8 leading-relaxed">
              A passionate web developer focused on building responsive, user-friendly, and modern websites.
              I love learning new technologies and turning creative ideas into reality through code.
              <b> Always learning. Always improving. </b>
            </p>
            <div className="flex flex-col flex-wrap items-start gap-4 glow">
              <a href={cv} download>
                <button
                  className="gradient-glow inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none 
                hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.5)] rounded-full text-lg mr-4"
                >
                  Download CV
                </button>
              </a>

              <div className="flex justify-around items-center mt-4 ">
                <img
                  src={linkedin}
                  alt="My linkedin profile"
                  className="cursor-pointer h-14 w-14 mr-6"
                  onClick={() => window.open("https://linkedin.com/", "_blank")}
                />

                <img
                  src={git}
                  alt="My github profile"
                  className="cursor-pointer h-16 w-16"
                  onClick={() => window.open("https://github.com", "_blank")}
                />
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full flex justify-center items-center md:w-1/2 w-5/6  min-h-[22rem] min-w-[22rem]">
          {/*<img src={img} alt="My Image" className="object-cover object-center rounded-full w-80 h-80"/>*/}
          
          </div>
        </div>
      </section>
    </div>
  ); 
}
