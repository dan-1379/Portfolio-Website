import { useState } from "react"
import { Menu, X, Sun, Moon } from 'lucide-react';

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
          <a href="#" className="navbar-logo">Daniel Courtney</a>

          <ul className="navbar-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button onClick={toggleLightMode}>
                {lightModeOn ? <Sun /> : <Moon />}
              </button>
            </li>
          </ul>

          <div className="mobileNavMenu">
            <button onClick={toggleNavBar}>
              {mobileNavOpen ? <X size={30} /> : <Menu size={30} fill="none" />}
            </button>
          </div>
        </nav>

        {mobileNavOpen && (
            <div className="mobileNavbar-links">
              <ul className="navbar-links-mobile">
                <li><a href="#about" onClick={toggleNavBar}>About</a></li>
                <li><a href="#skills" onClick={toggleNavBar}>Skills</a></li>
                <li><a href="#projects" onClick={toggleNavBar}>Projects</a></li>
                <li><a href="#contact" onClick={toggleNavBar}>Contact</a></li>
                <li>
                  <button onClick={toggleLightMode}>
                    {lightModeOn ? <Sun /> : <Moon />}
                  </button>
                </li>
              </ul>
            </div>
          )}
      </div>
    </>
  )
}

export default Navbar