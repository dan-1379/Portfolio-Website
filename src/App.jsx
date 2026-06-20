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
      <a href="#" className = "backToTop"><ArrowUp className='backToTopArrow'/></a>
    </>
  )
}

export default App