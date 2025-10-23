import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import image1 from '../assets/project-1.png'
import image2 from '../assets/project-2.png'
import image3 from '../assets/project-3.png'
import image4 from '../assets/project-1.png'
import image5 from '../assets/project-2.png'

import { useTranslation } from 'react-i18next';

export default function Projects() {

        const { t } = useTranslation();

        const listProjects = [

            {id: 1, image:image1, title:t('projects.projectOne.title'), description: t('projects.projectOne.description')},
            {id: 2, image:image2, title:t('projects.projectTwo.title'), description: t('projects.projectTwo.description')},
            {id: 3, image:image3, title:t('projects.projectThree.title'), description: t('projects.projectThree.description')},
            {id: 4, image:image4, title:t('projects.projectFour.title'), description: t('projects.projectFour.description')},
            {id: 5, image:image5, title:t('projects.projectFive.title'), description: t('projects.projectFive.description')},
        ];
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                  breakpoint: 1024, // for desktop
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,  // for tablets
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,  // for mobile devices
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };

  return (

    <section id="projects" className="relative overflow-hidden text-white body-font flex flex-col" data-aos="fade-up" data-aos-delay="400">
        <div className="container px-5 py-24 mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">{t('projects.title')}</h2>
            <Slider {...settings}>
                {listProjects.map((project) => (
                    <div key={project.id} className="p-4">
                        {/*<div className="bg-[#1c2a48] p-6 rounded-lg shadow-lg hover:shadow-[0_0_40px_rgba(255,165,0,0.5)] transition-shadow duration-300 h-full text-center">*/}
                        <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden text-center p-0 hover:shadow-[0_0_40px_rgba(255,165,0,0.5)] transition-shadow duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center"/>
                            <div className="p-6">
                                <h3 className="tracking-widest text-xl title-font font-medium text-yellow-400 mb-1">{project.title}</h3>
                                <p className="leading-relaxed mb-3">{project.description}</p>
                            </div>
                            
                        </div>

                    </div>
                ))}
            </Slider>
        </div>

    </section>
  )
}
