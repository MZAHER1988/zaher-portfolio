import React from 'react'
import img_experience from '../assets/experience.png'

export default function About() {
  return (

    <section id="about" className="relative overflow-hidden text-gray-600 body-font flex flex-col" data-aos="fade-up" data-aos-delay="400">
        <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
            <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full"></div>
            <div className="h-96 w-96 bg-gradient-to-r from-[#ff910a] blur-2xl opacity-40 rounded-full"></div>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div data-aos="fade-right" data-aos-delay="400" className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
                <div className='md:h-[450px] h-[400px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(255,165,0,0.7)] z-0'></div>
            <img src={img_experience} className='object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10 rotate-3' alt="Experience"/>            
            </div>
        <div data-aos="fade-left" data-aos-delay="400" className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500">
                About Me
            </h1>
            <h2 className='title-font sm:text-2xl text-xl mb-4 font-bold text-white'>
                2022 - 2025  From Student to Developer.
            </h2>
            <p className="mb-8 leading-relaxed text-white">
                I'm a motivated and curious Web Developer and graduate from Karlstad University, 
                with a strong passion for creating clean, responsive, and user-friendly websites. 
                With experience in languages and frameworks such as C#, Java, PHP, Node.js, SQL, JavaScript, and React, 
                I am adaptable and always eager to expand my skill set. 
                I enjoy learning new technologies and improving my skills in both front-end and back-end development. 
                My goal is to grow as a developer, become a full-stack developer, contribute to projects that make a difference, 
                and continue learning every day to build better digital experiences.<br/><br/>
                
                <strong> <i> Currently, I’m focusing on: </i>  </strong> <br/><br/>
                - Web Development: Building responsive and interactive websites using HTML, CSS, JavaScript, React, and Tailwind CSS.<br/><br/>  
                - App Development: Creating small desktop and mobile applications using C# and Java.<br/><br/>
                - Continuous Learning: Exploring new tools and frameworks to improve my coding skills and problem-solving mindset.<br/><br/>
                - Creative Projects: Working on personal projects that help me apply what I learn and develop my creativity.<br/><br/>
                

            </p>

        </div>

    </div>
    </section>
  )
}
