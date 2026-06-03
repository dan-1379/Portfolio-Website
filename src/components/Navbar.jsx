import { useState } from "react"
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const[mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileNavOpen(!mobileNavOpen);
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
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          )}
      </div>
    </>
  )
}

export default Navbar