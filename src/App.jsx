import Navbar from './components/00_Navbar/Navbar.jsx'
import Hero from './components/01_Hero/Hero.jsx'
import About from './components/02_About/About.jsx'
import Skills from './components/03_Skills/Skills.jsx'
import Projects from './components/04_Projects/Projects.jsx'
import Contact from './components/05_Contact/Contact.jsx'
import Footer from './components/06_Footer/Footer.jsx'
import { ArrowUp } from 'lucide-react';


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <a 
        href="#pageTop" 
        className = "backToTop" 
        aria-label='Back to top'
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth"})
        }}
      >
        <ArrowUp className='backToTopArrow' aria-hidden="true"/>
      </a>
    </>
  )
}

export default App