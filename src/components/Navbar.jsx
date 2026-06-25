import { useState } from "react"
import { Menu, X, Sun, Moon, Handshake, Computer, MapPin } from 'lucide-react';

const Navbar = () => {
  const[mobileNavOpen, setMobileNavOpen] = useState(false);
  const[lightModeOn, setLightModeOn] = useState(false);

  const toggleNavBar = () => {
    setMobileNavOpen(!mobileNavOpen);
  }

  const toggleLightMode = () => {
    setLightModeOn(!lightModeOn);
    document.body.classList.toggle('light-mode');
  }

  return (
    <>
      <div className="nav-wrapper">
        <nav>
          <button 
            onClick={toggleLightMode}
            aria-label={lightModeOn ? "Switch to dark mode" : "Switch to light mode"}
          >
            {lightModeOn ? <Sun /> : <Moon />}
          </button> 
          <a href="#" className="navbar-logo" aria-label="Daniel Courtney, Headshot">Daniel Courtney</a>

          <ul className="navbar-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button 
                onClick={toggleLightMode}
                aria-label={lightModeOn ? "Switch to dark mode" : "Switch to light mode"}
              >
                {lightModeOn ? <Sun /> : <Moon />}
              </button>
            </li>
          </ul>

          <div className="mobileNavMenu">
            <button 
              onClick={toggleNavBar}
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? <X size={30} /> : <Menu size={30} fill="none" />}
            </button>
          </div>
        </nav>

        {mobileNavOpen && (
          <>
            <div className="navOverlay" onClick={toggleNavBar}></div>

            <div className="mobileNavbar-links">
              <div className="upperMenu">
                <button 
                  onClick={toggleNavBar}
                  aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileNavOpen}
                >
                  {mobileNavOpen ? <X size={30} /> : <Menu size={30} fill="none" />}
                </button>

                <h3>Navigation</h3>

                <button 
                  onClick={toggleLightMode}
                  aria-label={lightModeOn ? "Switch to dark mode" : "Switch to light mode"}
                >
                  {lightModeOn ? <Sun /> : <Moon />}
                </button>
              </div>

              <ul className="navbar-links-mobile">
                <li><a href="#about" onClick={toggleNavBar}><span className="navbar-link-index">01</span>About</a></li>

                <li><a href="#skills" onClick={toggleNavBar}><span className="navbar-link-index">02</span>Skills</a></li>

                <li><a href="#projects" onClick={toggleNavBar}><span className="navbar-link-index">03</span>Projects</a></li>
                
                <li><a href="#contact" onClick={toggleNavBar}><span className="navbar-link-index">04</span>Contact</a></li>
              </ul>

              <div className="navbar-footer-mobile">
                <div className="contactLink">
                  <Handshake className='contactIcon' aria-hidden = "true"/>
                  <a href="https://www.linkedin.com/in/daniel-courtney-7b9255331/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>

                <div className="contactLink">
                  <Computer className='contactIcon' aria-hidden = "true"/>
                  <a href="https://github.com/dan-1379" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </>
          )}
      </div>
    </>
  )
}

export default Navbar