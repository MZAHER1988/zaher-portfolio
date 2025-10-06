import React from 'react'
import img_experience from '../assets/experience.png'

export default function Experience() {
  return (

    <section id="experience" className="relative overflow-hidden text-gray-600 body-font flex flex-col" data-aos="fade-up" data-aos-delay="400">
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
                Experience
            </h1>
            <h2 className='title-font sm:text-2xl text-xl mb-4 font-bold text-white'>
                2023 - Present: Junior Full Stack Developer at Tech Solutions Inc.
            </h2>
            <p className="mb-8 leading-relaxed text-white">
                - Interned as a Full Stack Developer at Tech Solutions, where I contributed to the development of a web application using the MERN stack, enhancing my skills in React, Node.js, and MongoDB.<br/><br/>
                - Completed a project on E-commerce Website Development during my academic tenure, implementing features like user authentication, product management, and payment integration using HTML, CSS, JavaScript, and PHP.<br/><br/>
                - Participated in a collaborative project to develop a Task Management Application using React Native and Firebase, focusing on real-time data synchronization and user-friendly interface design.<br/><br/>
                - Engaged in freelance projects that involved building responsive websites for small businesses, utilizing my expertise in front-end technologies and ensuring optimal user experience across devices.
            </p>

        </div>

    </div>
    </section>
  )
}
