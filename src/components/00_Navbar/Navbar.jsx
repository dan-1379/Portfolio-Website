import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import LightModeToggle from "./LightModeToggle";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const[mobileNavOpen, setMobileNavOpen] = useState(false);
  const[lightModeOn, setLightModeOn] = useState(false);

  useEffect(() => {
    const colorMode = localStorage.getItem("light-mode");
    const isLight = colorMode === "true";

    setLightModeOn(isLight);
    document.body.classList.toggle('light-mode', isLight);
  }, []);

  const toggleNavBar = () => setMobileNavOpen(!mobileNavOpen);

  const toggleLightMode = () => {
    const mode = !lightModeOn;
    setLightModeOn(mode);
    document.body.classList.toggle('light-mode', mode);
    localStorage.setItem("light-mode", mode);
  }

  return (
    <>
      <div className="nav-wrapper">
        <nav id="pageTop">
          <LightModeToggle lightModeOn={lightModeOn} onToggle={toggleLightMode} /> 
          
          <a href="#" className="navbar-logo" aria-label="Daniel Courtney, Headshot">
            Daniel Courtney
          </a>

          <DesktopNav lightModeOn={lightModeOn} onToggle={toggleLightMode} />

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

        {mobileNavOpen && 
          <MobileNav 
            isOpen={mobileNavOpen} 
            onClose={toggleNavBar} 
            lightModeOn={lightModeOn}
            onToggle={toggleLightMode}
          />
        }
      </div>
    </>
  )
}

export default Navbar