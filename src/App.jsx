import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
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
        href="#" 
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