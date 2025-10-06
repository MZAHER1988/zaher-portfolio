import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-[#0d182e] overflow-hidden" data-aos='fade-up' data-aos-delay='400'>
        <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
          <h2 className="text-4xl font-extrabold text-center mb-4 tracking-tight text-white">Contact Me</h2>
          <form action='#' className="space-y-8 bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.15)]">
            <div>
              <label htmlFor="name" className="block mb-2 text-xl font-medium text-white">Your Name</label>
              <input type="text" id='name' placeholder="Your Name" 
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300
                         border border-white/20 shadow-[0_0_20px_rgba(255,165,0,0.4)]
                         focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-[0_0_30px_rgba(255,165,0,0.7)]
                         transition-all duration-300"
                         autoComplete='name'
                         required/>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-xl font-medium text-white">Your Email</label>
              <input 
              type="email" id="email" placeholder="youremail@example.com" 
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300
                         border border-white/20 shadow-[0_0_20px_rgba(255,165,0,0.4)]
                         focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-[0_0_30px_rgba(255,165,0,0.7)]
                         transition-all duration-300"
              autoComplete='email'
              required/>
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor="message" className="block mb-2 text-xl font-medium text-white">Your Message</label>
              <textarea id="message" rows={6} placeholder="Write your message here..." 
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300
                         border border-white/20 shadow-[0_0_20px_rgba(255,165,0,0.4)]
                         focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-[0_0_30px_rgba(255,165,0,0.7)]
                         transition-all duration-300"
              autoComplete='off'
              required />
            </div>
            <button type="submit" 
            className="inline-flex items-center justify-center bg-orange-500 text-white py-3 px-8 rounded-full text-lg
                       font-medium shadow-[0_0_20px_rgba(255,165,0,0.4)]
                       hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.6)]
                       transition-all duration-300">Send Message</button>
          </form>
        </div>

</section>





      /*<div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <form className="flex flex-col">
          <input type="text" placeholder="Your Name" className="mb-4 p-2 rounded"/>
          <input type="email" placeholder="Your Email" className="mb-4 p-2 rounded"/>
          <textarea placeholder="Your Message" className="mb-4 p-2 rounded"></textarea>
          <button type="submit" className="bg-orange-400 text-white py-2 px-4 rounded">Send Message</button>
        </form>
      </div>*/
    
  )
}
