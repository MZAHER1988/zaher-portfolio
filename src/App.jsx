import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Language from './components/Language'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
//import './App.css'
import './index.css'

function App() {
  useEffect(() => {
    Aos.init({ 
      duration: 2000,
      once: false,
      mirror: true,
     })
  }, []);
  return (
    <main className='bg-[#0d182e]'>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      {/* <Experience /> */}
      {/* <Language /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  )
}

export default App
