import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import image1 from '../assets/project-1.png'
import image2 from '../assets/project-2.png'
import image3 from '../assets/project-3.png'
import image4 from '../assets/project-1.png'
import image5 from '../assets/project-2.png'

export default function Projects() {

        const listProjects = [

            {id: 1, image:image1, title:'Project One', description: "Description for project one."},
            {id: 2, image:image2, title:'Project Two', description: "Description for project two."},
            {id: 3, image:image3, title:'Project Three', description: "Description for project three."},
            {id: 4, image:image4, title:'Project Four', description: "Description for project four."},
            {id: 5, image:image5, title:'Project Five', description: "Description for project five."},
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
            <h2 className="text-4xl font-bold text-center mb-12">My projects</h2>
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
